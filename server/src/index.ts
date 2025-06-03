import express from 'express';
import cors from 'cors';
import { pokemonNameID } from './data/pokemonNameID';
import { pokemonTypeNameID } from './data/pokemonTypeNameID';

const app = express();
const PORT = 3001;

const allowedOrigins = 
  process.env.NODE_ENV === 'production'
    ? ['https://pokecheck-two.vercel.app']
    : ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.get('/api/types', (_req, res) => {
  res.json(pokemonTypeNameID);
});

app.get('/api/pokemon', (_req, res) => {
  res.json(pokemonNameID);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


