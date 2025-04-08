const mongoose = require('mongoose');

const EntitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Entity', EntitySchema);