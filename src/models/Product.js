const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error('Rate must be graeater than 0');
        }
      },
    },
    quantity: {
      required: true,
      type: Number,
      validate(value) {
        if (value < 0) {
          throw new Error('Quantity must be graeater than 0');
        }
      },
    },
    name: {
      required: true,
      type: String,
      trim: true,
      unique: true,
    },
    unit: {
      type: String,
      default: 'pcs',
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
