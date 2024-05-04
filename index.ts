import express, { Request, Response } from 'express';
// import { PrismaClient } from "./prisma/generated/client/edge";
import { PrismaClient } from "./prisma/generated/client";

const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const prisma = new PrismaClient();

// ここに共通ヘッダーのmiddlewareを定義
app.use((req: Request, res: Response, next) => {
  // 共通処理を記述
  next();
});

app.get("/api/v1/items", async (req: Request, res: Response) => {
  const { useremail } = req.headers;
  if (!useremail) {
    return res.status(500).json({ httpStatus: 500 });
  }
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        created_at: 'desc' 
      },
      where: {
        userEmail: useremail as string,
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
  const { useremail } = req.headers;
  if (!useremail) {
    return res.status(500).json({ httpStatus: 500 });
  }
  const currencyCode = req.params.currencyCode;
  try {
    const items = await prisma.item.findMany({
      orderBy: {
        created_at: 'desc' 
      },
      where: {
        currencyCode: currencyCode as any,
        userEmail: useremail as string,
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
  const { name, currencyCode,userEmail } = req.body;

  try {
    const item = await prisma.item.create({
      data: {
        name,
        currencyCode,
        userEmail
      },
    });

    res.status(201).json({ httpStatus: 201, item });
  } catch (e) {
    console.error("Error creating item:", e);
    return res.status(400).json({ error: "Error creating item" });
  }
});

//bulkでinsertでitemsにデータを追加
app.post("/api/v1/items/bulk", async (req: Request, res: Response) => {
  const items = req.body;

  try {
    const createdItems = await prisma.item.createMany({
      data: items.map((item:any) => ({
        name: item.name,
        currencyCode: item.currencyCode,
        userEmail: item.userEmail,
      })),
      skipDuplicates: true, // 重複するデータがあった場合、スキップする
    });

    res.status(201).json({ httpStatus: 201, createdItems });
  } catch (e) {
    console.error("Error creating items:", e);
    return res.status(400).json({ error: "Error creating items" });
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
  const { price, itemId, rate, inverseRate } = req.body;
  try {
    const itemHistory = await prisma.itemHistory.update({
      where: { id },
      data: { price, itemId, updated_at: new Date(), rate, inverseRate },
    });
  res.status(200).json({ httpStatus: 200, itemHistory });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.delete("/api/v1/itemhistory/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    // itemHistory テーブルのレコードを取得する
    const itemHistory = await prisma.itemHistory.findFirst({
      where: {
        id,
      },
    });

    // item テーブルの ID を取得する
    const itemId = itemHistory?.itemId;

    // itemHistory テーブルから対応する itemId の数を取得する
    const itemHistoryCount = await prisma.itemHistory.count({
      where: {
        itemId,
      },
    });

    // itemHistory テーブルから対応する itemId が 1 つであれば、item テーブルも削除する
    if (itemHistoryCount === 1) {
      // item テーブルを削除する
      await prisma.item.delete({
        where: {
          id: itemId,
        },
      });
      // prisma.itemが消えればそれに対応するitemHistoryも消えます（supabaseの設定）。
    } else {
      // itemHistory テーブルのレコードを削除する
      await prisma.itemHistory.delete({
        where: {
          id,
        },
      });
    }

    res.status(200).json({ httpStatus: 200 });
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.post("/api/v1/itemsadd", async (req: Request, res: Response) => {
  const { name, currencyCode, price, rate, inverseRate, userEmail } = req.body;

  try {
    await prisma.$transaction(async (prisma) => {
      // 1. Item テーブルに新しいレコードを作成
      const item = await prisma.item.create({
        data: {
          name,
          currencyCode,
          userEmail
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

//bulkでinsertでitems,itemHistoryにデータを追加
app.post("/api/v1/itemsadd/bulk", async (req: Request, res: Response) => {
  const items = req.body;

  try {
    const createdItems = await prisma.$transaction(async (prisma) => {
      const createdItemsWithHistories = await Promise.all(
        items.map(async (item:any) => {
          // 1. Item テーブルに新しいレコードを作成
          const createdItem = await prisma.item.create({
            data: {
              name: item.name,
              currencyCode: item.currencyCode,
              userEmail: item.userEmail,
            },
          });

          // 2. ItemHistory テーブルに新しいレコードを作成
          const itemHistory = await prisma.itemHistory.create({
            data: {
              price: item.price,
              itemId: createdItem.id, // Item レコードの ID を使用して関連付け
              rate: item.rate,
              inverseRate: item.inverseRate,
            },
          });

          return { item: createdItem, itemHistory };
        })
      );

      // 応答に成功した情報を返す
      res.status(201).json({ httpStatus: 201, createdItemsWithHistories });
    });
  } catch (error) {
    console.error("Error creating items and itemHistories:", error);
    return res.status(400).json({ error: "Error creating items and itemHistories" });
  } finally {
    await prisma.$disconnect(); // 必要に応じてPrismaの接続を切断する
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// 単体itemのヒストリーを全て書き換えるAPI
app.post("/api/v1/items/:id/new_itemhistories", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const newItemHistories = req.body;

  try {
    await prisma.$transaction(async (prisma) => {
      // 対応するitemを取得
      const item = await prisma.item.findUnique({
        where: {
          id,
        },
        include: {
          histories: true,
        },
      });

      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

      // 既存のitemHistoriesを削除
      await prisma.itemHistory.deleteMany({
        where: {
          itemId: id,
        },
      });

      // 新しいitemHistoriesを作成
      const createdItemHistories = [];
      for (const newItemHistory of newItemHistories) {
        const createdItemHistory = await prisma.itemHistory.create({
          data: {
            price: newItemHistory.price,
            rate: newItemHistory.rate,
            inverseRate: newItemHistory.inverseRate,
            itemId: id,
          },
        });
        createdItemHistories.push(createdItemHistory);
      }

      // 応答に成功した情報を返す
      res.status(201).json({ httpStatus: 201, createdItemHistories });
    });
  } catch (error) {
    console.error("Error creating new itemHistories:", error);
    return res.status(400).json({ error: "Error creating new itemHistories" });
  }
});