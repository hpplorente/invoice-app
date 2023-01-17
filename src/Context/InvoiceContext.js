import React, { useState, createContext } from "react";

const InvoiceContext = createContext();

function InvoiceContextProvider(props) {
  const [newInvoiceModal, setNewInvoiceModal] = useState(false);
  const [addNewData, setNewData] = useState([]);

  const [invoiceData, setInvoiceData] = useState({
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
  });

  /////New Invoice Modal
  const toggleNewInvoice = () => {
    return setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
  };

  ///New Invoice Modal Change Handling
  const invoiceInputHandling = (e) => {
    const { name, value, type } = e.target;
    setInvoiceData((prevInvoiceData) => {
      return {
        ...prevInvoiceData,
        [name]: value,
      };
    });
  };

  const senderAddressHandling = (e) => {
    const { name, value, type } = e.target;
    setInvoiceData((prevInvoiceData) => {
      return {
        ...prevInvoiceData,
        senderAddress: {
          ...prevInvoiceData.senderAddress,
          [name]: value,
        },
      };
    });
  };

  const clientAddressHandling = (e) => {
    const { name, value, type } = e.target;
    setInvoiceData((prevInvoiceData) => {
      return {
        ...prevInvoiceData,
        clientAddress: {
          ...prevInvoiceData.clientAddress,
          [name]: value,
        },
      };
    });
  };
  ////////////////////////////////////////////////////////////////////////

  ////// Adding New Invoice (Save & send)

  const addNewInvoice = () => {
    setNewData((prevNewData) => [...prevNewData, invoiceData]);
  };

  return (
    <InvoiceContext.Provider
      value={{
        newInvoiceModal,
        toggleNewInvoice,
        invoiceData,
        invoiceInputHandling,
        addNewInvoice,
        addNewData,
        senderAddressHandling,
        clientAddressHandling,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContextProvider, InvoiceContext };
