import React from "react";

export const Input = (props) => {
  if (props.type === "textarea") {
    return (
      <div className={props.className}>
        {!!props.label ? <div>{props.label}</div> : null}
        <div className={props.inputBlockClassName}>
          <textarea
            disabled={props.disabled}
            type={!!props.type ? props.type : "text"}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handleChange}
            rows={!!props.rows ? +props.rows : 5}
            className={props.inputClassName}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={props.className}>
      {!!props.label ? <div>{props.label}</div> : null}
      <div className={props.inputBlockClassName}>
        <input
          disabled={props.disabled}
          placeholder={props.placeholder}
          type={!!props.type ? props.type : "text"}
          value={props.value}
          onChange={props.handleChange}
          className={props.inputClassName}
          style={props.inputStyle}
        />
      </div>
    </div>
  );
};

export default React.memo(Input);
