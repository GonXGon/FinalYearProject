import React from "react";

function Input({
  name,type,placeholder,value,handleChange,
}) {
  return (
    <div className="flex flex-col space-y-3">
      <input
        className="input"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;