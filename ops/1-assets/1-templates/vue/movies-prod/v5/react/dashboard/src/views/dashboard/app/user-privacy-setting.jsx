import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Form } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

//components
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const UserProfileEdit = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("privacy_setting.privacy_setting")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="acc-privacy">
                <div className="data-privacy">
                  <h4 className="mb-2">
                    {t("privacy_setting.account_privacy")}
                  </h4>
                  <Form.Check>
                    <Form.Check.Input type="checkbox" id="customCheck5" />{" "}
                    <Form.Check.Label className="pl-2" htmlor="customCheck5">
                      {t("privacy_setting.private_account")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_1")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2">
                    {t("privacy_setting.activity_status")}
                  </h4>
                  <Form.Check>
                    <Form.Check.Input type="checkbox" id="activety" />{" "}
                    <Form.Check.Label className="pl-2" htmlFor="activety">
                      {t("privacy_setting.show_activity")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_2")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2">
                    {" "}
                    {t("privacy_setting.story_sharing")}{" "}
                  </h4>
                  <Form.Check>
                    <Form.Check.Input type="checkbox" id="story" />{" "}
                    <Form.Check.Label className="pl-2" htmlFor="story">
                      {t("privacy_setting.allow_sharing")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_2")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2"> {t("privacy_setting.photo")} </h4>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio0"
                      id="automatically"
                      defaultChecked
                    />{" "}
                    <Form.Check.Label htmlFor="automatically" className="pl-2">
                      {t("privacy_setting.automatically")}
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio0"
                      id="manualy"
                    />
                    <Form.Check.Label htmlFor="manualy" className="pl-2">
                      {t("privacy_setting.manually")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_2")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2">
                    {" "}
                    {t("privacy_setting.your_profile")}{" "}
                  </h4>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio1"
                      id="public"
                    />{" "}
                    <Form.Check.Label htmlFor="public" className="pl-2">
                      {t("privacy_setting.public")}
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio1"
                      id="friend"
                    />{" "}
                    <Form.Check.Label htmlFor="friend" className="pl-2">
                      {t("privacy_setting.friend")}
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio1"
                      id="spfriend"
                    />{" "}
                    <Form.Check.Label htmlFor="spfriend" className="pl-2">
                      {t("privacy_setting.specific_friend")}
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio1"
                      id="onlyme"
                    />{" "}
                    <Form.Check.Label htmlFor="onlyme" className="pl-2">
                      {t("privacy_setting.only_me")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_2")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2">
                    {" "}
                    {t("privacy_setting.login_notification")}{" "}
                  </h4>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio2"
                      id="enable"
                    />{" "}
                    <Form.Check.Label htmlFor="enable" className="pl-2">
                      {t("privacy_setting.enable")}
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check>
                    <Form.Check.Input
                      type="radio"
                      name="customRadio2"
                      id="disable"
                    />{" "}
                    <Form.Check.Label htmlFor="disable" className="pl-2">
                      {t("privacy_setting.disable")}
                    </Form.Check.Label>
                  </Form.Check>
                  <p>{t("privacy_setting.line_2")}</p>
                </div>
                <hr />
                <div className="data-privacy">
                  <h4 className="mb-2">{t("privacy_setting.privacy_help")}</h4>
                  <Link to="#">
                    <i className="ri-customer-service-2-line mr-2"></i>
                    {t("privacy_setting.support")}
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

UserProfileEdit.displayName = "UserProfileEdit";
export default UserProfileEdit;
