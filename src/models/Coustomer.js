const mongoose = require('mongoose');

const coustomerSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      trim: true,
      type: String,
      unique: true,
    },
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    addresses: [
      {
        address: {
          street: {
            type: String,
            trim: true,
          },
          city: {
            type: String,
            trim: true,
          },
          state: {
            type: String,
            trim: true,
          },
          zip: {
            type: String,
            trim: true,
          },
          phoneNumber: {
            type: String,
            trim: true,
            minlength: 10,
          },
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);
