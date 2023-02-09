import React from "react";
import { Form, Input, Button, Space } from "antd";

function ItemList({ form }) {
  // const onChange = (index) => {
  //   const values = form.getFieldsValues();
  //   // const totalValue = form.getFieldsValue("itemTotal");
  //   // const quantityValue = form.getFieldsValue("itemQuantity");
  //   // const priceValue = form.getFieldsValue("itemQuantity");

  //   // const updatedItemTotal = totalValue.map((totalItem) => {
  //   //   if (totalItem._id === originalItemTotal._id) {
  //   //     return {
  //   //       ...totalItem,
  //   //       itemTotal: value,
  //   //     };
  //   //   }

  //   //   return totalItem;
  //   // });
  //   console.log(index);
  // };

  return (
    <>
      <Form.List name="itemList">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => {
              return (
                <Space direction="horizontal">
                  <Form.Item name={[field.name, "itemName"]}>
                    <Input placeholder="Item Name" />
                  </Form.Item>
                  <Form.Item name={[field.name, "itemQuantity"]}>
                    <Input
                      placeholder="Qty"
                      type="number"
                      // onChange={(index) => onChange(index)}
                    />
                  </Form.Item>
                  <Form.Item name={[field.name, "itemPrice"]}>
                    <Input
                      placeholder="Price"
                      type="number"
                      onChange={() => {
                        const values = form.getFieldsValue();
                        // console.log(values.itemList[index].itemQuantity);
                        // console.log(values.itemList[index].itemPrice);

                        const totalValue = values.itemList.map((value) => {
                          if (
                            values.itemList[index].itemQuantity &&
                            values.itemList[index].itemPrice
                          ) {
                            return {
                              ...value,
                              itemTotal:
                                values.itemList[index].itemQuantity *
                                values.itemList[index].itemPrice,
                            };
                          }

                          return value;
                        });

                        form.setFieldsValue({
                          itemList: [
                            { itemTotal: totalValue[index].itemTotal },
                          ],
                        });

                        // if (
                        //   values.itemList[index].itemQuantity &&
                        //   values.itemList[index].itemPrice
                        // ) {
                        //   form.setFieldsValue({
                        //     [`itemList.${index}.itemTotal`]:
                        //       values.itemList[index].itemPrice *
                        //       values.itemList[index].itemQuantity,
                        //   });
                        // }
                      }}
                    />
                  </Form.Item>
                  <Form.Item name={[field.name, "itemTotal"]}>
                    <Input placeholder="Total" disabled type="number" />
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
