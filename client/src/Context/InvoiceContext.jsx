import React, { createContext } from "react";

const InvoiceContext = createContext({});

function InvoiceContextProvider(props) {
  return (
    <InvoiceContext.Provider value={{}}>
      {props.children}
    </InvoiceContext.Provider>
  );
}

export { InvoiceContextProvider, InvoiceContext };
