const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  price: Number,
  description:   String,
  discount: Number,
  category: String
});

module.exports = ItemSchema;
//module.exports = mongoose.models.items || mongoose.model('items',ItemSchema)