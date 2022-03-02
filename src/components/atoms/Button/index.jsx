import React from "react";

export default function Button({
  type,
  disabled,
  className,
  children,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
