import React, { Fragment } from "react";
import { Col, Row, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginations = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Pagination Examples</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                In addition, as pages likely have more than one such navigation
                section, it’s advisable to provide a descriptive{" "}
                <code>aria-label</code> for the <code>&lt;nav&gt;</code> to
                reflect its purpose. For example, if the pagination component is
                used to navigate between a set of search results, an appropriate
                label could be <code>aria-label="Search results pages"</code>.
              </p>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Disabled and active states</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Pagination links are customizable for different circumstances.
                Use <code>.disabled</code> for links that appear un-clickable
                and <code>.active</code> to indicate the current page.
              </p>
              <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable
               the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t
               account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled
               links and use custom JavaScript to fully disable their functionality.</p>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" to="#">
                      2{/* <span className="">(current)</span> */}
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <p>
                You can optionally swap out active or disabled anchors for{" "}
                <code>&lt;span&gt;</code>, or omit the anchor in the case of the
                prev/next arrows, to remove click functionality and prevent
                keyboard focus while retaining intended styles.
              </p>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">
                      2{/* <span>(current)</span> */}
                    </span>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Pagination With Color</h4>
              </div>
            </Card.Header>
            <div className="card-body">
              <p>
                In addition, as pages likely have more than one such navigation
                section, it’s advisable to provide a descriptive{" "}
                <code>aria-label</code> for the <code>&lt;nav&gt;</code> to
                reflect its purpose. For example, if the pagination component is
                used to navigate between a set of search results, an appropriate
                label could be <code>aria-label="Search results pages"</code>.
              </p>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-primary bg-primary text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-success bg-success text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0 ">
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link
                      className="page-link border-info bg-info text-white"
                      to="#"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Working with icons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Looking to use an icon or symbol in place of text for some
                pagination links? Be sure to provide proper screen reader
                support with <code>aria</code> attributes.
              </p>
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Pagination Sizing</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Fancy larger or smaller pagination? Add{" "}
                <code>.pagination-lg</code> or <code>.pagination-sm</code> for
                additional sizes.
              </p>
              <nav aria-label="...">
                <ul className="pagination pagination-lg">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">
                      1{/* <span className="sr-only">(current)</span> */}
                    </span>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">
                      1{/* <span className="sr-only">(current)</span> */}
                    </span>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="...">
                <ul className="pagination pagination-sm">
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">
                      1{/* <span className="sr-only">(current)</span> */}
                    </span>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Alignment</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Change the alignment of pagination components with{" "}
                <Link to="/docs/4.3/utilities/flex/">flexbox utilities</Link>.
              </p>
              <h6>left</h6>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <h6 className="text-center">Center</h6>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
              <h6 className="text-end">Right</h6>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Paginations;
