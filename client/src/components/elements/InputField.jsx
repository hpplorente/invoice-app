import React from "react";
import { Input } from "antd";

function InputField({ label, type, values, changeHandler, names, ...props }) {
  return (
    <div className="input">
      <label>{label}</label>
      <Input type={type} value={values} onChange={changeHandler} name={names} />
    </div>
  );
}

export default InputField;
