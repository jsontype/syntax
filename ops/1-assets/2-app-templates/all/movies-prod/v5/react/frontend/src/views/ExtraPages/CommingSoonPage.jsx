import { Fragment, memo } from "react";

//react bootstrap
import { Button, Container } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const CommingSoonPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div
        className="section-padding height-auto-100 image-flip-rtl"
        style={{
          backgroundImage: `url(${generateImgPath(
            "/assets/images/pages/coming-soon.webp"
          )})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "500px",
        }}
      >
        <Container className="h-100">
          <div className="d-flex flex-column justify-content-center h-100">
            <h1 className="text-capitalize fw-500 mb-0 text-center text-md-start">
              {t("countdown.comin_back")}
            </h1>
            <ul className="countdown d-flex align-items-center list-inline count-down my-5 py-3">
              <li className="position-relative d-inline-lock">
                <span className="numberDisplay">569</span>
                <span className="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">
                  {t("countdown.days")}
                </span>
              </li>
              <li className="position-relative d-inline-lock">
                <span className="numberDisplay">03</span>
                <span className="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">
                  {t("countdown.hours")}
                </span>
              </li>
              <li className="position-relative d-inline-lock">
                <span className="numberDisplay">42</span>
                <span className="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">
                  {t("countdown.minutes")}
                </span>
              </li>
              <li className="position-relative d-inline-lock">
                <span className="numberDisplay">06</span>
                <span className="text-center text-capitalize fw-semibold d-block pt-1 letter-spacing-1">
                  {t("countdown.seconds")}
                </span>
              </li>
            </ul>
            <div className="mailchimp">
              <div className="input-group  mail-box-width">
                <input
                  className="form-control mb-0 font-size-14"
                  placeholder={`${t('form.email')}`}
                  aria-describedby="button-addon2"
                />
                <div className="iq-button">
                  <Button id="button-addon2" className="btn" type="submit">
                    {t("countdown.subscribe")}
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-2 mb-3 text-center text-md-start">
              {t("countdown.working_hard")}
            </p>
            <div className="d-flex align-items-center mt-3 mt-md-5 justify-content-center justify-content-md-start">
              <span className="font-size-14 me-3">
                {t("countdown.follow_us")}
              </span>
              <ul className="p-0 m-0 list-unstyled widget_social_media">
                <li className="">
                  <Link
                    to="https://www.facebook.com/"
                    className="position-relative"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>{" "}
                <li className="">
                  <Link
                    to="https://twitter.com/"
                    className="position-relative"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>{" "}
                <li className="">
                  <Link
                    to="https://github.com/"
                    className="position-relative"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </li>{" "}
                <li className="">
                  <Link
                    to="https://www.instagram.com/"
                    className="position-relative"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>{" "}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
});

CommingSoonPage.displayName = "CommingSoonPage";
export default CommingSoonPage;
