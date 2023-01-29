import React, { useState } from "react";
import InvoiceButton from "../elements/InvoiceButton";
import { v4 as uuid } from "uuid";
import NewInvoiceModal from "../../Modal/NewInvoiceModal";
import "./Invoice.css";

function InvoiceHeader() {
  const invoiceObject = {
    invoiceNumber: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
  };
  const [newInvoiceModal, setNewInvoiceModal] = useState(false);

  const [invoiceData, setInvoiceData] = useState(invoiceObject);

  const unique_id = uuid();
  const invoiceId = unique_id.slice(0, 5);

  ///// Toggle New Invoice Modal
  const toggleNewInvoice = () => {
    if (newInvoiceModal === false) {
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
      setInvoiceData((prevInvoiceData) => {
        return {
          ...prevInvoiceData,
          invoiceNumber: invoiceId,
        };
      });
    } else {
      setInvoiceData(invoiceObject);
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="invoice-title">
          <h3>Invoices</h3>
          <p>There are (?) total invoices</p>
        </div>
        <div className="invoice-btn">
          <p>Filter by status</p>
          <InvoiceButton
            label="New Invoice"
            classes="newInvoice-btn"
            onClick={toggleNewInvoice}
          />
        </div>
      </div>
      <NewInvoiceModal
        invoiceData={invoiceData}
        setInvoiceData={setInvoiceData}
        invoiceObject={invoiceObject}
        setNewInvoiceModal={setNewInvoiceModal}
        newInvoiceModal={newInvoiceModal}
        toggleNewInvoice={toggleNewInvoice}
      />
    </>
  );
}

export default InvoiceHeader;
