import { Select } from "antd";
import React from "react";

interface DynamicSelProps {
  size: "small" | "large" | "default";
  status: "warning" | "error";
  defaultValue?: string;
  options: { value: string; label: string }[];
  mode?: "tags" | "multiple";
}

const selectStyles = {
  width: {
    small: "10%",
    large: "50%",
    default: "30%",
  },
  margin: {
    small: "7px",
    large: "10px",
    default: "10px",
  },
};

function DynamicSel({size,defaultValue, options, mode, status}: DynamicSelProps) {
  const stylesel = {
    width: selectStyles.width[size],
    margin: selectStyles.margin[size],
  };

  return (
    <div>
      <Select
        style={stylesel}
        defaultValue={defaultValue}
        options={options}
        mode={mode}
        status={status}
      />
    </div>
  );
}

export default DynamicSel;
