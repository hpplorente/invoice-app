import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function InvoiceDetails() {
  // const { addNewData } = useContext(InvoiceContext);

  // const viewInvoiceDetails = addNewData.map();

  const location = useLocation();
  const invoice = location.state.data;
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <p className="back-btn" onClick={() => navigate("/")}>
        Go Back
      </p>
      <div className="details-header-container">
        <div className="details-status">
          <p>Status</p>
          <p>{invoice.status}</p>
        </div>
        <div className="details-btns">
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <div className="invoice-data-container">
        <div className="sender-details">
          <div className="id--description">
            <p className="id">#{invoice.invoiceNumber}</p>
            <h6 className="description">{invoice.description}</h6>
          </div>
          <div className="senderAddress">
            <h6>{invoice.senderAddress.street}</h6>
            <h6>{invoice.senderAddress.city}</h6>
            <h6>{invoice.senderAddress.postCode}</h6>
            <h6>{invoice.senderAddress.country}</h6>
          </div>
        </div>
        <div className="clientDetails-container">
          <div className="invoice--payment--date">
            <div className="invoiceDate">
              <h6>Invoice Date</h6>
              <p>{invoice.createdAt}</p>
            </div>
            <div className="paymentDue">
              <h6>Payment Due</h6>
              <p>?????</p>
            </div>
          </div>
          <div className="clientAddres">
            <h6>Bill To</h6>
            <p>{invoice.clientName}</p>
            <h6>{invoice.clientAddress.street}</h6>
            <h6>{invoice.clientAddress.city}</h6>
            <h6>{invoice.clientAddress.postCode}</h6>
            <h6>{invoice.clientAddress.country}</h6>
          </div>
          <div className="clientEmail">
            <h6>Sent to</h6>
            <p>{invoice.clientEmail}</p>
          </div>
        </div>
        <div className="itemList">Item List</div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
