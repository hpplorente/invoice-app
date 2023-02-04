import React, { useContext } from "react";
import InvoiceButton from "../elements/InvoiceButton";
import NewInvoiceModal from "../../Modal/NewInvoiceModal";
import "./Invoice.css";

function InvoiceHeader({
  getInvoiceList,
  setNewInvoiceModal,
  newInvoiceModal,
  invoiceList,
}) {
  console.log(invoiceList.length);
  return (
    <>
      <div className="header-container">
        <div className="invoice-title">
          <h3>Invoices</h3>
          <p>There are {invoiceList.length} total invoices</p>
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
        getInvoiceList={getInvoiceList}
      />
    </>
  );
}

export default InvoiceHeader;
