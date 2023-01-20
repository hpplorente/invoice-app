import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

const InvoiceContext = createContext();

function InvoiceContextProvider(props) {
  const invoiceObject = {
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: "",
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
  };
  const [newInvoiceModal, setNewInvoiceModal] = useState(false);
  const [invoiceList, setInvoiceList] = useState([]);

  const [invoiceData, setInvoiceData] = useState(invoiceObject);

  const unique_id = uuid();
  const invoiceId = unique_id.slice(0, 5);
  /////New Invoice Modal
  const toggleNewInvoice = () => {
    if (newInvoiceModal === false) {
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
      setInvoiceData((prevInvoiceData) => {
        return {
          ...prevInvoiceData,
          id: invoiceId,
        };
      });
    } else {
      setInvoiceData(invoiceObject);
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
    }
  };

  ///New Invoice Modal Change Handling
  const invoiceInputHandling = (e) => {
    const { name, value, type } = e.target;
    const nameSplit = name.split(" ");

    if (nameSplit.length > 1) {
      nameSplit[0] === "senderAddress"
        ? setInvoiceData((prevInvoiceData) => {
            return {
              ...prevInvoiceData,
              [nameSplit[0]]: {
                ...prevInvoiceData.senderAddress,
                [nameSplit[1]]: value,
              },
            };
          })
        : setInvoiceData((prevInvoiceData) => {
            return {
              ...prevInvoiceData,
              [nameSplit[0]]: {
                ...prevInvoiceData.clientAddress,
                [nameSplit[1]]: value,
              },
            };
          });
    } else {
      setInvoiceData((prevInvoiceData) => {
        return {
          ...prevInvoiceData,
          [name]: value,
        };
      });
    }
  };

  ////// Adding New Invoice (Save & send)

  const addNewInvoice = () => {
    setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
    setInvoiceData(invoiceObject);
    setInvoiceList((prevNewData) => [...prevNewData, invoiceData]);
  };

  return (
    <InvoiceContext.Provider
      value={{
        newInvoiceModal,
        toggleNewInvoice,
        invoiceData,
        invoiceInputHandling,
        addNewInvoice,
        invoiceList,
        invoiceObject,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContextProvider, InvoiceContext };
