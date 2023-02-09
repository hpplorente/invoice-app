import React, { useEffect } from "react";
import Axios from "axios";
import { Form, Button, DatePicker, Input, Select } from "antd";
import InvoiceModal from "../components/layout/InvoiceModal";
import moment from "moment";
import ItemList from "../components/elements/ItemList";

function EditInvoiceModal({
  editInvoiceModal,
  setEditInvoiceModal,
  invoiceData,
  setFetchData,
}) {
  const saveChanges = (data) => {
    const paymentDue = moment(data.createdAt).add(data.paymentTerms, "days");
    Axios.put(
      `https://invoice-app-api.onrender.com/invoice/api/${invoiceData._id}`,
      {
        ...data,
        paymentDue: paymentDue,
      }
    ).then((response) => {
      console.log("Invoice Edited!");
      setEditInvoiceModal(!editInvoiceModal);
      setFetchData(!setFetchData);
    });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      senderStreetAddress: invoiceData.senderStreetAddress,
      senderCity: invoiceData.senderCity,
      senderPostCode: invoiceData.senderPostCode,
      senderCountry: invoiceData.senderCountry,
      clientName: invoiceData.clientName,
      clientEmail: invoiceData.clientEmail,
      clientStreetAddress: invoiceData.clientStreetAddress,
      clientCity: invoiceData.clientCity,
      clientPostCode: invoiceData.clientPostCode,
      clientCountry: invoiceData.clientCountry,
      createdAt: moment(invoiceData.createdAt),
      paymentTerms: invoiceData.paymentTerms,
      description: invoiceData.description,
      itemList: invoiceData.itemList,
    });
  }, []);

  return (
    <>
      <InvoiceModal newInvoiceModal={editInvoiceModal} classes={""}>
        <h1>{`Edit #${invoiceData.invoiceNumber}`}</h1>
        <div className="invoiceForm">
          <Form
            onFinish={(data) => {
              saveChanges(data);
            }}
            layout="vertical"
            form={form}
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
                <Button onClick={() => setEditInvoiceModal(!editInvoiceModal)}>
                  Discard
                </Button>
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit">Save & Send</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </InvoiceModal>
    </>
  );
}

export default EditInvoiceModal;
