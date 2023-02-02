import React, { useState } from "react";
import InvoiceButton from "../elements/InvoiceButton";
import NewInvoiceModal from "../../Modal/NewInvoiceModal";
import "./Invoice.css";

function InvoiceHeader() {
  const [newInvoiceModal, setNewInvoiceModal] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="invoice-title">
          <h3>Invoices</h3>
          <p>There are (?) total invoices</p>
        </div>
        <div className="invoice-btn">
          <InvoiceButton
            label="New Invoice"
            classes="newInvoice-btn"
            onClick={() => setNewInvoiceModal(!newInvoiceModal)}
          />
        </div>
      </div>
      <NewInvoiceModal
        setNewInvoiceModal={setNewInvoiceModal}
        newInvoiceModal={newInvoiceModal}
      />
    </>
  );
}

export default InvoiceHeader;
