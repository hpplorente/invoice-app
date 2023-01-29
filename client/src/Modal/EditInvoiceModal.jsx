import React from "react";
import Axios from "axios";
import InvoiceModal from "../components/layout/InvoiceModal";
import InputField from "../components/elements/InputField";

function EditInvoiceModal({
  editInvoiceData,
  editInvoiceModal,
  editInvoiceHandling,
  setEditInvoiceModal,
}) {
  const saveChanges = () => {
    Axios.put(
      `http://localhost:3001/invoice/api/${editInvoiceData._id}`,
      editInvoiceData
    ).then((response) => {
      console.log("Invoice Edited!");
      setEditInvoiceModal(!editInvoiceModal);
    });
  };

  const saveDraft = () => {
    console.log("Edited!");
  };

  return (
    <>
      {editInvoiceModal && (
        <InvoiceModal classes="newInvoice-modal">
          <h1>New Invoice</h1>
          <div className="modal-input-fields">
            <div className="sender-client-container">
              <h2>Bill from</h2>
              <InputField
                label="Street Address"
                type="text"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.senderAddress.street}
                names="senderAddress street"
              />
              <div className="flex-inputs">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.senderAddress.city}
                  names="senderAddress city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.senderAddress.postCode}
                  names="senderAddress postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.senderAddress.country}
                  names="senderAddress country"
                />
              </div>
            </div>
            <div className="sender-client-container">
              <h2>Bill to</h2>
              <InputField
                label="Client's Name"
                type="text"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.clientName}
                names="clientName"
              />
              <InputField
                label="Client's Email"
                type="text"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.clientEmail}
                names="clientEmail"
              />
              <InputField
                label="Street Address"
                type="text"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.clientAddress.street}
                names="clientAddress street"
              />
              <div className="flex-inputs">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.clientAddress.city}
                  names="clientAddress city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.clientAddress.postCode}
                  names="clientAddress postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={editInvoiceHandling}
                  values={editInvoiceData.clientAddress.country}
                  names="clientAddress country"
                />
              </div>
            </div>
            <div className="flex-inputs">
              <InputField
                label="Invoice Date"
                type="date"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.createdAt}
                names="createdAt"
              />
              <InputField
                label="Payment Terms"
                type="text"
                changeHandler={editInvoiceHandling}
                values={editInvoiceData.paymentTerms}
                names="paymentTerms"
              />
            </div>
            <InputField
              label="Project Description"
              type="text"
              changeHandler={editInvoiceHandling}
              values={editInvoiceData.description}
              names="description"
            />
            <div className="itemList-container">
              <p>Item List</p>
              <button>+ Add New Item</button>
            </div>
          </div>
          <div className="newInvoice-btns">
            <button className="draft-btn" onClick={() => saveDraft()}>
              Save as Draft
            </button>
            <button className="save-btn" onClick={() => saveChanges()}>
              Save Changes
            </button>
          </div>
        </InvoiceModal>
      )}
    </>
  );
}

export default EditInvoiceModal;
