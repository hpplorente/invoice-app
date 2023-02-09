import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, DatePicker, Input, Select } from "antd";
import { v4 as uuid } from "uuid";
import "./InvoiceForm.css";
import ItemList from "../components/elements/ItemList";
import moment from "moment";

function InvoiceForm({ setNewInvoiceModal }) {
  const navigate = useNavigate;
  const unique_id = uuid();
  const invoiceId = unique_id.slice(0, 5);
  const [form] = Form.useForm();

  const saveInvoice = (data) => {
    console.log(data);
    const paymentDue = moment(data.createdAt).add(data.paymentTerms, "days");
    Axios.post("https://invoice-app-api.onrender.com/invoice/api", {
      ...data,
      status: "pending",
      invoiceNumber: invoiceId.toUpperCase(),
      paymentDue: paymentDue,
    }).then((response) => {
      console.log(response.data);
      setNewInvoiceModal((prevNewInvoiceModal) => !prevNewInvoiceModal);
      form.resetFields();
    });
  };

  return (
    <div className="invoiceForm">
      <Form
        form={form}
        onFinish={(data) => {
          saveInvoice(data);
        }}
        layout="vertical"
      >
        <div className="form-container">
          <h2>Bill From</h2>
          <Form.Item
            name="senderStreetAddress"
            label="Street Address"
            rules={[
              { required: true, message: "Please enter street address" },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <div className="flex-inputs">
            <Form.Item name="senderCity" label="City">
              <Input />
            </Form.Item>

            <Form.Item name="senderPostCode" label="Post Code">
              <Input />
            </Form.Item>

            <Form.Item name="senderCountry" label="Country">
              <Input />
            </Form.Item>
          </div>

          <h2>Bill From</h2>
          <Form.Item name="clientName" label="Client's Name">
            <Input />
          </Form.Item>

          <Form.Item
            name="clientEmail"
            label="Client's Email"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please enter client's email address",
              },
              { type: "email", message: "Email is not valid" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="clientStreetAddress" label="Street Address">
            <Input />
          </Form.Item>

          <div className="flex-inputs">
            <Form.Item name="clientCity" label="City">
              <Input />
            </Form.Item>

            <Form.Item name="clientPostCode" label="PostCode">
              <Input />
            </Form.Item>

            <Form.Item name="clientCountry" label="Country">
              <Input />
            </Form.Item>
          </div>
          <div className="flex-inputs">
            <Form.Item name="createdAt" label="Invoice Date">
              <DatePicker picker="date" />
            </Form.Item>

            <Form.Item name="paymentTerms" label="Payment Terms">
              <Select>
                <Select.Option value="1" type="number">
                  Net 1 Day
                </Select.Option>
                <Select.Option value="7" type="number">
                  Net 7 Days
                </Select.Option>
                <Select.Option value="14" type="number">
                  Net 14 Days
                </Select.Option>
                <Select.Option value="30" type="number">
                  Net 30 Days
                </Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item name="description" label="Project Description">
            <Input />
          </Form.Item>
          <h5>Item List</h5>
          <ItemList form={form} />
        </div>

        <div className="invoiceForm-btns">
          <Form.Item>
            <Button
              onClick={() => {
                setNewInvoiceModal(
                  (prevNewInvoiceModal) => !prevNewInvoiceModal
                );
                form.resetFields();
              }}
            >
              Discard
            </Button>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Save & Send</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default InvoiceForm;
