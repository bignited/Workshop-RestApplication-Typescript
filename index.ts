import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// POST endpoint
app.post('/greet', (req: Request, res: Response) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});