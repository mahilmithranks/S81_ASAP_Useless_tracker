const express = require('express');
const entityRoutes = require('./routes/entityRoutes');

const app = express();
app.use(express.json());

// Use the entity routes
app.use(entityRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));