import React, { Fragment, memo, useRef } from "react";

// React-bootstrap
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
//Components
import Card from "../../../components/bootstrap/card";

import useDataTable from "../../../hooks/useDatatable";

// the hook
import { useTranslation } from "react-i18next";

export const generatePath = (path) => {
  return window.origin + import.meta.env.VITE_URL + path;
};

const tableData = [
  {
    Name: "Airi Satou",
    position: "Accountant	",
    office: "Tokyo",
    age: "33",
    start_Date: "2008/11/28",
    salary: "$162,700",
  },
  {
    Name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)	",
    office: "London",
    age: "47",
    start_Date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    Name: "Omen Ashton Cox",
    position: "Junior Technical Author	",
    office: "San Francisco",
    age: "66",
    start_Date: "2009/01/12",
    salary: "$86,000",
  },
  {
    Name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    start_Date: "2012/10/13",
    salary: "$132,000",
  },
  {
    Name: "Brenden Wagner",
    position: "Software Engineer	",
    office: "San Francisco",
    age: "28",
    start_Date: "2011/06/07",
    salary: "$206,850",
  },
  {
    Name: "Brielle Williamson	",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    start_Date: "2012/12/02",
    salary: "$372,000",
  },
  {
    Name: "Bruno Nash	",
    position: "Software Engineer",
    office: "London",
    age: "38",
    start_Date: "2011/05/03",
    salary: "$163,500",
  },
  {
    Name: "Caesar Vance	",
    position: "Pre-Sales Support",
    office: "New York",
    age: "21",
    start_Date: "2011/12/12",
    salary: "$106,450",
  },
  {
    Name: "Cara Stevens	",
    position: "Sales Assistant",
    office: "New York",
    age: "46",
    start_Date: "2011/12/06",
    salary: "$145,600",
  },
  {
    Name: "Cedric Kelly	",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    start_Date: "2012/03/29",
    salary: "$433,060",
  },
  {
    Name: "Charde Marshall	",
    position: "Regional Director",
    office: "San Francisco",
    age: "36",
    start_Date: "2008/10/16",
    salary: "$470,600",
  },
  {
    Name: "Colleen Hurst	",
    position: "Javascript Developer",
    office: "San Francisco",
    age: "39",
    start_Date: "2009/09/15",
    salary: "$205,500",
  },
  {
    Name: "Dai Rios ",
    position: "Personnel Lead",
    office: "Edinburgh",
    age: "35",
    start_Date: "2012/09/26",
    salary: "$217,500",
  },
  {
    Name: "Donna Snider	",
    position: "Customer Support",
    office: "New York",
    age: "27",
    start_Date: "2011/01/25",
    salary: "$112,000",
  },
  {
    Name: "Doris Wilder	",
    position: "Sales Assistant",
    office: "Sydney",
    age: "23",
    start_Date: "2010/09/20",
    salary: "$85,600",
  },
  {
    Name: "Finn Camacho	",
    position: "Support Engineer",
    office: "San Francisco",
    age: "47",
    start_Date: "2009/07/07",
    salary: "$87,500",
  },
  {
    Name: "Fiona Green	",
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: "48",
    start_Date: "2010/03/11",
    salary: "$850,000",
  },
  {
    Name: "Garrett Winters	",
    position: "Accountant",
    office: "Tokyo",
    age: "63",
    start_Date: "2011/07/25",
    salary: "$170,750",
  },
  {
    Name: "Gavin Cortez	",
    position: "Team Leader",
    office: "San Francisco",
    age: "22",
    start_Date: "2008/10/26",
    salary: "$235,500",
  },
  {
    Name: "Gavin Joyce	",
    position: "Developer",
    office: "Edinburgh",
    age: "42",
    start_Date: "2010/12/22",
    salary: "$92,575",
  },
  {
    Name: "Gloria Little	",
    position: "Systems Administrator",
    office: "New York",
    age: "59",
    start_Date: "2009/04/10",
    salary: "$237,500",
  },
  {
    Name: "Haley Kennedy	",
    position: "Senior Marketing Designer",
    office: "London",
    age: "43",
    start_Date: "2012/12/18",
    salary: "$313,500",
  },
  {
    Name: "Hermione Butler	",
    position: "Regional Director",
    office: "London",
    age: "47",
    start_Date: "2011/03/21",
    salary: "$356,250",
  },
  {
    Name: "Herrod Chandler	",
    position: "Sales Assistant",
    office: "San Francisco",
    age: "59",
    start_Date: "2012/08/06",
    salary: "$137,500",
  },
  {
    Name: "Hope Fuentes	",
    position: "Secretary",
    office: "San Francisco",
    age: "41",
    start_Date: "2010/02/12",
    salary: "$109,850",
  },
  {
    Name: "Howard Hatfield	",
    position: "Office Manager",
    office: "San Francisco",
    age: "51",
    start_Date: "2008/12/16",
    salary: "$164,500",
  },
  {
    Name: "Jackson Bradshaw	",
    position: "Director",
    office: "New York",
    age: "65",
    start_Date: "2008/09/26",
    salary: "$645,750",
  },
  {
    Name: "Jena Gaines	",
    position: "Office Manager",
    office: "London",
    age: "30",
    start_Date: "2008/12/19",
    salary: "$90,560",
  },
  {
    Name: "Jenette Caldwell	",
    position: "Development Lead",
    office: "New York",
    age: "30",
    start_Date: "2011/09/03",
    salary: "$345,000",
  },
  {
    Name: "jennifer Acosta	",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    age: "43",
    start_Date: "2013/02/01	",
    salary: "$75,650",
  },
];
const columns = [
  { data: "Name", title: "Name" },
  { data: "position", title: "Position" },
  { data: "office", title: "Office" },
  { data: "age", title: "Age" },
  { data: "start_Date", title: "Start Date" },
  { data: "salary", title: "Salary" },
];

