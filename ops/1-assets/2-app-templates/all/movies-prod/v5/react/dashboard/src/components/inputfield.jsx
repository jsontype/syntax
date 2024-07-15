import React from "react";

const InputField = (props) => {
  return (
    <div className={`form-group px-3 ${props.className}`}>
      <label className="form-label flex-grow-1" htmlFor={props.label}>
        <strong>{props.label}</strong>{" "}
        {props.isRequired === "true" && <span className="text-danger">*</span>}:
      </label>

      {props.type === "textarea" ? (
        <textarea
          id={props.label}
          className="form-control"
          placeholder={props.placeholder}
          defaultValue={props.value}
        ></textarea>
      ) : props.type === "toggle" ? (
        <div className="form-check form-switch ms-2">
          <input
            id={props.label}
            className="form-check-input"
            type="checkbox"
            defaultChecked={props.value}
          />
        </div>
      ) : (
        <input
          id={props.label}
          type={props.type}
          className={`form-control ${props.className}`}
          placeholder={props.placeholder}
          defaultValue={props.value}
          min={props.min}
          multiple={props.isMulti}
        />
      )}
    </div>
  );
};

export default InputField;
