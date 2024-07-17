import { memo, Fragment } from "react";

// React-bootstrap
import { ListGroup, Row, Col } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";
// components
import Card from "../../components/bootstrap/card";

const ListGroups = memo(() => {
  return (
    <Fragment>
      <Row>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">List group</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </p>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Disabled items</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add <code>.disabled</code> to a <code>.list-group-item</code> to
                make it <em>appear</em> disabled. Note that some elements with{" "}
                <code>.disabled</code> will also require custom JavaScript to
                fully disable their click events (e.g., links).
              </p>
              <ListGroup>
                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Flush</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add the <code>flush</code> variant to remove outer borders and
                rounded corners to render list group items edge-to-edge in a
                parent container <code>such as a Card</code>.
              </p>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Contextual classes</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>s
                to style them with a stateful background and color.
              </p>
              <ListGroup>
                <ListGroup.Item variant="">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  A simple primary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  A simple secondary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  A simple success list group item
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                  A simple danger list group item
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  A simple warning list group item
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                  A simple info list group item
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                  A simple light list group item
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  A simple dark list group item
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">With badges</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add badges to any list group item to show unread counts,
                activity, and more with the help of some{" "}
                <Link href="/docs/5.0/utilities/flex/">utilities</Link>.
              </p>
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <span className="badge bg-primary badge-pill">14</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <span className="badge bg-success badge-pill">2</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span className="badge bg-primary badge-pill">1</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">With badges</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add badges to any list group item to show unread counts,
                activity, and more with the help of some{" "}
                <Link href="/docs/5.0/utilities/flex/">utilities</Link>.
              </p>
              <ListGroup>
                <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center iq-bg-primary">
                  Cras justo odio
                  <span className="badge bg-primary badge-pill">14</span>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item d-flex justify-content-between align-items-center iq-bg-success">
                  Dapibus ac facilisis in
                  <span className="badge bg-success badge-pill">2</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span className="badge bg-primary badge-pill">1</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="12" lg="6">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">List Active</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add <code> .active </code> to a <code> .list-group-item </code>{" "}
                to indicate the current active selection.
              </p>
              <ListGroup>
                <ListGroup.Item active>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Links and buttons</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to
                create <em>actionable</em> list group items with hover,
                disabled, and active states by adding{" "}
                <code>.list-group-item-action</code>. We separate these
                pseudo-classes to ensure list groups made of non-interactive
                elements (like <code>&lt;li&gt;</code>s or{" "}
                <code>&lt;div&gt;</code>s) don’t provide a click or tap
                affordance.
              </p>

              <p>
                Be sure to{" "}
                <strong>
                  not use the standard <code>.btn</code> classes here
                </strong>
                .
              </p>
              <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action active href="#link1">
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  Porta ac consectetur ac
                </ListGroup.Item>
                <ListGroup.Item action disabled>
                  Vestibulum at eros
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Horizontal</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add <code>.list-group-horizontal</code> to change the layout of
                list group items from vertical to horizontal across all
                breakpoints. Alternatively, choose a responsive variant{" "}
                <code>.list-group-horizontal</code> to make a list group
                horizontal starting at that breakpoint’s <code>min-width</code>.
                Currently{" "}
                <strong>
                  horizontal list groups cannot be combined with flush list
                  groups.
                </strong>
              </p>
              <p>
                <strong>ProTip:</strong> Want equal-width list group items when
                horizontal? Add <code>.flex-fill</code> to each list group item.
              </p>
              <div>
                {["sm"].map((breakpoint, idx) => (
                  <ListGroup horizontal={breakpoint} key={idx}>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus </ListGroup.Item>
                  </ListGroup>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Contextual classes Action</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Use contextual variants on <code>&lt;ListGroup.Item&gt;</code>s
                to style them with a stateful background and color.
              </p>
              <ListGroup>
                <ListGroup.Item variant="">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item variant="primary">
                  A simple primary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  A simple secondary list group item
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  A simple success list group item
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                  A simple danger list group item
                </ListGroup.Item>
                <ListGroup.Item variant="warning">
                  A simple warning list group item
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                  A simple info list group item
                </ListGroup.Item>
                <ListGroup.Item variant="light">
                  A simple light list group item
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  A simple dark list group item
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Custom content</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Add nearly any HTML within, even for linked list groups like
                the one below, with the help of{" "}
                <Link href="/docs/4.3/utilities/flex/">
                  flexbox utilities
                </Link>
                .
              </p>
              <ListGroup>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action active"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 text-white">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small>Donec id elit non mi porta.</small>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </Link>
                <Link to="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <small className="text-muted">Donec id elit non mi porta.</small>
                </Link>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

ListGroups.displayName = "ListGroups";
export default ListGroups;
