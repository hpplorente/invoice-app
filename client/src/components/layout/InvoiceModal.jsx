import React from "react";
import { Button, Modal } from "antd";

function InvoiceModal({ children, classes, newInvoiceModal }) {
  return (
    <Modal open={newInvoiceModal} footer={null} closable={false}>
      <div className={classes}>
        <div className="modal-content">{children}</div>
      </div>
    </Modal>
  );
}

export default InvoiceModal;
