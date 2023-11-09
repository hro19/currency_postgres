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
  const created_at = new Date();

  try {
    const item = await prisma.item.create({
      data: {
        name,
        currencyCode,
        created_at,
      },
    });

    return res.json(item);
  } catch (e) {
    console.error("Error creating item:", e);
    return res.status(400).json({ error: "Error creating item" });
  }
});

// app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const { name,email } = req.body;
//   try {
//     const user = await prisma.user.update({
//       where: {id},
//       data: {name,email},
//     });
//     return res.json(user);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

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



// app.post("/api/v1/posts", async (req: Request, res: Response) => {
//   const { title, content, authorId } = req.body;
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         authorId,
//       },
//     });
//     return res.json(post);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// app.get("/api/v1/posts", async (req: Request, res: Response) => {
//   const posts = await prisma.post.findMany();
//   return res.json(posts);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));