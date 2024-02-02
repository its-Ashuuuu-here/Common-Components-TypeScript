import { Input } from "antd";
import React from "react";

type DynamicInProps = {
  placeholder: string;
  size: "small" | "large" | "default";
  type: "password" | "text" | "number";
  status: "warning" | "error" | "success";
};

const inputStyles = {
  width: {
    small: "10%",
    large: "50%",
    default: "30%",
  },
  margin: {
    small: "7px",
    large: "5px",
    default: "15px",
  },
};

const statusStyle = {
  borderColor: {
    warning: "orange",
    error: "red",
    success: "blue",
  },
};

const typeStyle = {
  password: "password",
  text: "text",
  number: "number",
};

function DynamicIn({ placeholder, size, type, status }: DynamicInProps) {
  const style = {
    width: inputStyles.width[size],
    margin: inputStyles.margin[size],
    borderColor: statusStyle.borderColor[status],
  };

  return (
    <div className="m-11">
      <Input placeholder={placeholder} style={style} type={typeStyle[type]} />
    </div>
  );
}

export default DynamicIn;
