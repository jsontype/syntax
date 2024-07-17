import { Fragment, React, useState } from "react";
import { Col, Row, Card, Button, Modal, Container } from "react-bootstrap";

const Modals = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
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
  const [fullscreen] = useState(true);
  const [show10, setShow10] = useState(false);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);
  const [show11, setShow11] = useState(false);
  const handleClose11 = () => setShow11(false);
  const handleShow11 = () => setShow11(true);
  const [show12, setShow12] = useState(false);
  const handleClose12 = () => setShow12(false);
  const handleShow12 = () => setShow12(true);
  const [show13, setShow13] = useState(false);
  const handleClose13 = () => setShow13(false);
  const handleShow13 = () => setShow13(true);
  const [show14, setShow14] = useState(false);
  const handleClose14 = () => setShow14(false);
  const handleShow14 = () => setShow14(true);

  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Modal components</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                Below is a <em>static</em> modal example (meaning its{" "}
                <code>position</code> and <code>display</code> have been
                overridden). Included are the modal header, modal body (required
                for <code>padding</code>), and modal footer (optional). We ask
                that you include modal headers with dismiss actions whenever
                possible, or provide another explicit dismiss action.
              </p>
              <Button variant="primary" className="mt-2" onClick={handleShow}>
                Launch demo modal
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Modal Scrolling </h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                When modals become too long for the user’s viewport or device,
                they scroll independent of the page itself. Try the demo below
                to see what we mean.
              </p>
              <Button variant="primary" className="mt-2" onClick={handleShow2}>
                Launch demo modal
              </Button>
              <Modal scrollable={true} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose2}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Optional sizes</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                Modals have three optional sizes, available via modifier classes
                to be placed on a .modal-dialog. These sizes kick in at certain
                breakpoints to avoid horizontal scrollbars on narrower
                viewports.
              </p>
              <Button variant="primary" onClick={handleShow3} className="mt-2">
                Extra large modal
              </Button>{" "}
              <Modal size="xl" show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body text goes here.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose3}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="primary" onClick={handleShow4} className="mt-2">
                Large modal
              </Button>{" "}
              <Modal size="lg" show={show4} onHide={handleClose4}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body text goes here.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose4}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="primary" className="mt-2" onClick={handleShow5}>
                Small modal
              </Button>{" "}
              <Modal size="sm" show={show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body text goes here.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose5}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Scrolling long content</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                When modals become too long for the user’s viewport or device,
                they scroll independent of the page itself. Try the demo below
                to see what we mean.
              </p>
              <Button variant="primary primary" className="mt-2" onClick={handleShow2}>
                Launch demo modal
              </Button>
              <Modal scrollable={true} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose2}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Vertically centered</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                Add{" "}
                <code className="highlighter-rouge">
                  .modal-dialog-centered
                </code>{" "}
                to <code className="highlighter-rouge">.modal-dialog</code> to
                vertically center the modal.
              </p>
              <Button className="mt-2" variant="primary" onClick={handleShow6}>
                Launch demo modal
              </Button>
              &nbsp;
              <Modal centered show={show6} onHide={handleClose6}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose6}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose6}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="primary" className="mt-2" onClick={handleShow7}>
                Vertically centered scrollable modal
              </Button>{" "}
              <Modal
                centered
                scrollable={true}
                show={show7}
                onHide={handleClose7}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose7}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose7}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Using the grid</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-1">
                Utilize the Bootstrap grid system within a modal by nesting{" "}
                <code>.container-fluid</code> within the{" "}
                <code>.modal-body</code>. Then, use the normal grid system
                classes as you would anywhere else.
              </p>
              <Button variant="primary" className="mt-2" onClick={handleShow8}>
                Launch demo modal
              </Button>
              <Modal show={show8} onHide={handleClose8}>
                <Modal.Header closeButton>
                  <Modal.Title>Grids in modals</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                  <Container>
                    <Row>
                      <Col xs={12} md={8}>
                        .col-xs-12 .col-md-8
                      </Col>
                      <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                      </Col>
                      <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                      </Col>
                      <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                      </Col>
                    </Row>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose8}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose8}>
                    Save changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Fullscreen Modal</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.</p>
              <div>
                <Button
                  variant="primary"
                  className="mb-2"
                  onClick={handleShow9}
                >
                  Full screen
                </Button>{" "}
                <Modal
                  show={show9}
                  fullscreen={fullscreen}
                  onHide={handleClose9}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose9}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className="mb-2" onClick={handleShow10}>
                  Full screen below sm
                </Button>{" "}
                <Modal show={show10} onHide={() => setShow10(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen below sm</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose10}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className="mb-2" onClick={handleShow11}>
                  Full screen below md
                </Button>{" "}
                <Modal show={show11} onHide={() => setShow11(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen below md</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose11}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className="mb-2" onClick={handleShow12}>
                  Full screen below lg
                </Button>{" "}
                <Modal show={show12} onHide={() => setShow12(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen below lg</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose12}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className="mb-2" onClick={handleShow13}>
                  Full screen below xl
                </Button>{" "}
                <Modal show={show13} onHide={() => setShow13(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen below xl</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose13}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button className="mb-2" onClick={handleShow14}>
                  Full screen below xxl
                </Button>{" "}
                <Modal show={show14} onHide={() => setShow14(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Full screen below xxl</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose14}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Modals;
