const express = require("express");
const router = express.Router();
const {
  getInvoice,
  setInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceController");

router.route("/").get(getInvoice).post(setInvoice);

router.route("/:id").put(updateInvoice).delete(deleteInvoice);

module.exports = router;
