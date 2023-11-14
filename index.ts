import express, { Request, Response } from 'express';
// import { PrismaClient } from "./prisma/generated/client/edge";
import { PrismaClient } from "./prisma/generated/client";

const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const prisma = new PrismaClient();

app.get("/api/v1/items", async (req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        created_at: 'desc' 
      },
      include: {
        histories: {
          orderBy: {
            created_at: 'desc'
          }
        }
      },
    });
    res.status(200).json({ httpStatus: 200, items });
  } catch (error: any) {
    console.error("Error fetching items:", error);
    res.status(500).json({ httpStatus: 500, error: "Error fetching items" });
  }
});

app.get("/api/v1/items/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const item = await prisma.item.findUnique({
      where: {
        id,
      },
      include: {
        histories: {
          orderBy: {
            created_at: 'desc'
          }
        }
      },
    });
    res.status(200).json({ httpStatus: 200, item });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.get("/api/v1/items/currency/:currencyCode", async (req: Request, res: Response) => {
  const currencyCode = req.params.currencyCode;
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        created_at: 'desc' 
      },
      where: {
        currencyCode: currencyCode as any,
      },
      include: {
        histories: {
          orderBy: {
            created_at: 'desc'
          }
        }
      },
    });
    res.status(200).json({ httpStatus: 200, items });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.post("/api/v1/items", async (req: Request, res: Response) => {
  const { name, currencyCode } = req.body;

  try {
    const item = await prisma.item.create({
      data: {
        name,
        currencyCode,
      },
    });

    res.status(201).json({ httpStatus: 201, item });
  } catch (e) {
    console.error("Error creating item:", e);
    return res.status(400).json({ error: "Error creating item" });
  }
});

app.put("/api/v1/items/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, currencyCode } = req.body;
  try {
    const item = await prisma.item.update({
      where: { id },
      data: { name, currencyCode },
    });
    res.status(200).json({ httpStatus: 200, item });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.delete("/api/v1/items/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const item = await prisma.item.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ httpStatus: 200, item });
  } catch (e) {
    return res.status(400).json(e);
  }
});

//アイテム値段履歴の一覧取得
app.get("/api/v1/itemhistory", async (req: Request, res: Response) => {
  const itemHistorys = await prisma.itemHistory.findMany();
  res.status(200).json({ httpStatus: 200, itemHistorys });
});

//アイテム値段履歴の新規作成
app.post("/api/v1/itemhistory", async (req: Request, res: Response) => {
  const { price, itemId, rate, inverseRate } = req.body;
  try {
    const itemHistory = await prisma.itemHistory.create({
      data: {
        price,
        itemId,
        rate,
        inverseRate,
      },
    });
  res.status(201).json({ httpStatus: 201, itemHistory });
  } catch (e) {
    return res.status(400).json(e);
  }
});

//アイテム値段履歴の編集
app.put("/api/v1/itemhistory/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { price, itemId,rate,inverseRate } = req.body;
  try {
    const itemHistory = await prisma.itemHistory.update({
      where: { id },
      data: { price, itemId, rate, inverseRate },
    });
  res.status(200).json({ httpStatus: 200, itemHistory });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.delete("/api/v1/itemhistory/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const itemHistory = await prisma.itemHistory.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ httpStatus: 200, itemHistory });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.post("/api/v1/itemsadd", async (req: Request, res: Response) => {
  const { name, currencyCode, price, rate, inverseRate } = req.body;

  try {
    await prisma.$transaction(async (prisma) => {
      // 1. Item テーブルに新しいレコードを作成
      const item = await prisma.item.create({
        data: {
          name,
          currencyCode
        },
      });

      // 2. ItemHistory テーブルに新しいレコードを作成
      const itemHistory = await prisma.itemHistory.create({
        data: {
          price,
          itemId: item.id, // Item レコードの ID を使用して関連付け
          rate,
          inverseRate
        },
      });

      // 応答に成功した情報を返す
      res.status(201).json({ httpStatus: 201, item, itemHistory });
    });
  } catch (error) {
    console.error("Error creating item and itemHistory:", error);
    return res.status(400).json({ error: "Error creating item and itemHistory" });
  } finally {
    await prisma.$disconnect(); // 必要に応じてPrismaの接続を切断する
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));