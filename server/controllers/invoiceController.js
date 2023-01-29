const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");
// @desc Get Invoice
//@route GET /api/goals
//access Private
const getInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.find();

  res.status(200).json(invoice);
});

// @desc Set Invoice
//@route POST /api/goals
//access Private
const setInvoice = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please provide a text");
  }

  const invoice = await Invoice.create(req.body);
  res.status(200).json(invoice);
});

// @desc Update Invoice
//@route PUT /api/goals
//access Private
const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  const updatedInvoice = await Invoice.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedInvoice);
});

// @desc Delete Invoice
//@route DELETE /api/goals
//access Private
const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
    throw new Error("Invoice not found");
  }

  await invoice.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getInvoice,
  setInvoice,
  updateInvoice,
  deleteInvoice,
};
