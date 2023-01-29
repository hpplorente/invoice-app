const express = require("express");
const app = express();
const mongoose = require("mongoose");
const InvoiceModel = require("./models/Invoice");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://hppl444:Invoice123@invoice.nhooxe1.mongodb.net/invoice?retryWrites=true&w=majority"
);

app.get("/invoice/api", (req, res) => {
  InvoiceModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/invoice/api", async (req, res) => {
  const invoice = req.body;
  const newInvoice = new InvoiceModel(invoice);
  await newInvoice.save();

  res.json(invoice);
});

app.post("/invoice/api", async (req, res) => {
  const invoice = req.body;
  const newInvoice = new InvoiceModel(invoice);
  await newInvoice.save();

  res.json(invoice);
});

app.post("/invoice/draft/api", async (req, res) => {
  const invoice = req.body;
  const newInvoice = new InvoiceModel(invoice);
  await newInvoice.save();

  res.json(invoice);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
