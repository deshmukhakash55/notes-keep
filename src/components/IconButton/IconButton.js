import React from "react";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Paint from "../../assets/paint.svg";

export const IconButton = (props) => {
  let iconSrc = "";
  switch (props.icon) {
    case "delete":
      iconSrc = Delete;
      break;
    case "edit":
      iconSrc = Edit;
      break;
    case "color":
      iconSrc = Paint;
      break;
    default:
      iconSrc = "";
  }
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <img src={iconSrc} alt="delete" />
    </button>
  );
};

export default React.memo(IconButton);
