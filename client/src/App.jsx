import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import InvoiceDetails from "./components/Invoices/InvoiceDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoiceDetails" element={<InvoiceDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
