const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name_products: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date().toLocaleString(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date().toLocaleString(),
  },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
