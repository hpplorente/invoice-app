const express = require("express");
const router = express.Router();
const {
  getInvoiceList,
  getInvoice,
  setInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

router.route("/").get(getInvoiceList).post(setInvoice);

router.route("/:id").get(getInvoice).put(updateInvoice).delete(deleteInvoice);

module.exports = router;
