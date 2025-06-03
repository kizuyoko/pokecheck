import express from 'express';
import cors from 'cors';
import { pokemonNameID } from './data/pokemonNameID';
import { pokemonTypeNameID } from './data/pokemonTypeNameID';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/types', (_req, res) => {
  res.json(pokemonTypeNameID);
});

app.get('/api/pokemon', (_req, res) => {
  res.json(pokemonNameID);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


