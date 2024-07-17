import { memo, Fragment } from "react";

//react-bootstrap
import { Row, Col, Image } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

//router
import { Link } from "react-router-dom";

import Progress from "../../../components/progress.jsx";

// the hook
import { useTranslation } from "react-i18next";

// img
import shap1 from "/assets/images/shapes/01.png";
import shap2 from "/assets/images/shapes/02.png";
import shap3 from "/assets/images/shapes/03.png";
import shap4 from "/assets/images/shapes/04.png";
import shap5 from "/assets/images/shapes/06.png";
import shap6 from "/assets/images/shapes/01.png";

const BootstrapTable = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("bootstraptable.basic_table")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <table
                  id="basic-table"
                  className="table table-striped mb-0"
                  role="grid"
                >
                  <thead>
                    <tr>
                      <th>{t("bootstraptable.companies")}</th>
                      <th>{t("bootstraptable.members")}</th>
                      <th>{t("bootstraptable.budget")}</th>
                      <th>{t("bootstraptable.status")}</th>
                      <th>{t("bootstraptable.completion")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Image
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap1}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.soft_ui")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.pp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              MM
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>$14000</td>
                      <td>
                        <div className="text-info">
                          {t("bootstraptable.pending")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>60%</h6>
                        </div>
                        <Progress
                          softcolors="info"
                          color="info"
                          className="progress bg-info-subtle shadow-none w-100"
                          value={60}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap2}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.add_progress")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.pp")}
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>$3000</td>
                      <td>
                        <div className="text-danger">
                          {t("bootstraptable.pending")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>10%</h6>
                        </div>
                        <Progress
                          softcolors="danger"
                          color="danger"
                          className="progress bg-danger-subtle shadow-none w-100"
                          value={10}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap3}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.fix_platform")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.pp")}
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>{t("bootstraptable.not_set")}</td>
                      <td>
                        <div className="text-success">
                          {t("bootstraptable.completed")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>100%</h6>
                        </div>
                        <Progress
                          softcolors="success"
                          color="success"
                          className="progress bg-success-subtle shadow-none w-100"
                          value={100}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap4}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.launch_our")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.pp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.ap")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.dp")}
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>$20500</td>
                      <td>
                        <div className="text-success">
                          {t("bootstraptable.completed")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>100%</h6>
                        </div>
                        <Progress
                          softcolors="success"
                          color="success"
                          className="progress bg-success-subtle shadow-none w-100"
                          value={100}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap5}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.add_pricing")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>$500</td>
                      <td>
                        <div className="text-primary">
                          {t("bootstraptable.on_schedule")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>25%</h6>
                        </div>
                        <Progress
                          softcolors="primary"
                          color="primary"
                          className="progress bg-primary-subtle shadow-none w-100"
                          value={25}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                            src={shap6}
                            alt="profile"
                            loading="lazy"
                          />
                          <h6>{t("bootstraptable.redesign_shop")}</h6>
                        </div>
                      </td>
                      <td>
                        <div className="iq-media-group iq-media-group-1">
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.sp")}
                            </div>
                          </Link>{" "}
                          <Link to="#" className="iq-media-1">
                            <div className="icon iq-icon-box-3 rounded-pill">
                              {t("bootstraptable.pp")}
                            </div>
                          </Link>{" "}
                        </div>
                      </td>
                      <td>$2000</td>
                      <td>
                        <div className="text-warning">
                          {t("bootstraptable.completed")}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center mb-2">
                          <h6>40%</h6>
                        </div>
                        <Progress
                          softcolors="warning"
                          color="warning"
                          className="progress bg-warning-subtle shadow-none w-100"
                          value={40}
                          minvalue={0}
                          maxvalue={100}
                          style={{ height: "6px" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

BootstrapTable.displayName = "BootstrapTable";
export default BootstrapTable;
