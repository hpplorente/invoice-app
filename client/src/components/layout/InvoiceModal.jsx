import React from "react";
import { Button, Modal } from "antd";

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
