const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

app.post(
  '/api/entity',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Proceed with entity creation
    res.status(201).json({ message: 'Entity created successfully!' });
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));