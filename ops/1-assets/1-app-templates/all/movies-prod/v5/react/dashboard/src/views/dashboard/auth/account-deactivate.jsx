import { memo, Fragment } from "react";

//React-bootstrap
import { Row, Col, Container } from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

const AccountDeactive = memo(() => {
  // const appName = useSelector(SettingSelector.app_name)
  const { t } = useTranslation();
  return (
    <Fragment>
      <section
        className="sign-in-page two-auth"
      >
        <Container>
          <Row className="justify-content-center align-items-center height-self-center">
            <Col lg="5" md="12" className="align-self-center form-padding">
              <div className="sign-user_card">
                <div className="sign-in-page-data">
                  <div className="sign-in-from w-100 m-auto">
                    <h2 className="mb-2">
                      {t("authentication.account_de_activate")}
                    </h2>
                    <p className="">{t("authentication.details")}</p>

                    <form className="mt-4">
                      <div className="form-group">
                        <label htmlFor="email">
                          {t("authentication.account_email")}
                        </label>
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          aria-describedby="email"
                          placeholder={t("authentication.xyz@example")}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="name">
                          {t("authentication.account_username")}
                        </label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          aria-describedby="name"
                          placeholder="XYZ"
                        />
                      </div>
                      <button className="btn btn-primary mt-2">
                        {t("authentication.de_activate")}
                      </button>
                    </form>
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

AccountDeactive.displayName = "AccountDeactive";
export default AccountDeactive;
