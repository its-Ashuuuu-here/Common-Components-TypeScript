import { Button } from "antd";
interface DynamicBtnProps {
  label: string;
  size: "small" | "large" | "default";
  type: "dashed" | "primary" | "link" | "text";
  shape: "circle" | "round" | "default";
}
// interface DynamicStyle {
//   border: {
//     small: string;
//     default: string;
//     large: string;
//   };
//   background: {
//     small: string;
//     default: string;
//     large: string;
//   };
//   fontsize: {
//     small: string;
//     large: string;
//     default: string;
//   };
//   color: {
//     small: string;
//     large: string;
//     default: string;
//   };
// }
// interface SizeType {
//   width: {
//     small: string;
//     large: string;
//     default: string;
//   };
//   height: {
//     small: string;
//     large: string;
//     default: string;
//   };
// }
const dynamicStyle = {
  border: {
    small: "1px solid rgb(35, 105, 35)",
    default: "1px dashed red",
    large: "1px solid black ",
  },
  background: {
    small: " rgb(35, 105, 35)",
    default: " rgb(47, 47, 180)",
    large: "rgb(253, 49, 49)",
  },
  fontsize: {
    small: "12px",
    large: "20px",
    default: "18px",
  },
  color: {
    small: "red",
    large: "blue",
    default: "white",
  },
};
const sizeType = {
  width: {
    small: "10%",
    large: "50%",
    default: "30%",
  },
  height: {
    small: "10%",
    large: "20%",
    default: "10%",
  },
};
function DynamicBtn({ label, size, type, shape }: DynamicBtnProps) {
  const stylebtn = {
    border: dynamicStyle.border[size],
    background: dynamicStyle.background[size],
    fontSize: dynamicStyle.fontsize[size],
    width: sizeType.width[size],
    height: sizeType.height[size],
    color: dynamicStyle.color[size],
    margin: "10px",
  };
  return (
    <div>
      <Button style={stylebtn} type={type} shape={shape}>
        {label}
      </Button>
    </div>
  );
}

export default DynamicBtn;
