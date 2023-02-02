import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InvoiceButton from "../elements/InvoiceButton";
import "./InvoiceDetails.css";
import DeleteInvoiceModal from "../../Modal/DeleteInvoiceModal";
import EditInvoiceModal from "../../Modal/EditInvoiceModal";
import moment from "moment";
import Axios from "axios";
import { Button } from "antd";

function InvoiceDetails() {
  const location = useLocation();
  const invoice = location.state.data;
  const navigate = useNavigate();

  const [deleteInvoiceModal, setDeleteInvoiceModal] = useState(false);
  const [editInvoiceModal, setEditInvoiceModal] = useState(false);
  const [editInvoiceData, setEditInvoiceData] = useState(invoice);

  const markAsPaid = () => {
    Axios.put(`http://localhost:3001/invoice/api/${editInvoiceData._id}`, {
      ...invoice,
      status: "paid",
    }).then((response) => {
      console.log("Invoice Edited!");
    });
  };

  return (
    <>
      <div className="content-container">
        <Button
          ghost
          type="primary"
          size="small"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Go Back
        </Button>
        <div className="details-header-container">
          <div className="details-status">
            <h6>Status</h6>
            <p className={`status-${invoice.status}`}>
              <span>•</span>
              {invoice.status}
            </p>
          </div>
          <div className="details-btns">
            <InvoiceButton
              onClick={() => setEditInvoiceModal(!editInvoiceModal)}
              label={"Edit"}
              classes={""}
            />

            <InvoiceButton
              onClick={() => setDeleteInvoiceModal(!deleteInvoiceModal)}
              label={"Delete"}
              classes={""}
            />

            <InvoiceButton
              label={"Mark as Paid"}
              classes={""}
              onClick={() => markAsPaid()}
            />
          </div>
        </div>
        <div className="invoice-data-container">
          <div className="sender-details">
            <div className="id--description">
              <p className="id">#{invoice.invoiceNumber}</p>
              <h6 className="description">{invoice.description}</h6>
            </div>
            <div className="senderAddress">
              <h6>{invoice.senderStreetAddress}</h6>
              <h6>{invoice.senderCity}</h6>
              <h6>{invoice.senderPostCode}</h6>
              <h6>{invoice.senderCountry}</h6>
            </div>
          </div>
          <div className="clientDetails-container">
            <div className="invoice--payment--date">
              <div className="invoiceDate">
                <h6>Invoice Date</h6>
                <p>{moment(invoice.createdAt).format("ll")}</p>
              </div>
              <div className="paymentDue">
                <h6>Payment Due</h6>
                <p>{invoice.paymentDue}</p>
              </div>
            </div>
            <div className="clientAddres">
              <h6>Bill To</h6>
              <p>{invoice.clientName}</p>
              <h6>{invoice.clientStreetAddress}</h6>
              <h6>{invoice.clientCity}</h6>
              <h6>{invoice.clientPostCode}</h6>
              <h6>{invoice.clientCountry}</h6>
            </div>
            <div className="clientEmail">
              <h6>Sent to</h6>
              <p>{invoice.clientEmail}</p>
            </div>
          </div>
          <div className="itemList">Item List</div>
        </div>
      </div>
      <DeleteInvoiceModal
        invoiceId={invoice._id}
        deleteInvoiceModal={deleteInvoiceModal}
        setDeleteInvoiceModal={setDeleteInvoiceModal}
      />
      <EditInvoiceModal
        invoiceData={invoice}
        editInvoiceData={editInvoiceData}
        editInvoiceModal={editInvoiceModal}
        setEditInvoiceModal={setEditInvoiceModal}
      />
    </>
  );
}

export default InvoiceDetails;
