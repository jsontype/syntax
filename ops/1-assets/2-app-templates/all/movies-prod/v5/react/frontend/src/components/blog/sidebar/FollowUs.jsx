import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const FollowUs = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="widget">
        <h5 className="widget-title position-relative">
          {" "}
          {t("form.follow_us")}:
        </h5>
        <ul className="p-0 m-0 list-unstyled widget_social_media">
          <li>
            <Link to="https://www.facebook.com/" className="position-relative">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/" className="position-relative">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/" className="position-relative">
              <i className="fab fa-github"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/" className="position-relative">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
});

FollowUs.displayName = "FollowUs";
export default FollowUs;
