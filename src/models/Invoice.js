const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema(
  {
    custId: {
      type: mongoose.Schema.Type.ObjectId,
      ref: Coustomer,
      required: true,
    },
    order: [
      {
        qty: {
          type: Number,
          validate(value) {
            if (value <= 0) {
              throw new Error('Order qty cannot be less than zero');
            }
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
