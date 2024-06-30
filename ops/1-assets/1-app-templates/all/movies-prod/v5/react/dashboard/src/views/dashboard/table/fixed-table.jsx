import React from "react";

import { Image, ProgressBar } from "react-bootstrap";

import { Link } from "react-router-dom";

import img1 from "/assets/images/shapes/01.png";
import img2 from "/assets/images/shapes/02.png";
import img3 from "/assets/images/shapes/03.png";
import img4 from "/assets/images/shapes/04.png";
import img5 from "/assets/images/shapes/06.png";

// the hook
import { useTranslation } from "react-i18next";

const BasicTable = () => {
  const { t } = useTranslation();
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">{t("fixedtable.basic_table")}</h4>
            </div>
          </div>
          <div className="card-body table-fixed p-0">
            <div className="table-responsive mt-4 border rounded">
              <table
                id="basic-table"
                className="table table-striped mb-0"
                role="grid"
              >
                <thead>
                  <tr>
                    <th>{t("fixedtable.companies")}</th>
                    <th>{t("fixedtable.members")}</th>
                    <th>{t("fixedtable.budget")}</th>
                    <th>{t("fixedtable.status")}</th>
                    <th>{t("fixedtable.completion")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img1}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("fixedtable.soft_ui")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>{" "}
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.pp")}
                          </div>
                        </Link>{" "}
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            MM
                          </div>
                        </Link>
                      </div>
                    </td>
                    <td>$14000</td>
                    <td>
                      <div className="text-info">
                        {t("bordertable.pending")}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>60%</h6>
                      </div>
                      <ProgressBar
                        className="progress bg-info-subtle shadow-none w-100"
                        variant="info"
                        style={{ height: "6px" }}
                        now={60}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img2}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("fixedtable.add_progress")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>{" "}
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.pp")}
                          </div>
                        </Link>
                      </div>
                    </td>
                    <td>$3000</td>
                    <td>
                      <div className="text-danger">
                        {t("bordertable.pending")}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center mb-2">
                        <h6>10%</h6>
                      </div>
                      <ProgressBar
                        className="progress bg-danger-subtle shadow-none w-100"
                        style={{ height: "6px" }}
                        variant="danger"
                        now={10}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img3}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("fixedtable.fix_platform")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.pp")}
                          </div>
                        </Link>
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
                      <ProgressBar
                        style={{ height: "6px" }}
                        variant="success"
                        now={100}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img4}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("bootstraptable.launch_our")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.pp")}
                          </div>
                        </Link>
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.ap")}
                          </div>
                        </Link>
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.dp")}
                          </div>
                        </Link>
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
                      <ProgressBar
                        style={{ height: "6px" }}
                        variant="success"
                        now={100}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img5}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("bootstraptable.add_pricing")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>
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
                      <ProgressBar
                        className="progress bg-primary-subtle shadow-none w-100"
                        style={{ height: "6px" }}
                        variant="text-primary"
                        now={25}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <Image
                          className="rounded img-fluid avatar-40 me-3 bg-primary-subtle"
                          src={img1}
                          alt="profile"
                          loading="lazy"
                        />
                        <h6>{t("fixedtable.redesign_shop")}</h6>
                      </div>
                    </td>
                    <td>
                      <div className="iq-media-group iq-media-group-1">
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.sp")}
                          </div>
                        </Link>
                        <Link href="#" className="iq-media-1">
                          <div className="icon iq-icon-box-3 rounded-pill">
                            {t("bootstraptable.pp")}
                          </div>
                        </Link>
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
                      <ProgressBar
                        className="progress bg-warning-subtle shadow-none w-100"
                        style={{ height: "6px" }}
                        variant="warning"
                        now={40}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTable;
