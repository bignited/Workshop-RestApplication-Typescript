import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const friends: string[] = [];

// Middleware to parse JSON request bodies
app.use(express.json());

// GET endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// POST endpoint
app.post('/hello', (req: Request, res: Response) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

// POST friends endpoint
app.post('/friend', (req: Request, res: Response) => {
  friends.push(req.body.friend);
  res.send(`You have ${friends.length} friends!`);
});

// GET friends endpoint
app.get('/friends', (req: Request, res: Response) => {
  res.send(friends);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});