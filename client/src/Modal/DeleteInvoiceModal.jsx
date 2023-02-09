import React, { useContext } from "react";
import { InvoiceContext } from "../Context/InvoiceContext";
import InvoiceModal from "../components/layout/InvoiceModal";
import InvoiceButton from "../components/elements/InvoiceButton";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

function DeleteInvoiceModal({
  invoiceId,
  deleteInvoiceModal,
  setDeleteInvoiceModal,
}) {
  console.log(invoiceId);
  const navigate = useNavigate();

  const deleteInvoice = () => {
    Axios.delete(
      `https://invoice-app-api.onrender.com/invoice/api/${invoiceId}`
    ).then((response) => {
      navigate("/");
      setDeleteInvoiceModal(!deleteInvoiceModal);
    });
  };

  return (
    <>
      {/* {deleteInvoiceModal && ( */}
      <InvoiceModal newInvoiceModal={deleteInvoiceModal} classes={""}>
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete this invoice {}? This action cannot be
          undone.{" "}
        </p>
        <div className="delete-button">
          <InvoiceButton
            label="Cancel"
            classes="cancel"
            onClick={() => setDeleteInvoiceModal(!deleteInvoiceModal)}
          />
          <InvoiceButton
            label="Delete"
            classes="delete"
            onClick={() => deleteInvoice()}
          />
        </div>
      </InvoiceModal>
      {/* )} */}
    </>
  );
}

export default DeleteInvoiceModal;
