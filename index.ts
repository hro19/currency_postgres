import express, { Request, Response } from 'express';
import { PrismaClient } from "./prisma/generated/client/edge";

const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());

const prisma = new PrismaClient();

app.get("/", (req: Request, res: Response) => {
  return res.json({"message":"HelloWorld"});
});

app.get("/api/v1/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
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


app.listen(port, () => console.log(`Example app listening on port ${port}!`));