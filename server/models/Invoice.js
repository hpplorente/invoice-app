const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
  },
  createdAt: {},
  paymentDue: {},
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  status: {},

  senderStreetAddress: {
    type: String,
    required: true,
  },
  senderCity: {
    type: String,
    required: true,
  },
  senderPostCode: {
    type: String,
    required: true,
  },
  senderCountry: {
    type: String,
    required: true,
  },

  clientStreetAddress: {
    type: String,
    required: true,
  },
  clientCity: {
    type: String,
    required: true,
  },
  clientPostCode: {
    type: String,
    required: true,
  },
  clientCountry: {
    type: String,
    required: true,
  },
  itemList: [
    {
      itemName: String,
      itemQuantity: Number,
      itemPrice: Number,
      itemTotal: Number,
    },
  ],
});

module.exports = mongoose.model("invoiceData", InvoiceSchema);
