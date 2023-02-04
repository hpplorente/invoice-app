import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./Invoice.css";

function InvoiceList({ getInvoiceList, invoiceList, newInvoiceModal }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Effect ran!");
    getInvoiceList();
  }, [newInvoiceModal]);

  const invoiceItem = invoiceList.map((data) => {
    return (
      <div className="item-container">
        <p>{data.invoiceNumber}</p>
        <p>{moment(data.paymentDue).format("ll")}</p>
        <p>{data.clientName}</p>
        <p>{data.total}</p>
        <p>{data.status}</p>
        <button
          onClick={() => navigate("/invoiceDetails", { state: { data } })}
        >
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#7C5DFA"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  });

  return <div className="list-container">{invoiceItem}</div>;
}

export default InvoiceList;
