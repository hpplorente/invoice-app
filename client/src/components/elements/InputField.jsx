import React from "react";

function InputField({ label, type, values, changeHandler, names, ...props }) {
  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} value={values} onChange={changeHandler} name={names} />
    </div>
  );
}

export default InputField;
