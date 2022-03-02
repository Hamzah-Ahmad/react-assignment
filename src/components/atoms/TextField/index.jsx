import React from "react";

export default function TextField({
  label,
  disabled,
  type,
  className,
  name,
  value,
  onChange,
}) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        className={className}
        disabled={disabled}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
    </>
  );
}

TextField.defaultProps = {
  type: "text",
  disabled: false,
};
