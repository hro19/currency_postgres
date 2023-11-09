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
      include: {
        histories: true,
      },
    });
    res.json(items);
  } catch (error: any) {
    console.error("Error fetching items:", error);
    res.status(500).json({ error: "Error fetching items" });
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
        histories: true,
      },
    });
    return res.json(item);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.get("/api/v1/items/currency/:currencyCode", async (req: Request, res: Response) => {
  const currencyCode = req.params.currencyCode;
  try {
    const items = await prisma.item.findMany({
      where: {
        currencyCode: {
          equals: currencyCode,
        },
      },
      include: {
        histories: true,
      },
    });
    return res.json(items);
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

    return res.json(item);
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
      data: { name, currencyCode, updated_at: new Date() },
    });
    return res.json(item);
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
    return res.json(item);
  } catch (e) {
    return res.status(400).json(e);
  }
});

//アイテム値段履歴の一覧取得
app.get("/api/v1/itemhistory", async (req: Request, res: Response) => {
  const ItemHistorys = await prisma.itemHistory.findMany();
  return res.json(ItemHistorys);
});

//アイテム値段履歴の新規作成
app.post("/api/v1/itemhistory", async (req: Request, res: Response) => {
  const { price, itemId } = req.body;
  try {
    const itemHistory = await prisma.itemHistory.create({
      data: {
        price,
        itemId,
      },
    });
    return res.json(itemHistory);
  } catch (e) {
    return res.status(400).json(e);
  }
});

//アイテム値段履歴の編集
app.put("/api/v1/itemhistory/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { price, itemId } = req.body;
  try {
    const itemHistory = await prisma.itemHistory.update({
      where: { id },
      data: { price, itemId, updated_at: new Date() },
    });
    return res.json(itemHistory);
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
    return res.json(itemHistory);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));