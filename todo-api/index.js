import express from 'express';
import cors from 'cors';

import * as db from './todo-db.js';

const app = express();
app.use(cors());

const port = 4000;

app.use(express.json());

app.get('/', (_, res) => res.send('Hello, this is the To-Do API!'));

app.get('/items', (_, res) => {
  res.send(db.getAll());
});

app.get('/items/undone', (_, res) => {
  res.send(db.getAllUndone());
});

app.get('/items/done', (_, res) => {
  res.send(db.getAllDone());
});

app.post('/add', (req, res) => {
  db.add(req.body);
  res.sendStatus(201);
});

app.put('/update', (req, res) => {
  const result = db.update(req.body);
  if (!result) {
    res.sendStatus(404);
  }
  res.sendStatus(204);
});

app.delete('/remove/:id', (req, res) => {
  const result = db.remove(req.params.id);
  if (!result) {
    res.sendStatus(404);
  }
  res.sendStatus(204);
});

app.listen(port, () => console.log(`"To-Do API" listening on port ${port}!`));
