import React from "react";
// import { InvoiceContext } from "../../Context/InvoiceContext";

function InvoiceModal({ children, classes }) {
  return (
    <>
      <div className="overlay">
        <div className={classes}>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default InvoiceModal;
