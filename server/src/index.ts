import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (_req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


