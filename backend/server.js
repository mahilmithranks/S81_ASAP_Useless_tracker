const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const entities = [
  { id: 1, name: 'Entity One' },
  { id: 2, name: 'Entity Two' },
  { id: 3, name: 'Entity Three' },
  { id: 4, name: 'Entity Four' }
];

app.get('/api/entities', (req, res) => {
  res.json(entities);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
