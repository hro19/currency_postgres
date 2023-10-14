import express, { Request, Response } from 'express';

const app = express();
const port = 5000;

app.use(express.json());
const cors = require('cors');
app.use(cors());


app.get("/", (req: Request, res: Response) => res.json({ "mes": "Hello World!" }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));