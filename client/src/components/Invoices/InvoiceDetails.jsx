import React, { useEffect, useState, useContext } from "react";
import { InvoiceContext } from "../../Context/InvoiceContext";
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
  const invoiceData = location.state.data;
  const navigate = useNavigate();
  // const { getInvoiceData } = useContext(InvoiceContext);

  const [deleteInvoiceModal, setDeleteInvoiceModal] = useState(false);
  const [editInvoiceModal, setEditInvoiceModal] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState(invoiceData);
  const [fetchData, setFetchData] = useState(false);
  // console.log(invoiceDetails.itemList[0].itemName);
  const markAsPaid = () => {
    Axios.put(
      `https://invoice-app-api.onrender.com/invoice/api/${invoiceDetails._id}`,
      {
        status: "paid",
      }
    ).then((response) => {
      setFetchData(!fetchData);
    });
  };

  useEffect(() => {
    console.log("Invoice Fetched!");
    getInvoiceData();
  }, [fetchData]);

  const getInvoiceData = () => {
    Axios.get(
      `https://invoice-app-api.onrender.com/invoice/api/${invoiceDetails._id}`
    ).then((response) => {
      setInvoiceDetails(response.data);
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
            <p className={`status-${invoiceDetails.status}`}>
              <span>•</span>
              {invoiceDetails.status}
            </p>
          </div>
          <div className="details-btns">
            <InvoiceButton
              onClick={() => setEditInvoiceModal(!editInvoiceModal)}
              label={"Edit"}
              classes={"editBtn"}
            />

            <InvoiceButton
              onClick={() => setDeleteInvoiceModal(!deleteInvoiceModal)}
              label={"Delete"}
              classes={"deleteBtn"}
            />

            <InvoiceButton
              label={"Mark as Paid"}
              classes={"paidBtn"}
              onClick={() => markAsPaid()}
            />
          </div>
        </div>
        <div className="invoice-data-container">
          <div className="sender-details">
            <div className="id--description">
              <p className="id">#{invoiceDetails.invoiceNumber}</p>
              <h6 className="description">{invoiceDetails.description}</h6>
            </div>
            <div className="senderAddress">
              <h6>{invoiceDetails.senderStreetAddress}</h6>
              <h6>{invoiceDetails.senderCity}</h6>
              <h6>{invoiceDetails.senderPostCode}</h6>
              <h6>{invoiceDetails.senderCountry}</h6>
            </div>
          </div>
          <div className="clientDetails-container">
            <div className="invoice--payment--date">
              <div className="invoiceDate">
                <h6>Invoice Date</h6>
                <p>{moment(invoiceDetails.createdAt).format("ll")}</p>
              </div>
              <div className="paymentDue">
                <h6>Payment Due</h6>
                <p>{moment(invoiceDetails.paymentDue).format("ll")}</p>
              </div>
            </div>
            <div className="clientAddres">
              <h6>Bill To</h6>
              <p>{invoiceDetails.clientName}</p>
              <h6>{invoiceDetails.clientStreetAddress}</h6>
              <h6>{invoiceDetails.clientCity}</h6>
              <h6>{invoiceDetails.clientPostCode}</h6>
              <h6>{invoiceDetails.clientCountry}</h6>
            </div>
            <div className="clientEmail">
              <h6>Sent to</h6>
              <p>{invoiceDetails.clientEmail}</p>
            </div>
          </div>
          <div className="itemList-container">
            <div className="itemList-content">
              <div>
                <label className="itemName">Item Name</label>
                {invoiceDetails.itemList.map((data) => {
                  return <p>{data.itemName}</p>;
                })}
              </div>
              <div>
                <label className="itemQuantity">QTY.</label>
                {invoiceDetails.itemList.map((data) => {
                  return <p>{data.itemQuantity}</p>;
                })}
              </div>
              <div>
                <label className="itemPrice">Price</label>
                {invoiceDetails.itemList.map((data) => {
                  return <p>${data.itemPrice}</p>;
                })}
              </div>
              <div>
                <label className="itemTotal">Total</label>
                {invoiceDetails.itemList.map((data) => {
                  return <p>${data.itemTotal}</p>;
                })}
              </div>
            </div>
            <div className="amountDue">
              <p>Amount Due</p>
              <h2>$ 777</h2>
            </div>
          </div>
        </div>
      </div>
      <DeleteInvoiceModal
        invoiceId={invoiceDetails._id}
        deleteInvoiceModal={deleteInvoiceModal}
        setDeleteInvoiceModal={setDeleteInvoiceModal}
      />
      <EditInvoiceModal
        invoiceData={invoiceData}
        editInvoiceModal={editInvoiceModal}
        setEditInvoiceModal={setEditInvoiceModal}
        setFetchData={setFetchData}
      />
    </>
  );
}

export default InvoiceDetails;
