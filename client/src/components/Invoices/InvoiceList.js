import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InvoiceContext } from "../../Context/InvoiceContext";
import "./Invoice.css";

function InvoiceList() {
  const { invoiceList } = useContext(InvoiceContext);
  const navigate = useNavigate();
  const invoiceItem = invoiceList.map((data) => {
    return (
      <div className="item-container">
        <p>{data.invoiceNumber}</p>
        <p>{data.paymentDue}</p>
        <p>{data.clientName}</p>
        <p>{data.total}</p>
        <p>{data.status}</p>
        <button
          onClick={() => navigate("/invoiceDetails", { state: { data } })}
        >
          View
        </button>
      </div>
    );
  });

  return <div className="list-container">{invoiceItem}</div>;
}

export default InvoiceList;
