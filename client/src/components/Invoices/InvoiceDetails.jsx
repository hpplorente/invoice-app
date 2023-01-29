import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteInvoiceModal from "../../Modal/DeleteInvoiceModal";
import EditInvoiceModal from "../../Modal/EditInvoiceModal";

function InvoiceDetails() {
  const location = useLocation();
  const invoice = location.state.data;
  const navigate = useNavigate();

  const [deleteInvoiceModal, setDeleteInvoiceModal] = useState(false);
  const [editInvoiceModal, setEditInvoiceModal] = useState(false);
  const [editInvoiceData, setEditInvoiceData] = useState(invoice);

  const editInvoiceHandling = (e) => {
    const { name, value } = e.target;
    const nameSplit = name.split(" ");

    if (nameSplit.length > 1) {
      nameSplit[0] === "senderAddress"
        ? setEditInvoiceData((prevEditInvoiceData) => {
            return {
              ...prevEditInvoiceData,
              [nameSplit[0]]: {
                ...prevEditInvoiceData.senderAddress,
                [nameSplit[1]]: value,
              },
            };
          })
        : setEditInvoiceData((prevEditInvoiceData) => {
            return {
              ...prevEditInvoiceData,
              [nameSplit[0]]: {
                ...prevEditInvoiceData.clientAddress,
                [nameSplit[1]]: value,
              },
            };
          });
    } else {
      setEditInvoiceData((prevEditInvoiceData) => {
        return {
          ...prevEditInvoiceData,
          [name]: value,
        };
      });
    }
  };

  return (
    <>
      <div className="content-container">
        <div className="back-btn" onClick={() => navigate("/")}>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <p>Go Back</p>
        </div>
        <div className="details-header-container">
          <div className="details-status">
            <p>Status</p>
            <p>{invoice.status}</p>
          </div>
          <div className="details-btns">
            <button onClick={() => setEditInvoiceModal(!editInvoiceModal)}>
              Edit
            </button>
            <button onClick={() => setDeleteInvoiceModal(!deleteInvoiceModal)}>
              Delete
            </button>
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
                <p>{invoice.paymentDue}</p>
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
      <DeleteInvoiceModal
        invoiceId={invoice._id}
        deleteInvoiceModal={deleteInvoiceModal}
        setDeleteInvoiceModal={setDeleteInvoiceModal}
      />
      <EditInvoiceModal
        // invoiceData={invoice}
        editInvoiceData={editInvoiceData}
        editInvoiceModal={editInvoiceModal}
        editInvoiceHandling={editInvoiceHandling}
        setEditInvoiceModal={setEditInvoiceModal}
      />
    </>
  );
}

export default InvoiceDetails;
