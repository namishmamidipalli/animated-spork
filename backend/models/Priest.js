const mongoose = require('mongoose');

const priestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  affiliation: String,
  services: [String],
  language: String,
  experience: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Priest', priestSchema);
