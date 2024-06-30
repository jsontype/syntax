import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
// the hook
import { useTranslation } from "react-i18next";

const FooterStyle = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-body">
          <ul className="left-panel list-inline mb-0 p-0 d-flex gap-1">
            <li className="list-inline-item">
              <Link to="/extra/privacy-policy">{t("privacy_policy.privacy_policy")}</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/extra/terms-of-use">{t("privacy_policy.terms_of_use")}</Link>
            </li>
          </ul>
          <div className="right-panel">
            ©<script>2022</script> <span data-setting="app_name">Streamit</span>
            , {t("privacy_policy.made_with")}&nbsp;
            <span className="text-gray">
              <svg
                className="icon-16"
                width="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.85 2.50065C16.481 2.50065 17.111 2.58965 17.71 2.79065C21.401 3.99065 22.731 8.04065 21.62 11.5806C20.99 13.3896 19.96 15.0406 18.611 16.3896C16.68 18.2596 14.561 19.9196 12.28 21.3496L12.03 21.5006L11.77 21.3396C9.48102 19.9196 7.35002 18.2596 5.40102 16.3796C4.06102 15.0306 3.03002 13.3896 2.39002 11.5806C1.26002 8.04065 2.59002 3.99065 6.32102 2.76965C6.61102 2.66965 6.91002 2.59965 7.21002 2.56065H7.33002C7.61102 2.51965 7.89002 2.50065 8.17002 2.50065H8.28002C8.91002 2.51965 9.52002 2.62965 10.111 2.83065H10.17C10.21 2.84965 10.24 2.87065 10.26 2.88965C10.481 2.96065 10.69 3.04065 10.89 3.15065L11.27 3.32065C11.3618 3.36962 11.4649 3.44445 11.554 3.50912C11.6104 3.55009 11.6612 3.58699 11.7 3.61065C11.7163 3.62028 11.7329 3.62996 11.7496 3.63972C11.8354 3.68977 11.9247 3.74191 12 3.79965C13.111 2.95065 14.46 2.49065 15.85 2.50065ZM18.51 9.70065C18.92 9.68965 19.27 9.36065 19.3 8.93965V8.82065C19.33 7.41965 18.481 6.15065 17.19 5.66065C16.78 5.51965 16.33 5.74065 16.18 6.16065C16.04 6.58065 16.26 7.04065 16.68 7.18965C17.321 7.42965 17.75 8.06065 17.75 8.75965V8.79065C17.731 9.01965 17.8 9.24065 17.94 9.41065C18.08 9.58065 18.29 9.67965 18.51 9.70065Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>{" "}
            {t("privacy_policy.by")}{" "}
            <Link
              to="https://iqonic.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("privacy_policy.iqonic")}
            </Link>
            .
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default FooterStyle;
