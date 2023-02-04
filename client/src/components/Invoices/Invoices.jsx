import React, { useState, useContext } from "react";
import { InvoiceContext } from "../../Context/InvoiceContext";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceList from "./InvoiceList";
import "./Invoice.css";
import DashboardLayout from "../layout/DashboardLayout";

function Invoices() {
  const { getInvoiceData, invoiceList } = useContext(InvoiceContext);
  // const [invoiceList, setInvoiceList] = useState([]);

  const [newInvoiceModal, setNewInvoiceModal] = useState(false);

  // const getInvoiceList = () => {
  //   Axios.get("http://localhost:3001/invoice/api").then((response) => {
  //     setInvoiceList(response.data);
  //   });
  // };

  return (
    <DashboardLayout>
      <InvoiceHeader
        getInvoiceList={getInvoiceData}
        setNewInvoiceModal={setNewInvoiceModal}
        newInvoiceModal={newInvoiceModal}
        invoiceList={invoiceList}
      />
      <InvoiceList
        getInvoiceList={getInvoiceData}
        invoiceList={invoiceList}
        newInvoiceModal={newInvoiceModal}
      />
    </DashboardLayout>
  );
}

export default Invoices;
