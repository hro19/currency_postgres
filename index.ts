import express, { Request, Response } from 'express';
import { PrismaClient } from "./prisma/generated/client";
// import { PrismaClient } from '@prisma/client'

const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const prisma = new PrismaClient();

app.get("/api/v1/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: { Posts: true },
  });
  return res.json(users);
});

app.post("/api/v1/users", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.put("/api/v1/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name,email } = req.body;
  try {
    const user = await prisma.user.update({
      where: {id},
      data: {name,email},
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.delete("/api/v1/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.get("/api/v1/users/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.post("/api/v1/posts", async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
      },
    });
    return res.json(post);
  } catch (e) {
    return res.status(400).json(e);
  }
});

app.get("/api/v1/posts", async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  return res.json(posts);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));