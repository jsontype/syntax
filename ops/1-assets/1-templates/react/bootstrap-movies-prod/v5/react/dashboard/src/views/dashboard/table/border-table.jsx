import { memo, Fragment, useEffect } from "react";

// React-bootstrap
import { Row, Col, Image, Button, Table } from "react-bootstrap";

//Components
import Card from "../../../components/bootstrap/card";

//plugins
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import $ from "jquery";

//img
import img1 from "/assets/images/avatars/01.png";
import img3 from "/assets/images/avatars/03.png";
import img4 from "/assets/images/avatars/04.png";
import img6 from "/assets/images/avatars/06.png";
import img13 from "/assets/images/avatars/14.png";
import img12 from "/assets/images/avatars/18.png";
import img10 from "/assets/images/avatars/19.png";
import img11 from "/assets/images/avatars/20.png";

// the hook
import { useTranslation } from "react-i18next";
import ChoicesJs from "../../../components/choices";

const Borderedtable = memo(() => {
  const { t } = useTranslation();
  useEffect(() => {
    $("#borderTable").DataTable();
  }, []);

  const usa = (
    <svg
      width="18"
      className="me-2"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="20" height="13.75" fill="#EEF3F8" />
      <rect y="0.5" width="11.25" height="8.75" fill="#41479B" />
      <rect x="11.25" y="0.5" width="8.75" height="1.25" fill="#DC251C" />
      <rect x="11.25" y="3" width="8.75" height="1.25" fill="#DC251C" />
      <rect x="11.25" y="5.5" width="8.75" height="1.25" fill="#DC251C" />
      <rect x="11.25" y="8" width="8.75" height="1.25" fill="#DC251C" />
      <rect y="10.5" width="20" height="1.25" fill="#DC251C" />
      <rect y="13" width="20" height="1.25" fill="#DC251C" />
      <rect x="1.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="3.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="6.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="8.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="1.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="3.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="6.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="2.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="7.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="2.5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="7.5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="8.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="1.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="3.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="6.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
      <rect x="8.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
    </svg>
  );

  const spn = (
    <svg
      width="18"
      className="me-2"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="15"
        transform="translate(0 0.5)"
        fill="#FFD018"
      />
      <rect y="0.5" width="20" height="3.75" fill="#DC251C" />
      <rect y="11.75" width="20" height="3.75" fill="#DC251C" />
      <rect x="3.75" y="5.5" width="2.5" height="2.5" fill="#DC251C" />
      <path
        d="M3.75 8H6.25V10.5H4.75C4.19772 10.5 3.75 10.0523 3.75 9.5V8Z"
        fill="#FF8718"
      />
      <path
        d="M6.25 8H8.75V9.5C8.75 10.0523 8.30228 10.5 7.75 10.5H6.25V8Z"
        fill="#DC251C"
      />
      <rect x="6.25" y="5.5" width="2.5" height="2.5" fill="#A6A6A6" />
      <circle cx="6.25" cy="8" r="0.625" fill="#41479B" />
    </svg>
  );

  const itl = (
    <svg
      width="18"
      className="me-2"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="20" height="15" fill="#F5F8FB" />
      <rect y="0.5" width="6.25" height="15" fill="#2B9F5A" />
      <rect x="13.75" y="0.5" width="6.25" height="15" fill="#DC251C" />
    </svg>
  );

  const jpn = (
    <svg
      width="18"
      className="me-2"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="15"
        transform="translate(0 0.5)"
        fill="#F5F8FB"
      />
      <circle cx="9.5" cy="7.5" r="3.5" fill="#DC251C" />
    </svg>
  );

  const ger = (
    <svg
      width="22"
      className="me-2"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="21.3333" height="16" fill="#272727" />
      <rect y="5.3335" width="21.3333" height="5.33333" fill="#E31D1C" />
      <rect y="10.6665" width="21.3333" height="5.33333" fill="#FFD018" />
    </svg>
  );

  const ind = (
    <svg
      width="21"
      className="me-2"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_80_4707)">
        <path d="M0 0H21V5.33333H0V0Z" fill="#FF8718" />
        <path d="M0 5.3335H21V10.6668H0V5.3335Z" fill="#F5F8FB" />
        <path d="M0 10.6665H21V15.9998H0V10.6665Z" fill="#2B9F5A" />
        <path
          d="M11.813 8.00033C11.813 8.73671 11.2254 9.33366 10.5005 9.33366C9.77561 9.33366 9.18799 8.73671 9.18799 8.00033C9.18799 7.26395 9.77561 6.66699 10.5005 6.66699C11.2254 6.66699 11.813 7.26395 11.813 8.00033Z"
          fill="#F5F8FB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4995 7.33333C10.1371 7.33333 9.84326 7.63181 9.84326 8C9.84326 8.36819 10.1371 8.66667 10.4995 8.66667C10.8619 8.66667 11.1558 8.36819 11.1558 8C11.1558 7.63181 10.8619 7.33333 10.4995 7.33333ZM8.53076 8C8.53076 6.89543 9.4122 6 10.4995 6C11.5868 6 12.4683 6.89543 12.4683 8C12.4683 9.10457 11.5868 10 10.4995 10C9.4122 10 8.53076 9.10457 8.53076 8Z"
          fill="#41479B"
        />
      </g>
      <defs>
        <clipPath id="clip0_80_4707">
          <rect width="21" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const uae = (
    <svg
      width="22"
      className="me-2"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="5.3335" width="21.3333" height="5.33333" fill="#F5F8FB" />
      <rect width="21.3333" height="5.33333" fill="#2B9F5A" />
      <rect y="10.6665" width="21.3333" height="5.33333" fill="#272727" />
      <rect width="6.66667" height="16" fill="#DC251C" />
    </svg>
  );

  const grc = (
    <svg
      width="21"
      className="me-2"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="21" height="16" fill="#F5F8FB" />
      <rect width="21" height="2" fill="#41479B" />
      <rect y="3" width="21" height="3" fill="#41479B" />
      <rect y="7" width="21" height="2" fill="#41479B" />
      <rect width="9" height="9" fill="#41479B" />
      <rect y="3" width="9" height="3" fill="#F5F8FB" />
      <rect
        x="3"
        y="9"
        width="9"
        height="3"
        transform="rotate(-90 3 9)"
        fill="#F5F8FB"
      />
      <rect y="10" width="21" height="3" fill="#41479B" />
      <rect y="14" width="21" height="2" fill="#41479B" />
    </svg>
  );

  const sko = (
    <svg
      width="18"
      className="me-2"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="21" height="16" fill="#F5F8FB" />
      <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#DC251C" />
      <mask
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="7"
        width="7"
        height="5"
      >
        <path
          d="M14 12.0002V8.30792C12.832 6.15169 10.4961 7.92611 10.4961 7.92611C10.4961 7.92611 8.16538 9.53597 7 7.07715V12.0002H14Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_80_4853)">
        <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#41479B" />
      </g>
      <path
        d="M2.16455 4.83789L4.32821 1.09033"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M3.12744 5.39551L5.2911 1.64795"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M4.09131 5.95117L6.25496 2.20361"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M18.9995 4.83789L16.8359 1.09033"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
      <path
        d="M18.0366 5.39551L15.873 1.64795"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M17.0728 5.95117L14.9091 2.20361"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
      <path
        d="M2.16406 11.5049L4.32772 15.2524"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M3.12744 10.9492L5.2911 14.6968"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
      <path
        d="M4.09082 10.3926L6.25447 14.1401"
        stroke="black"
        strokeWidth="0.5"
      />
      <path
        d="M18.9995 11.5049L16.8359 15.2524"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
      <path
        d="M18.0366 10.9492L15.873 14.6968"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
      <path
        d="M17.0732 10.3926L14.9096 14.1401"
        stroke="black"
        strokeWidth="0.5"
        strokeDasharray="8 1"
      />
    </svg>
  );

  const add = (
    <i className="fa-solid fa-user-plus"></i>
  );

  const edit = (
    <i className="fa-solid fa-pen"></i>
  );

  const remove = (
    <i className="fa-solid fa-trash"></i>
  );
  const table1 = [
    {
      name: "bordertable.anne_trek",
      desc: "bordertable.musk",
      img: img10,
      contact: "(208) 555-0112",
      emailid: "musk.e@mail.com",
      countrysvg: grc,
      countryname: "bordertable.grc",
      purchases: "548",
      statusColor: "primary",
      bgColor: "primary",
      status: "bordertable.hold",
      prefix: '',
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.anne_trek",
      desc: "bordertable.musk",
      img: img11,
      contact: "(208) 555-0112",
      emailid: "musk.e@mail.com",
      countrysvg: sko,
      countryname: "bordertable.sko",
      purchases: "548",
      statusColor: "success",
      bgColor: "success",
      status: "bordertable.complete",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.clara_mist",
      desc: "bordertable.mist_c@",
      img: img12,
      contact: "(208) 674-3424",
      emailid: "mist.e@mail.com",
      countrysvg: uae,
      countryname: "bordertable.uae",
      purchases: "327",
      statusColor: "warning",
      bgColor: "warning",
      status: "bordertable.pending",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.clinette_mark",
      desc: "bordertable.mist_c@",
      img: img13,
      contact: "(208) 346-4687",
      emailid: "c.mark@mail.com",
      countrysvg: jpn,
      countryname: "bordertable.japan",
      purchases: "324",
      statusColor: "success",
      bgColor: "success",
      status: "bordertable.complete",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.james_mason",
      desc: "bordertable.mason_j@",
      img: img4,
      contact: "(208) 326-4679",
      emailid: "mason.j@mail.com",
      countrysvg: itl,
      countryname: "bordertable.itl",
      purchases: "481",
      statusColor: "primary",
      bgColor: "primary",
      status: "bordertable.hold",
      prefix: '',
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.jamie_park",
      desc: "bordertable.jpark@",
      img: img6,
      contact: "(208) 778-6878",
      emailid: "park.e@mail.com",
      countrysvg: ger,
      countryname: "bordertable.ger",
      purchases: "123",
      statusColor: "danger",
      bgColor: "danger",
      status: "bordertable.inactive",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.anne_trek",
      desc: "bordertable.musk",
      img: img1,
      contact: "(208) 555-0112",
      emailid: "musk.e@mail.com",
      countrysvg: usa,
      countryname: "bordertable.usa",
      purchases: "548",
      statusColor: "primary",
      bgColor: "primary",
      status: "bordertable.active",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.dennis_hall",
      desc: "bordertable.dennis@",
      img: img4,
      contact: "(208) 555-0112",
      emailid: "dennis.e@mail.com",
      countrysvg: ind,
      countryname: "bordertable.ind",
      purchases: "210",
      statusColor: "primary",
      bgColor: "primary",
      status: "bordertable.active",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
    {
      name: "bordertable.marie_clark",
      desc: "@mclark",
      img: img3,
      contact: "(208) 262-238",
      emailid: "mclark@mail.com",
      countrysvg: spn,
      countryname: "bordertable.spn",
      purchases: "256",
      statusColor: "warning",
      bgColor: "warning",
      status: "bordertable.pending",
      actionadd: add,
      actionedit: edit,
      actionremove: remove,
    },
  ];

  const options4 = [
    { value: `${t('bordertable.no_action')}`, label: `${t('bordertable.no_action')}` },
    { value: `${t('bordertable.status')}`, label: `${t('bordertable.status')}` },
    { value: `${t('accesscontrol.delete')}`, label: `${t('accesscontrol.delete')}` },
  ];

  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header className="card-header border-bottom d-flex justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center mt-3 gap-2">
                <div className="form-group mb-0">
                  <span className="choices iq-custom-select bulk-action" >
                    <ChoicesJs options={options4} className="js-choice" select="one" />
                  </span>
                </div>
                <Button variant="primary" className="d-inline">
                  {t("bordertable.apply")}
                </Button>
              </div>
              <Button variant="primary" className="mt-3">
                {t("bordertable.apply")}
              </Button>
            </Card.Header>

            <div className="custom-table-effect table-responsive  border rounded py-4">
              <Table className="mb-0" id="borderTable" data-toggle="data-table">
                <thead>
                  <tr className="bg-white">
                    <th scope="col">{t("bordertable.profiles")}</th>
                    <th scope="col">{t("bordertable.contact")}</th>
                    <th scope="col">{t("bordertable.email_id")}</th>
                    <th scope="col">{t("bordertable.country")}</th>
                    <th scope="col">{t("bordertable.purchases")}</th>
                    <th scope="col">{t("bordertable.status")}</th>
                    <th scope="col">{t("bordertable.action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {table1.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <Image
                              className="rounded img-fluid avatar-60 me-3"
                              src={item.img}
                              alt=""
                            />
                            <div className="media-support-info">
                              <h6 className="mb-0">{t(item.name)}</h6>
                              <p className="mb-0">{t(item.desc)}</p>
                            </div>
                          </div>
                        </td>
                        <td>{item.contact}</td>
                        <td>{t(item.emailid)}</td>
                        <td>
                          {item.countrysvg}
                          {t(item.countryname)}
                        </td>
                        <td>{item.purchases}</td>
                        <td>
                          <span
                            className={`badge bg-${item.bgColor}${item.prefix !== "" ? '-subtle' : ''} p-2-${item.statusColor}`}
                          >
                            {t(item.status)}
                          </span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <Button
                              className="btn-primary btn-icon btn-sm rounded-pill"
                              to="#"
                              role="button"
                            >
                              <span className="btn-inner">
                                {item.actionadd}
                              </span>
                            </Button>
                            <Button
                              className="btn btn-primary btn-icon btn-sm rounded-pill ms-2"
                              to="#"
                              role="button"
                            >
                              <span className="btn-inner">
                                {item.actionedit}
                              </span>
                            </Button>
                            <Button
                              className="btn btn-primary btn-icon btn-sm rounded-pill ms-2"
                              to="#"
                              role="button"
                            >
                              <span className="btn-inner">
                                {item.actionremove}
                              </span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Borderedtable.displayName = "Borderedtable";
export default Borderedtable;
