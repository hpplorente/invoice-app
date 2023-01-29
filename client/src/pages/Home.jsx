import React from "react";
import Invoices from "../components/Invoices/Invoices";
// import NewInvoiceModal from "../Modal/NewInvoiceModal";

export default function () {
  return (
    <div className="content-container">
      {/* <div className="modal">
        <NewInvoiceModal />
      </div> */}
      <Invoices />
    </div>
  );
}
