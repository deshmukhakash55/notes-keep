import React from "react";

export const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      {props.text}
    </button>
  );
};

export default React.memo(Button);