const Datatable = memo(() => {
  const { t } = useTranslation();
  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });

  const columnTableRef = useRef(null);
  useDataTable({
    tableRef: columnTableRef,
    columns: columns,
    data: tableData,
    isColumnHidden: true,
    isColumnHiddenClass: ".col-toggle-vis",
  });

  const inputTableRef = useRef(null);
  useDataTable({
    tableRef: inputTableRef,
    columns: columns,
    data: tableData,
    isFilterColumn: true,
  });

  const langTableRef = useRef(null);
  useDataTable({
    tableRef: langTableRef,
    columns: columns,
    data: tableData,
    isMultilang: true,
  });

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card className="table-responsive border rounded ">
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">
                  {t("Datatable.bootstrap_datatable")}
                </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("Datatable.images_bootstrap")}{" "}
                <code>{t("Datatable.img_fluid")}</code>.{" "}
                <code>{t("Datatable.max_width;")}</code> {t("Datatable.and")}{" "}
                <code>{t("Datatable.height_auto")}</code>{" "}
                {t("Datatable.parent_element")}
              </p>
              <div className="table-responsive border rounded py-4">
                <table
                  id="datatable"
                  ref={tableRef}
                  className="table table-striped"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("Datatable.column_hidden")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and
                <code>height: auto;</code> are applied to the image so that it scales with the parent element.
              </p>
              <div className="mb-3">
                {t("Datatable.toggle_column")}:
                {columns.map((col, index) => (
                  <React.Fragment key={`${index}-hidden-col-table`}>
                    <Link
                      className="col-toggle-vis btn btn-outline-primary mb-2"
                      data-column={index}
                    >
                      {col.title}
                    </Link>
                    {index !== columns.length - 1 && (
                      <span className="px-2">-</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="table-responsive border rounded py-4">
                <table
                  id="datatable1"
                  ref={columnTableRef}
                  className="table table-striped"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("Datatable.input_search")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>.
                <code>max-width: 100%;</code> and
                <code>height: auto;</code> are applied to the image so that it scales with the parent element.
              </p>
              <div className="table-responsive border rounded py-4">
                <table
                  id="datatable2"
                  ref={inputTableRef}
                  className="table table-striped"
                >
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">{t("Datatable.multi_language")}</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                {t("Datatable.images_bootstrap")}{" "}
                <code>{t("Datatable.img_fluid")}</code>.{" "}
                <code>{t("Datatable.max_width")}</code> {t("Datatable.and")}{" "}
                <code>{t("Datatable.height_auto")}</code>{" "}
                {t("Datatable.parent_element")}
              </p>
              <select id="langSelector" className="form-control mb-3">
                <option
                  value="german"
                  id="german"
                  data-path={generatePath(
                    "/public/assets/vendor/language/german.json"
                  )}
                >
                  german
                </option>
                <option
                  value="french"
                  id="french"
                  data-path={generatePath(
                    "/public/assets/vendor/language/french.json"
                  )}
                >
                  french
                </option>
                <option
                  value="hindi"
                  id="hindi"
                  data-path={generatePath(
                    "/public/assets/vendor/language/hindi.json"
                  )}
                >
                  hindi
                </option>
                <option
                  value="japanase"
                  id="japanase"
                  data-path={generatePath(
                    "/public/assets/vendor/language/japanese.json"
                  )}
                >
                  japanese
                </option>
                <option
                  value="eng"
                  id="english"
                  data-path={generatePath(
                    "/public/assets/vendor/language/english.json"
                  )}
                >
                  english
                </option>
              </select>
              <div className="table-responsive border rounded py-4">
                <table
                  id="multi-language-datatable"
                  ref={langTableRef}
                  className="table table-striped"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Datatable.displayName = "Datatable";
export default Datatable;
