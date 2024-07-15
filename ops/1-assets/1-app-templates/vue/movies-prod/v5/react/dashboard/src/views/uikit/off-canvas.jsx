import { useState, memo, Fragment } from "react";

// React-bootstrap
import { Button, Offcanvas, Row, Col, Dropdown } from "react-bootstrap";

// components
import Card from "../../components/bootstrap/card";

const OffCanvass = memo(() => {
  //offcanves
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const [show9, setShow9] = useState(false);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);

  return (
    <Fragment>
      <article id="off-canvas">
        <Row>
          <Col lg="6">
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Offcanvas components</h4>
                </div>
              </div>
              <div className="card-body">
                <p>
                  Use the buttons below to show and hide an offcanvas element
                  via JavaScript that toggles the .show class on an element with
                  the .offcanvas class.
                </p>
                <ul className="list-inline p-0 m-0 mb-2">
                  <li>
                    <code>.offcanvas</code> hides content (default)
                  </li>
                  <li>
                    <code>.offcanvas.show</code> shows content
                  </li>
                </ul>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="me-2 mb-2"
                >
                  Link with href
                </Button>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="me-2 mb-2"
                >
                  Button with data-bs-target
                </Button>

                <Offcanvas show={show} onHide={handleClose} placement={"start"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary mt-2"
                        id="dropdown-basic"
                      >
                        Dropdown Button
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Offcanvas.Body>
                </Offcanvas>

                <Offcanvas
                  show={show1}
                  onHide={handleClose1}
                  placement={"bottom"}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary mt-2"
                        id="dropdown-basic"
                      >
                        Dropdown Button
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Card>
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Offcanvas Link Or Dropdown</h4>
                </div>
              </div>
              <div className="card-body">
                <p>
                  Scrolling the element is disabled when an offcanvas and its
                  backdrop are visible. Use the data-bs-scroll attribute to
                  toggle scrolling and data-bs-backdrop to toggle the backdrop.
                </p>

                <Button
                  variant="primary"
                  onClick={handleShow2}
                  className="me-2 mb-2"
                >
                  Enable body scrolling
                </Button>

                <Button
                  variant="primary"
                  onClick={handleShow8}
                  className="me-2 mb-2 backdrop-false"
                >
                  Enable backdrop (default)
                </Button>

                <Button
                  variant="primary me-2 mb-2"
                  onClick={handleShow9}
                  className="me-2 mb-2"
                >
                  Enable both scrolling & backdrop
                </Button>

                <Offcanvas
                  show={show2}
                  onHide={handleClose2}
                  placement={"start"}
                  scroll={true}
                  backdrop={false}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Colored with Scrolling</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
                <Offcanvas
                  show={show9}
                  onHide={handleClose9}
                  placement={"start"}
                  scroll={true}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Colored with Scrolling</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Offcanvas Placement</h4>
                </div>
              </div>
              <div className="card-body">
                <p>
                  There’s no default placement for offcanvas components, so you
                  must add one of the modifier classes below;
                </p>
                <ul className="list-inline p-0">
                  <li>
                    <code>.offcanvas-start</code> places offcanvas on the left
                    of the viewport (shown above)
                  </li>
                  <li>
                    <code>.offcanvas.end</code> places offcanvas on the right of
                    the viewport
                  </li>
                  <li>
                    <code>.offcanvas.top</code> places offcanvas on the top of
                    the viewport
                  </li>
                  <li>
                    <code>.offcanvas.bottom</code> places offcanvas on the
                    bottom of the viewport
                  </li>
                </ul>
                <Button
                  variant="primary"
                  onClick={handleShow5}
                  className="me-2 mb-2"
                >
                  Toggle top offcanvas
                </Button>
                <Offcanvas show={show5} onHide={handleClose5} placement={"top"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas top</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
                <Button
                  variant="primary"
                  onClick={handleShow6}
                  className="me-2 mb-2"
                >
                  Toggle end offcanvas
                </Button>
                <Offcanvas show={show6} onHide={handleClose6} placement={"end"}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas end</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
                <Button
                  variant="primary me-2 mb-2"
                  onClick={handleShow7}
                  className="me-2 mb-2"
                >
                  Toggle bottom offcanvas
                </Button>
                <Offcanvas
                  show={show7}
                  onHide={handleClose7}
                  placement={"bottom"}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas bottom</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
                <Button
                  variant="primary me-2 mb-2"
                  onClick={handleShow8}
                  className="me-2 mb-2"
                >
                  Toggle start offcanvas
                </Button>

                <Offcanvas
                  show={show8}
                  onHide={handleClose8}
                  placement={"start"}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas start</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Try scrolling the rest of the page to see this option in action.
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Card>
          </Col>
        </Row>
      </article>
    </Fragment>
  );
});

OffCanvass.displayName = "OffCanvass";
export default OffCanvass;
