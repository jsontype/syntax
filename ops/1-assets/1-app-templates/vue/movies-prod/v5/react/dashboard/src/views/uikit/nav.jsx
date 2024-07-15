import { memo, Fragment } from "react";

// React-bootstrap
import { Nav, Tab, Button } from "react-bootstrap";

// components
import Card from "../../components/bootstrap/card";

const Navs = memo(() => {
  return (
    <Fragment>
      <article id="navs">
        <div className="bd-heading sticky-xl-top align-self-start">
          <Card>
            <Card.Body>
              <h5>Navs</h5>
              <div className="d-flex align-items-center mt-2">
                <Button
                  bsPrefix=" d-flex"
                  href="https://templates.iqonic.design/qompac-ui/pro/documentation/react/navsandtabs"
                  target="_blank"
                >
                  <svg
                    width="20"
                    className="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Card className=" iq-document-card">
          <Tab.Container defaultActiveKey="first">
            <div className="d-flex justify-content-end">
              <Nav
                as="ul"
                className=" nav-tabs nav-tunnel nav-slider"
                data-toggle="slider-tab"
                role="tablist"
              >
                <Nav.Item as="li" role="presentation">
                  <Nav.Link
                    as="button"
                    eventKey="first"
                    className=" d-flex align-items-center"
                    data-bs-toggle="tab"
                    data-bs-target="#content-Navs-prv"
                    type="button"
                    role="tab"
                    aria-controls="output"
                    aria-selected="true"
                  >
                    <svg
                      width="20"
                      className="me-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                        stroke="currentColor"
                      />
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                      <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                    </svg>
                    Preview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" role="presentation">
                  <Nav.Link
                    as="button"
                    eventKey="second"
                    className=" d-flex align-items-center"
                    data-bs-toggle="tab"
                    data-bs-target="#content-Navs-code"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <svg
                      width="20"
                      className="me-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                        stroke="currentColor"
                      />
                      <path
                        d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                        stroke="currentColor"
                      />
                      <mask fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                        />
                      </mask>
                      <path
                        d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                        fill="currentColor"
                        mask="url(#path-3-inside-1)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                        fill="currentColor"
                      />
                      <mask fill="white">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                        />
                      </mask>
                      <path
                        d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                        fill="currentColor"
                        mask="url(#path-6-inside-2)"
                      />
                    </svg>
                    Code
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane
                eventKey="first"
                className=" bd-heading-1 fade show "
                id="content-Navs-prv"
                role="tabpanel"
                aria-labelledby="typo-output"
              >
                <div className="bd-example">
                  <Nav>
                    <Nav.Link className="active" aria-current="page" href="#">
                      Active
                    </Nav.Link>
                    <Nav.Link to="#">Link</Nav.Link>
                    <Nav.Link
                      className="disabled"
                      to="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <Nav>
                      <Nav
                        variant="tabs"
                        className="mb-3"
                        id="nav-tab"
                        role="tablist"
                      >
                        <Nav.Link
                          eventKey="first"
                          variant=" d-flex align-items-center"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Home
                        </Nav.Link>
                        <Nav.Link
                          eventKey="second"
                          variant=""
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Profile
                        </Nav.Link>
                        <Nav.Link
                          eventKey="third"
                          variant=""
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Contact
                        </Nav.Link>
                      </Nav>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane
                        className=" fade show"
                        eventKey="first"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Home tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        className=" fade"
                        id="nav-profile"
                        eventKey="second"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Profile tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        className=" fade"
                        id="nav-contact"
                        eventKey="third"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Contact tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <nav className="tab-bottom-bordered mb-3">
                      <Nav
                        variant="tabs"
                        className="mb-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <Nav.Link
                          eventKey="first"
                          variant=" d-flex align-items-center"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Home
                        </Nav.Link>
                        <Nav.Link
                          eventKey="second"
                          variant=""
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Profile
                        </Nav.Link>
                        <Nav.Link
                          eventKey="third"
                          variant=""
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Contact
                        </Nav.Link>
                      </Nav>
                    </nav>
                    <Tab.Content>
                      <Tab.Pane
                        className=" fade show"
                        eventKey="first"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Home tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        className=" fade"
                        id="nav-profile"
                        eventKey="second"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Profile tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        className=" fade"
                        id="nav-contact"
                        eventKey="third"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Contact tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      data-toggle="slider-tab"
                      role="tablist"
                    >
                      <Nav.Item role="presentation">
                        <Nav.Link
                          eventKey="first"
                          variant=" d-flex align-items-center"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-home1"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item role="presentation">
                        <Nav.Link
                          eventKey="second"
                          variant=" d-flex align-items-center"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-profile1"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Profile
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item role="presentation">
                        <Nav.Link
                          eventKey="third"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-contact1"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Contact
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane
                        eventKey="first"
                        variant=" fade show active"
                        id="pills-home1"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab1"
                      >
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="fade"
                        id="pills-profile1"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab1"
                      >
                        <p>
                          Cosby sweater eu banh mi, qui irure terry richardson
                          ex squid. Aliquip placeat salvia cillum iphone. Seitan
                          aliquip quis cardigan american apparel, butcher
                          voluptate nisi qui.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="third"
                        className=" fade"
                        id="pills-contact1"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab1"
                      >
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      variant="tabs nav-tunnel nav-slider"
                      data-toggle="slider-tab"
                      role="tablist"
                    >
                      <Nav.Item role="presentation">
                        <Nav.Link
                          eventKey="first"
                          className=" d-flex align-items-center"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-home1"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          <svg
                            width="20"
                            className="me-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item role="presentation">
                        <Nav.Link
                          eventKey="second"
                          className=" d-flex align-items-center"
                          data-bs-toggle="tab"
                          data-bs-target="#pills-profile1"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <svg
                            width="20"
                            className="me-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Profile
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane
                        eventKey="first"
                        variant=" fade show active"
                        id="pills-home1"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab1"
                      >
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse. Mustache cliche tempor,
                          williamsburg carles vegan helvetica. Reprehenderit
                          butcher retro keffiyeh dreamcatcher synth.
                        </p>
                        <p>
                          Raw denim you probably haven't heard of them jean
                          shorts Austin. Nesciunt tofu stumptown aliqua, retro
                          synth master cleanse.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="fade"
                        id="pills-profile1"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab1"
                      >
                        <p>
                          Cosby sweater eu banh mi, qui irure terry richardson
                          ex squid. Aliquip placeat salvia cillum iphone. Seitan
                          aliquip quis cardigan american apparel, butcher
                          voluptate nisi qui.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="bd-example">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link className=" active" aria-current="page" to="#">
                        Active
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link to="#">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        className=" disabled"
                        to="#"
                        tabIndex="-1"
                        aria-disabled="true"
                      >
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      className="mb-3 nav-tabs nav-iconly gap-3"
                      role="tablist"
                    >
                      <Nav.Link
                        eventKey="first"
                        data-bs-toggle="tab"
                        data-bs-target="#pro-nav-home"
                        type="button"
                        role="tab"
                        aria-controls="pro-nav-home"
                        aria-selected="true"
                      >
                        <svg
                          className="icon-40"
                          width="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Your Orders
                      </Nav.Link>
                      <Nav.Link
                        eventKey="second"
                        data-bs-toggle="tab"
                        data-bs-target="#pro-nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="pro-nav-profile"
                        aria-selected="false"
                      >
                        <svg
                          className="icon-40"
                          width="40"
                          viewBox="0 0 40 40"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.2194 4.89463C17.8608 2.7788 22.3367 2.81578 25.9439 4.9915C29.5157 7.21153 31.6866 11.1736 31.6664 15.4358C31.5832 19.6699 29.2555 23.65 26.3458 26.7268C24.6664 28.5107 22.7877 30.0881 20.748 31.4267C20.538 31.5482 20.3079 31.6295 20.0691 31.6667C19.8393 31.6569 19.6155 31.589 19.4179 31.4691C16.304 29.4576 13.5722 26.8901 11.3539 23.8899C9.49763 21.3856 8.44304 18.36 8.33331 15.224C8.3309 10.9538 10.5779 7.01046 14.2194 4.89463ZM16.3236 16.9913C16.9361 18.5014 18.3819 19.4864 19.986 19.4864C21.0368 19.494 22.047 19.0731 22.7913 18.3175C23.5357 17.5619 23.9524 16.5344 23.9487 15.464C23.9543 13.8301 22.9924 12.3539 21.5121 11.7246C20.0318 11.0954 18.325 11.4373 17.1888 12.5906C16.0526 13.7439 15.711 15.4812 16.3236 16.9913Z"
                            fill="currentColor"
                          />
                          <ellipse
                            opacity="0.4"
                            cx="20"
                            cy="35"
                            rx="8.33333"
                            ry="1.66667"
                            fill="currentColor"
                          />
                        </svg>
                        Your Address
                      </Nav.Link>
                      <Nav.Link
                        eventKey="third"
                        data-bs-toggle="tab"
                        data-bs-target="#pro-nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="pro-nav-contact"
                        aria-selected="false"
                      >
                        <svg
                          className="icon-40"
                          width="40"
                          viewBox="0 0 40 40"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.6607 13.9585H29.6029C26.3185 13.9643 23.6578 16.5586 23.6518 19.7609C23.6474 22.9705 26.3111 25.5763 29.6029 25.5807H36.6666V26.0906C36.6666 31.6893 33.2726 35 27.5289 35H12.4726C6.72739 35 3.33331 31.6893 3.33331 26.0906V13.8964C3.33331 8.2977 6.72739 5 12.4726 5H27.5229C33.2666 5 36.6607 8.2977 36.6607 13.8964V13.9585ZM11.2326 13.9455H20.6326H20.6385H20.6504C21.3541 13.9427 21.9229 13.3836 21.92 12.6961C21.917 12.01 21.3422 11.4553 20.6385 11.4582H11.2326C10.5333 11.4611 9.96591 12.0143 9.96294 12.6975C9.95998 13.3836 10.5289 13.9427 11.2326 13.9455Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.4"
                            d="M26.729 20.4944C27.0775 22.0798 28.4674 23.1951 30.0543 23.1661H35.4708C36.1311 23.1661 36.6666 22.6193 36.6666 21.9434V17.7242C36.6652 17.0497 36.1311 16.5015 35.4708 16.5H29.9268C28.1217 16.5058 26.6638 18.0041 26.6666 19.8505C26.6666 20.0666 26.6879 20.2827 26.729 20.4944"
                            fill="currentColor"
                          />
                          <ellipse
                            cx="30"
                            cy="19.8333"
                            rx="1.66667"
                            ry="1.66667"
                            fill="currentColor"
                          />
                        </svg>
                        Your Cards
                      </Nav.Link>
                      <Nav.Link
                        eventKey="four"
                        data-bs-toggle="tab"
                        data-bs-target="#pro-nav-demo"
                        type="button"
                        role="tab"
                        aria-controls="pro-nav-contact"
                        aria-selected="false"
                      >
                        <svg
                          className="icon-40"
                          width="40"
                          viewBox="0 0 40 40"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.9947 25.291C12.8063 25.291 6.66632 26.4243 6.66632 30.9577C6.66632 35.4927 12.768 36.666 19.9947 36.666C27.183 36.666 33.323 35.5343 33.323 30.9993C33.323 26.4643 27.223 25.291 19.9947 25.291"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.4"
                            d="M19.9947 20.9728C24.8913 20.9728 28.8147 17.0478 28.8147 12.1528C28.8147 7.25782 24.8913 3.33282 19.9947 3.33282C15.0997 3.33282 11.1747 7.25782 11.1747 12.1528C11.1747 17.0478 15.0997 20.9728 19.9947 20.9728"
                            fill="currentColor"
                          />
                        </svg>
                        Profile
                      </Nav.Link>
                    </Nav>
                    <Tab.Content className="iq-tab-fade-up">
                      <Tab.Pane
                        eventKey="first"
                        className="fade"
                        role="tabpanel"
                        aria-labelledby="pro-nav-home-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Home tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="fade"
                        role="tabpanel"
                        aria-labelledby="pro-nav-profile-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Profile tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="third"
                        className="fade"
                        role="tabpanel"
                        aria-labelledby="pro-nav-contact-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Contact tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="four"
                        className="fade"
                        role="tabpanel"
                        aria-labelledby="pro-nav-demo-tab"
                      >
                        <p>
                          <strong>
                            This is some placeholder content the Contact tab's
                            associated content.
                          </strong>{" "}
                          Clicking another tab will toggle the visibility of
                          this one for the next. The tab JavaScript swaps
                          classes to control the content visibility and styling.
                          You can use it with tabs, pills, and any other{" "}
                          <code>.nav</code>-powered navigation.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="bd-example">
                  <Tab.Container defaultActiveKey="first">
                    <div className="d-flex align-items-start gap-3">
                      <Nav
                        className="flex-column nav-pills nav-iconly gap-3"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <Nav.Link
                          eventKey="first"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-home"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Home
                        </Nav.Link>
                        <Nav.Link
                          eventKey="second"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Profile
                        </Nav.Link>
                        <Nav.Link
                          eventKey="third"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Messages
                        </Nav.Link>
                        <Nav.Link
                          eventKey="four"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          <svg
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.0122 14.8299C10.4077 14.8299 9.10986 13.5799 9.10986 12.0099C9.10986 10.4399 10.4077 9.17993 12.0122 9.17993C13.6167 9.17993 14.8839 10.4399 14.8839 12.0099C14.8839 13.5799 13.6167 14.8299 12.0122 14.8299Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.4"
                              d="M21.2301 14.37C21.036 14.07 20.76 13.77 20.4023 13.58C20.1162 13.44 19.9322 13.21 19.7687 12.94C19.2475 12.08 19.5541 10.95 20.4228 10.44C21.4447 9.87 21.7718 8.6 21.179 7.61L20.4943 6.43C19.9118 5.44 18.6344 5.09 17.6226 5.67C16.7233 6.15 15.5685 5.83 15.0473 4.98C14.8838 4.7 14.7918 4.4 14.8122 4.1C14.8429 3.71 14.7203 3.34 14.5363 3.04C14.1582 2.42 13.4735 2 12.7172 2H11.2763C10.5302 2.02 9.84553 2.42 9.4674 3.04C9.27323 3.34 9.16081 3.71 9.18125 4.1C9.20169 4.4 9.10972 4.7 8.9462 4.98C8.425 5.83 7.27019 6.15 6.38109 5.67C5.35913 5.09 4.09191 5.44 3.49917 6.43L2.81446 7.61C2.23194 8.6 2.55897 9.87 3.57071 10.44C4.43937 10.95 4.74596 12.08 4.23498 12.94C4.06125 13.21 3.87729 13.44 3.59115 13.58C3.24368 13.77 2.93709 14.07 2.77358 14.37C2.39546 14.99 2.4159 15.77 2.79402 16.42L3.49917 17.62C3.87729 18.26 4.58245 18.66 5.31825 18.66C5.66572 18.66 6.0745 18.56 6.40153 18.36C6.65702 18.19 6.96361 18.13 7.30085 18.13C8.31259 18.13 9.16081 18.96 9.18125 19.95C9.18125 21.1 10.1215 22 11.3069 22H12.6968C13.872 22 14.8122 21.1 14.8122 19.95C14.8429 18.96 15.6911 18.13 16.7029 18.13C17.0299 18.13 17.3365 18.19 17.6022 18.36C17.9292 18.56 18.3278 18.66 18.6855 18.66C19.411 18.66 20.1162 18.26 20.4943 17.62L21.2097 16.42C21.5776 15.75 21.6083 14.99 21.2301 14.37Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Settings
                        </Nav.Link>
                      </Nav>
                      <Tab.Content className="iq-tab-fade-up">
                        <Tab.Pane
                          eventKey="first"
                          className="fade"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <p>
                            <strong>
                              This is some placeholder content the Contact tab's
                              associated content.
                            </strong>{" "}
                            Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. You can use it with tabs, pills, and any
                            other <code>.nav</code>-powered navigation.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="second"
                          className="fade"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <p>
                            <strong>
                              This is some placeholder content the Contact tab's
                              associated content.
                            </strong>{" "}
                            Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. You can use it with tabs, pills, and any
                            other <code>.nav</code>-powered navigation.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="third"
                          className="fade"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <p>
                            <strong>
                              This is some placeholder content the Contact tab's
                              associated content.
                            </strong>{" "}
                            Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. You can use it with tabs, pills, and any
                            other <code>.nav</code>-powered navigation.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="four"
                          className="fade"
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          <p>
                            <strong>
                              This is some placeholder content the Contact tab's
                              associated content.
                            </strong>{" "}
                            Clicking another tab will toggle the visibility of
                            this one for the next. The tab JavaScript swaps
                            classes to control the content visibility and
                            styling. You can use it with tabs, pills, and any
                            other <code>.nav</code>-powered navigation.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Tab.Container>
                </div>
              </Tab.Pane>
              <Tab.Pane
                eventKey="second"
                className="bd-heading-1 fade show"
                id="content-Navs-code"
                role="tabpanel"
                aria-labelledby="typo-output"
              >
                <div className="section-block">
                  <pre className="language-markup">
                    <code className="language-markup">
                      {`<div className="bd-example">
    <Nav className="">
        <Nav.Link className="active" aria-current="page" href="#">Active</Nav.Link>
        <Nav.Link to="#">Link</Nav.Link>
        <Nav.Link to="#">Link</Nav.Link>
        <Nav.Link className="disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Nav.Link>
    </Nav>
</div>

<div className="bd-example">
    <Tab.Container defaultActiveKey="first">   
    <Nav>
        <Nav variant="tabs" className="mb-3" id="nav-tab" role="tablist">
            <Nav.Link eventKey="first" variant=" d-flex align-items-center" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</Nav.Link>
            <Nav.Link eventKey="second" variant="" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</Nav.Link>
            <Nav.Link eventKey="third" variant="" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</Nav.Link>
        </Nav>
    </Nav>
    <Tab.Content>
        <Tab.Pane className=" fade show" eventKey="first" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </Tab.Pane>
        <Tab.Pane className=" fade" id="nav-profile" eventKey="second" role="tabpanel" aria-labelledby="nav-profile-tab">
            <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </Tab.Pane>
        <Tab.Pane className=" fade" id="nav-contact" eventKey="third" role="tabpanel" aria-labelledby="nav-contact-tab">
            <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
</div>

<div className="bd-example">
<Tab.Container defaultActiveKey="first"> 
    <Nav variant="pills" data-toggle="slider-tab" role="tablist">
        <Nav.Item   role="presentation">
            <Nav.Link eventKey="first"  variant="  d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="home" aria-selected="true">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item  role="presentation">
            <Nav.Link eventKey="second"  variant=" d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item  role="presentation">
            <Nav.Link eventKey="third" id="contact-tab" data-bs-toggle="tab" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane  eventKey="first" variant=" fade show active" id="pills-home1" role="tabpanel"
            aria-labelledby="pills-home-tab1">
            <p>
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                dreamcatcher synth.
            </p>
            <p>
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                stumptown aliqua, retro synth master cleanse.
            </p>
        </Tab.Pane>
        <Tab.Pane eventKey="second" className="fade" id="pills-profile1" role="tabpanel"
            aria-labelledby="pills-profile-tab1">
            <p>
                Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
                salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
                voluptate nisi qui.
            </p>
        </Tab.Pane>
        <Tab.Pane eventKey="third"  className=" fade" id="pills-contact1" role="tabpanel"
            aria-labelledby="pills-contact-tab1">
            <p>
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                dreamcatcher synth.
            </p>
            <p>
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                stumptown aliqua, retro synth master cleanse.
            </p>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
</div>

<div className="bd-example">
    <Nav variant="pills">
        <Nav.Item>
            <Nav.Link className=" active" aria-current="page" to="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="" to="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="" to="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className=" disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Nav.Link>
        </Nav.Item>
    </Nav>
</div>
<div className="bd-example">
    <Tab.Container defaultActiveKey="first">
        <Nav className="mb-3 nav-tabs nav-iconly gap-3"  role="tablist">
            <Nav.Link eventKey="first" data-bs-toggle="tab" data-bs-target="#pro-nav-home" type="button" role="tab" aria-controls="pro-nav-home" aria-selected="true">
                <svg className="icon-40" width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M16.6203 22H7.3797C4.68923 22 2.5 19.8311 2.5 17.1646V11.8354C2.5 9.16894 4.68923 7 7.3797 7H16.6203C19.3108 7 21.5 9.16894 21.5 11.8354V17.1646C21.5 19.8311 19.3108 22 16.6203 22Z" fill="currentColor"></path>
                    <path d="M15.7551 10C15.344 10 15.0103 9.67634 15.0103 9.27754V6.35689C15.0103 4.75111 13.6635 3.44491 12.0089 3.44491C11.2472 3.44491 10.4477 3.7416 9.87861 4.28778C9.30854 4.83588 8.99272 5.56508 8.98974 6.34341V9.27754C8.98974 9.67634 8.65604 10 8.24487 10C7.8337 10 7.5 9.67634 7.5 9.27754V6.35689C7.50497 5.17303 7.97771 4.08067 8.82984 3.26285C9.68098 2.44311 10.7814 2.03179 12.0119 2C14.4849 2 16.5 3.95449 16.5 6.35689V9.27754C16.5 9.67634 16.1663 10 15.7551 10Z" fill="currentColor"></path>
                </svg>
                Your Orders
            </Nav.Link>
            <Nav.Link eventKey="second" data-bs-toggle="tab" data-bs-target="#pro-nav-profile" type="button" role="tab" aria-controls="pro-nav-profile" aria-selected="false">
                <svg className="icon-40" width="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2194 4.89463C17.8608 2.7788 22.3367 2.81578 25.9439 4.9915C29.5157 7.21153 31.6866 11.1736 31.6664 15.4358C31.5832 19.6699 29.2555 23.65 26.3458 26.7268C24.6664 28.5107 22.7877 30.0881 20.748 31.4267C20.538 31.5482 20.3079 31.6295 20.0691 31.6667C19.8393 31.6569 19.6155 31.589 19.4179 31.4691C16.304 29.4576 13.5722 26.8901 11.3539 23.8899C9.49763 21.3856 8.44304 18.36 8.33331 15.224C8.3309 10.9538 10.5779 7.01046 14.2194 4.89463ZM16.3236 16.9913C16.9361 18.5014 18.3819 19.4864 19.986 19.4864C21.0368 19.494 22.047 19.0731 22.7913 18.3175C23.5357 17.5619 23.9524 16.5344 23.9487 15.464C23.9543 13.8301 22.9924 12.3539 21.5121 11.7246C20.0318 11.0954 18.325 11.4373 17.1888 12.5906C16.0526 13.7439 15.711 15.4812 16.3236 16.9913Z" fill="currentColor"/>
                    <ellipse opacity="0.4" cx="20" cy="35" rx="8.33333" ry="1.66667" fill="currentColor"/>
                </svg>
                Your Address
            </Nav.Link>
            <Nav.Link eventKey="third" data-bs-toggle="tab" data-bs-target="#pro-nav-contact" type="button" role="tab" aria-controls="pro-nav-contact" aria-selected="false">
                <svg className="icon-40" width="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M36.6607 13.9585H29.6029C26.3185 13.9643 23.6578 16.5586 23.6518 19.7609C23.6474 22.9705 26.3111 25.5763 29.6029 25.5807H36.6666V26.0906C36.6666 31.6893 33.2726 35 27.5289 35H12.4726C6.72739 35 3.33331 31.6893 3.33331 26.0906V13.8964C3.33331 8.2977 6.72739 5 12.4726 5H27.5229C33.2666 5 36.6607 8.2977 36.6607 13.8964V13.9585ZM11.2326 13.9455H20.6326H20.6385H20.6504C21.3541 13.9427 21.9229 13.3836 21.92 12.6961C21.917 12.01 21.3422 11.4553 20.6385 11.4582H11.2326C10.5333 11.4611 9.96591 12.0143 9.96294 12.6975C9.95998 13.3836 10.5289 13.9427 11.2326 13.9455Z" fill="currentColor"/>
                    <path opacity="0.4" d="M26.729 20.4944C27.0775 22.0798 28.4674 23.1951 30.0543 23.1661H35.4708C36.1311 23.1661 36.6666 22.6193 36.6666 21.9434V17.7242C36.6652 17.0497 36.1311 16.5015 35.4708 16.5H29.9268C28.1217 16.5058 26.6638 18.0041 26.6666 19.8505C26.6666 20.0666 26.6879 20.2827 26.729 20.4944" fill="currentColor"/>
                    <ellipse cx="30" cy="19.8333" rx="1.66667" ry="1.66667" fill="currentColor"/>
                </svg>
                Your Cards
            </Nav.Link>
            <Nav.Link eventKey="four" data-bs-toggle="tab" data-bs-target="#pro-nav-demo" type="button" role="tab" aria-controls="pro-nav-contact" aria-selected="false">
                <svg className="icon-40" width="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9947 25.291C12.8063 25.291 6.66632 26.4243 6.66632 30.9577C6.66632 35.4927 12.768 36.666 19.9947 36.666C27.183 36.666 33.323 35.5343 33.323 30.9993C33.323 26.4643 27.223 25.291 19.9947 25.291" fill="currentColor"/>
                    <path opacity="0.4" d="M19.9947 20.9728C24.8913 20.9728 28.8147 17.0478 28.8147 12.1528C28.8147 7.25782 24.8913 3.33282 19.9947 3.33282C15.0997 3.33282 11.1747 7.25782 11.1747 12.1528C11.1747 17.0478 15.0997 20.9728 19.9947 20.9728" fill="currentColor"/>
                </svg>
                Profile
            </Nav.Link>
        </Nav>
        <Tab.Content className="iq-tab-fade-up">
            <Tab.Pane eventKey="first" className="fade" role="tabpanel" aria-labelledby="pro-nav-home-tab">
                <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="fade" role="tabpanel" aria-labelledby="pro-nav-profile-tab">
                <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="fade" role="tabpanel" aria-labelledby="pro-nav-contact-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="four" className="fade" role="tabpanel" aria-labelledby="pro-nav-demo-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
        </Tab.Content>                      
    </Tab.Container>
</div>
<div className="bd-example">
    <Tab.Container defaultActiveKey="first">
    <div className="d-flex align-items-start gap-3">
        <Nav className="flex-column nav-pills nav-iconly gap-3" role="tablist" aria-orientation="vertical">
            <Nav.Link eventKey="first" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V20.7732C14.8562 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill="currentColor"></path>
                </svg>
                Home
            </Nav.Link>
            <Nav.Link eventKey="second" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.997 15.1746C7.684 15.1746 4 15.8546 4 18.5746C4 21.2956 7.661 21.9996 11.997 21.9996C16.31 21.9996 19.994 21.3206 19.994 18.5996C19.994 15.8786 16.334 15.1746 11.997 15.1746Z" fill="currentColor"></path>
                    <path opacity="0.4" d="M11.9971 12.5838C14.9351 12.5838 17.2891 10.2288 17.2891 7.29176C17.2891 4.35476 14.9351 1.99976 11.9971 1.99976C9.06008 1.99976 6.70508 4.35476 6.70508 7.29176C6.70508 10.2288 9.06008 12.5838 11.9971 12.5838Z" fill="currentColor"></path>
                </svg>
                Profile
            </Nav.Link>
            <Nav.Link eventKey="third" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M12.02 2C6.21 2 2 6.74 2 12C2 13.68 2.49 15.41 3.35 16.99C3.51 17.25 3.53 17.58 3.42 17.89L2.75 20.13C2.6 20.67 3.06 21.07 3.57 20.91L5.59 20.31C6.14 20.13 6.57 20.36 7.081 20.67C8.541 21.53 10.36 21.97 12 21.97C16.96 21.97 22 18.14 22 11.97C22 6.65 17.7 2 12.02 2Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.9807 13.2901C11.2707 13.2801 10.7007 12.7101 10.7007 12.0001C10.7007 11.3001 11.2807 10.7201 11.9807 10.7301C12.6907 10.7301 13.2607 11.3001 13.2607 12.0101C13.2607 12.7101 12.6907 13.2901 11.9807 13.2901ZM7.37033 13.2901C6.67033 13.2901 6.09033 12.7101 6.09033 12.0101C6.09033 11.3001 6.66033 10.7301 7.37033 10.7301C8.08033 10.7301 8.65033 11.3001 8.65033 12.0101C8.65033 12.7101 8.08033 13.2801 7.37033 13.2901ZM15.3105 12.0101C15.3105 12.7101 15.8805 13.2901 16.5905 13.2901C17.3005 13.2901 17.8705 12.7101 17.8705 12.0101C17.8705 11.3001 17.3005 10.7301 16.5905 10.7301C15.8805 10.7301 15.3105 11.3001 15.3105 12.0101Z" fill="currentColor"></path>
                </svg>
                Messages
            </Nav.Link>
            <Nav.Link eventKey="four" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <svg className="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0122 14.8299C10.4077 14.8299 9.10986 13.5799 9.10986 12.0099C9.10986 10.4399 10.4077 9.17993 12.0122 9.17993C13.6167 9.17993 14.8839 10.4399 14.8839 12.0099C14.8839 13.5799 13.6167 14.8299 12.0122 14.8299Z" fill="currentColor"></path>
                    <path opacity="0.4" d="M21.2301 14.37C21.036 14.07 20.76 13.77 20.4023 13.58C20.1162 13.44 19.9322 13.21 19.7687 12.94C19.2475 12.08 19.5541 10.95 20.4228 10.44C21.4447 9.87 21.7718 8.6 21.179 7.61L20.4943 6.43C19.9118 5.44 18.6344 5.09 17.6226 5.67C16.7233 6.15 15.5685 5.83 15.0473 4.98C14.8838 4.7 14.7918 4.4 14.8122 4.1C14.8429 3.71 14.7203 3.34 14.5363 3.04C14.1582 2.42 13.4735 2 12.7172 2H11.2763C10.5302 2.02 9.84553 2.42 9.4674 3.04C9.27323 3.34 9.16081 3.71 9.18125 4.1C9.20169 4.4 9.10972 4.7 8.9462 4.98C8.425 5.83 7.27019 6.15 6.38109 5.67C5.35913 5.09 4.09191 5.44 3.49917 6.43L2.81446 7.61C2.23194 8.6 2.55897 9.87 3.57071 10.44C4.43937 10.95 4.74596 12.08 4.23498 12.94C4.06125 13.21 3.87729 13.44 3.59115 13.58C3.24368 13.77 2.93709 14.07 2.77358 14.37C2.39546 14.99 2.4159 15.77 2.79402 16.42L3.49917 17.62C3.87729 18.26 4.58245 18.66 5.31825 18.66C5.66572 18.66 6.0745 18.56 6.40153 18.36C6.65702 18.19 6.96361 18.13 7.30085 18.13C8.31259 18.13 9.16081 18.96 9.18125 19.95C9.18125 21.1 10.1215 22 11.3069 22H12.6968C13.872 22 14.8122 21.1 14.8122 19.95C14.8429 18.96 15.6911 18.13 16.7029 18.13C17.0299 18.13 17.3365 18.19 17.6022 18.36C17.9292 18.56 18.3278 18.66 18.6855 18.66C19.411 18.66 20.1162 18.26 20.4943 17.62L21.2097 16.42C21.5776 15.75 21.6083 14.99 21.2301 14.37Z" fill="currentColor"></path>
                </svg>
                Settings
            </Nav.Link>
        </Nav>
        <Tab.Content className="iq-tab-fade-up" >
            <Tab.Pane  eventKey="first" className="fade" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="fade" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="four" className="fade" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </Tab.Pane>
        </Tab.Content>
    </div>
    </Tab.Container>
    
</div>
`}
                    </code>
                  </pre>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </article>
    </Fragment>
  );
});

Navs.displayName = "Navs";
export default Navs;
