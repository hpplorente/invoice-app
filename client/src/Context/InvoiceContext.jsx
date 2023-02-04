import React, { useState, createContext } from "react";
import Axios from "axios";

const InvoiceContext = createContext({});

function InvoiceContextProvider(props) {
  const getInvoiceData = () => {
    Axios.get("http://localhost:3001/invoice/api").then((response) => {
      setInvoiceList(response.data);
    });
  };

  const [invoiceList, setInvoiceList] = useState([]);

  return (
    <InvoiceContext.Provider value={{ getInvoiceData, invoiceList }}>
      {props.children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContextProvider, InvoiceContext };
