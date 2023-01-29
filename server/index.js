const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const InvoiceModel = require("./models/Invoice");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/invoice/api", require("./routes/invoiceRoutes"));

app.use(errorHandler);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
