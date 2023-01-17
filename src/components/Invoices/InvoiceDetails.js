import React from "react";

function InvoiceDetails() {
  return (
    <div className="content-container">
      <p className="back-btn">Go Back</p>
      <div className="details-header-container">
        <div className="details-status">
          <p>Status</p>
          <p>Pending</p>
        </div>
        <div className="details-btns">
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <div className="invoice-data-container">
        <div className="sender-details">
          <div className="id--description">
            <p className="id">#</p>
            <h5 className="description">description</h5>
          </div>
          <div className="senderAddress">
            <h6>street</h6>
            <h6>city</h6>
            <h6>posdtal code</h6>
            <h6>country</h6>
          </div>
        </div>
        <div className="clientDetails"></div>
      </div>
      <div className="clientdetails"></div>
    </div>
  );
}

export default InvoiceDetails;
