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
    senderAddressHandling,
    clientAddressHandling,
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
                changeHandler={senderAddressHandling}
                values={invoiceData.senderAddress.street}
                names="street"
              />
              <div className="row-forms">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={senderAddressHandling}
                  values={invoiceData.senderAddress.city}
                  names="city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={senderAddressHandling}
                  values={invoiceData.senderAddress.postCode}
                  names="postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={senderAddressHandling}
                  values={invoiceData.senderAddress.country}
                  names="country"
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
                changeHandler={clientAddressHandling}
                values={invoiceData.clientAddress.street}
                names="street"
              />
              <div className="row-forms">
                <InputField
                  label="City"
                  type="text"
                  changeHandler={clientAddressHandling}
                  values={invoiceData.clientAddress.city}
                  names="city"
                />
                <InputField
                  label="Post Code"
                  type="text"
                  changeHandler={clientAddressHandling}
                  values={invoiceData.clientAddress.postCode}
                  names="postCode"
                />
                <InputField
                  label="Country"
                  type="text"
                  changeHandler={clientAddressHandling}
                  values={invoiceData.clientAddress.country}
                  names="country"
                />
              </div>
              <div className="row-forms">
                <InputField
                  label="Invoice Date"
                  type="text"
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
                label="Project DEscription"
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
