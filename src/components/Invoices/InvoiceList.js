import React from "react";
import "./Invoice.css";
import Data from "./data.json";

function InvoiceList() {
  const invoiceItem = Data.map((data) => {
    return (
      <div className="item-container">
        <p>{data.id}</p>
        <p>{data.paymentDue}</p>
        <p>{data.clientName}</p>
        <p>{data.total}</p>
        <p>{data.status}</p>
      </div>
    );
  });

  return <div className="list-container">{invoiceItem}</div>;
}

export default InvoiceList;
