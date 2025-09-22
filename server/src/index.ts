import express from 'express';
import cors from 'cors';
import { pokemonNameID } from './data/pokemonNameID';
import { pokemonTypeNameID } from './data/pokemonTypeNameID';

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = 
  process.env.NODE_ENV === 'production'
    ? [
        'https://pokecheck-two.vercel.app', // Vercel deployment URL
        'https://pokecheck-ssh3.onrender.com', // Render API URL
      ]
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

app.get("/", (_req, res) => {
  res.send("Welcome to PokeCheck API! You can go to /api/pokemon or /api/types to see the data.");
});

app.get('/api/types', (_req, res) => {
  res.json(pokemonTypeNameID);
});

app.get('/api/pokemon', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedPokemon = pokemonNameID.slice(start, end);

  res.json({
    total: pokemonNameID.length,
    page,
    perPage: limit,
    results: paginatedPokemon
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


