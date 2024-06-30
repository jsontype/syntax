import { memo, Fragment } from "react";

//React-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//router-dom
import { useNavigate,Link } from "react-router-dom";

//components
import Card from "../../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

const TwoFactor = memo(() => {
  const { t } = useTranslation();
  // const appName = useSelector(SettingSelector.app_name)
  let history = useNavigate();
  return (
    <Fragment>
      <section className="sign-in-page">
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col md="12" lg="5" className="align-self-center form-padding">
              <div className="sign-user_card">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h2 className="mb-2">{t("authentication.verification")}</h2>
                    <p>{t("authentication.email_address")}</p>

                    <form className="mt-4" action="#">
                      <div className="form-group floating-label">
                        <label htmlFor="email" className="form-label">
                          {t("authentication.phone_number")}
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          aria-describedby="email"
                          placeholder="+1 123456789"
                        ></input>
                      </div>
                      <button className="btn btn-primary mt-2">
                        {t("authentication.reset")}
                      </button>

                      <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">
                          {t("authentication.OTP")}
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          aria-describedby="email"
                          placeholder="0000"
                        ></input>
                        <button className="btn btn-primary mt-2">
                          {t("authentication.verify")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="d-flex justify-content-center links">
                    {t("authentication.dont_have_an_account")}{" "}
                    <Link href="/auth/sign-up" className="text-primary ms-2">
                      {t("authentication.sign_up")}
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center links">
                    <Link href="/auth/recoverpw" className="f-link">
                      {t("authentication.forgot_your_password")}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

TwoFactor.displayName = "TwoFactor";
export default TwoFactor;
