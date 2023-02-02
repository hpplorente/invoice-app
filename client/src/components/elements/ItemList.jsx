import React from "react";
import { Form, Input, Button, Space } from "antd";

function ItemList() {
  return (
    <>
      <Form.List name="itemList">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => {
              return (
                <Space direction="horizontal">
                  <Form.Item name={[field.name, "ItemName"]}>
                    <Input placeholder="Item Name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "Quantity"]}>
                    <Input placeholder="Qty" />
                  </Form.Item>
                  <Form.Item name={[field.name, "Price"]}>
                    <Input placeholder="Price" />
                  </Form.Item>
                  <Form.Item name={[field.name, "Total"]}>
                    <Input placeholder="Total" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      onClick={() => {
                        remove(field.name);
                      }}
                    >
                      remove
                    </Button>
                  </Form.Item>
                </Space>
              );
            })}
            <Form.Item>
              <Button
                block
                onClick={() => {
                  add();
                }}
              >
                Add Item
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
}

export default ItemList;
