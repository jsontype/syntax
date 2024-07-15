import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const IconComponent = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Link
        className="text-primary d-flex align-items-center lh-lg mt-4"
        href="#"
      >
        <i className={`${props.class} fa-xl me-2 lh-lg`}></i>
        <h5 className="fw-bold mt-2 ms-2 lh-lg">{t(props.name)}</h5>
      </Link>
    </Fragment>
  );
});

IconComponent.displayName = "IconComponent";
export default IconComponent;
