import React, { useContext } from "react";
import { InvoiceContext } from "../../Context/InvoiceContext";
import "./Invoice.css";

function InvoiceHeader() {
  const { toggleNewInvoice } = useContext(InvoiceContext);
  return (
    <div className="header-container">
      <div className="invoice-title">
        <h3>Invoices</h3>
        <p>There are (?) total invoices</p>
      </div>
      <div className="invoice-btn">
        <p>Filter by status</p>
        <button onClick={toggleNewInvoice}> + New Invoice</button>
      </div>
    </div>
  );
}

export default InvoiceHeader;
