import React, { useContext } from "react";
import InputField from "../components/elements/InputField";
import { InvoiceContext } from "../Context/InvoiceContext";
import "./Modal.css";

function NewInvoiceModal() {
  const {
    newInvoiceModal,
    toggleNewInvoice,
    invoiceData,
    invoiceInputHandling,
    addNewInvoice,
    addNewData,
  } = useContext(InvoiceContext);

  console.log(addNewData);

  return (
    <>
      {newInvoiceModal && (
        <div className="overlay">
          <div className="modal-container">
            <div className="modal-content">
              <h1>New Invoice</h1>
              <h2>Bill from</h2>
              <InputField
                label="Street Address"
                type="text"
                classes="single-input-fields"
                changeHandler={invoiceInputHandling}
                values={invoiceData.senderAddress.street}
                names="senderAddress street"
              />
              <div className="row-forms">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.senderAddress.city}
                  names="senderAddress city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.senderAddress.postCode}
                  names="senderAddress postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.senderAddress.country}
                  names="senderAddress country"
                />
              </div>
              <h2>Bill to</h2>
              <InputField
                label="Client's Name"
                type="text"
                classes="single-input-fields"
                changeHandler={invoiceInputHandling}
                values={invoiceData.clientName}
                names="clientName"
              />
              <InputField
                label="Client's Email"
                type="text"
                classes="single-input-fields"
                changeHandler={invoiceInputHandling}
                values={invoiceData.clientEmail}
                names="clientEmail"
              />
              <InputField
                label="Street Address"
                type="text"
                classes="single-input-fields"
                changeHandler={invoiceInputHandling}
                values={invoiceData.clientAddress.street}
                names="clientAddress street"
              />
              <div className="row-forms">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.clientAddress.city}
                  names="clientAddress city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.clientAddress.postCode}
                  names="clientAddress postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.clientAddress.country}
                  names="clientAddress country"
                />
              </div>
              <div className="row-forms">
                <InputField
                  label="Invoice Date"
                  type="date"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.createdAt}
                  names="createdAt"
                />
                <InputField
                  label="Payment Terms"
                  type="text"
                  changeHandler={invoiceInputHandling}
                  values={invoiceData.paymentTerms}
                  names="paymentTerms"
                />
              </div>
              <InputField
                label="Project Description"
                type="text"
                classes="single-input-fields"
                changeHandler={invoiceInputHandling}
                values={invoiceData.description}
                names="description"
              />
              <div className="newInvoice-btns">
                <button onClick={toggleNewInvoice}>Discard</button>
                <div>
                  <button>Save as Draft</button>
                  <button onClick={addNewInvoice}>Save & Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewInvoiceModal;
