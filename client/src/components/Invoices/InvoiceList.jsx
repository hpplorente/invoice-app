import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Invoice.css";

function InvoiceList() {
  const navigate = useNavigate();

  const [invoiceList, setInvoiceList] = useState([]);

  const getInvoiceList = () => {
    Axios.get("http://localhost:3001/invoice/api").then((response) => {
      setInvoiceList(response.data);
    });
  };

  useEffect(() => {
    console.log("Effect ran!");
    getInvoiceList();
  }, []);

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
