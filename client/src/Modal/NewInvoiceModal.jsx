import React from "react";
import InvoiceModal from "../components/layout/InvoiceModal";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";
import "./InvoiceForm.css";

function NewInvoiceModal({
  invoiceData,
  setInvoiceData,
  invoiceObject,
  setNewInvoiceModal,
  newInvoiceModal,
  getInvoiceList,
}) {
  const navigate = useNavigate();

  // ///// Saving Invoice Draft
  const saveDraft = () => {
    Axios.post(
      "https://invoice-app-api.onrender.com/draft/api",
      invoiceData
    ).then((response) => {
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
      setInvoiceData(invoiceObject);
    });
  };

  return (
    <>
      <InvoiceModal newInvoiceModal={newInvoiceModal} classes={""}>
        <h1>New Invoice</h1>
        <InvoiceForm setNewInvoiceModal={setNewInvoiceModal} />
      </InvoiceModal>
    </>
  );
}

export default NewInvoiceModal;
