const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
  },
  createdAt: {},
  paymentDue: {},
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {},
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  status: {},
  senderAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  clientAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("invoiceData", InvoiceSchema);
