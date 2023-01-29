import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function InvoiceButton({ label, onClick, classes }) {
  return (
    <div>
      <Button onClick={onClick} className={classes} type="primary">
        {label}
      </Button>
    </div>
  );
}

export default InvoiceButton;
