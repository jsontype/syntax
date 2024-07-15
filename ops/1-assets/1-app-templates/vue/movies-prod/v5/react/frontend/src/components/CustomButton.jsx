import React, { memo, Fragment } from "react";

// react-router-dom
import { Link } from "react-router-dom";

const CustomButton = memo((props) => {
  return (
    <Fragment>
      {props.linkButton === "true" && (
        <div className="iq-button link-button">
          <Link
            to={props.link}
            className="btn text-capitalize position-relative"
          >
            <span className="button-text">{props.buttonTitle}</span>
          </Link>
        </div>
      )}
      {props.linkButton === "false" && (
        <div className="iq-button">
          <Link
            to={props.link}
            className="btn text-uppercase position-relative"
          >
            <span className="button-text">{props.buttonTitle}{" "}</span>
            <i className="fa-solid fa-play"></i>
          </Link>
        </div>
      )}
    </Fragment>
  );
});

CustomButton.displayName = "CustomButton";
export default CustomButton;
