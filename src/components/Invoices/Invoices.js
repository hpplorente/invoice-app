import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceList from "./InvoiceList";
import "./Invoice.css";
import DashboardLayout from "../layout/DashboardLayout";

function Invoices() {
  return (
    <DashboardLayout>
      <InvoiceHeader />
      <InvoiceList />
    </DashboardLayout>
  );
}

export default Invoices;
