import React from "react";

function InputField({
  label,
  type,
  classes,
  values,
  changeHandler,
  names,
  ...props
}) {
  return (
    <div>
      <h3>{label}</h3>
      <input
        type={type}
        className={classes}
        value={values}
        onChange={changeHandler}
        name={names}
      />
    </div>
  );
}

export default InputField;
