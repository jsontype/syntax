import { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";

// next link
import Link from "next/link";

// next image
import Image from "next/image"

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

const ContactPage = memo(() => {
  useBreadcrumb('Contact us')
  return (
    <Fragment>
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="8">
              <div className="title-box">
                <h2>Create With Us</h2>
                <p className="mb-0">
                  To learn more about how Streamit can help you, contact us.
                </p>
              </div>
              <Form className="mb-5 mb-lg-0">
                <Row>
                  <Col md="6" className="mb-4 mb-lg-5">
                    <input
                      type="text"
                      className="form-control font-size-14"
                      placeholder="Your Name*"
                      required
                    />
                  </Col>
                  <Col md="6" className="mb-4 mb-lg-5">
                    <input
                      type="text"
                      className="form-control font-size-14"
                      placeholder="Last Name*"
                      required
                    />
                  </Col>
                  <Col md="6" className="mb-4 mb-lg-5">
                    <input
                      type="tel"
                      className="form-control font-size-14"
                      placeholder="Phone Number*"
                      required
                    />
                  </Col>
                  <Col md="6" className="mb-4 mb-lg-5">
                    <input
                      type="email"
                      className="form-control font-size-14"
                      placeholder="Your Email*"
                      required
                    />
                  </Col>
                  <Col md="12" className="mb-4 mb-lg-5">
                    <textarea
                      className="form-control font-size-14"
                      cols={40}
                      rows={10}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </Col>
                  <Col>
                    <div className="iq-button">
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg="1" className="d-none d-lg-block"></Col>
            <Col lg="3">
              <div className="border-bottom pb-4 mb-4">
                <h5>Come See Us</h5>
                <span>
                  Townhouse Agency Consoling. LLC 50 ean 2 See, 41A Xo New York
                  NY 20159
                </span>
              </div>
              <div className="border-bottom pb-4 mb-4">
                <h5>Get In Touch</h5>
                <Link href="" className="text-primary">support@streamit.com</Link>
                <p className="mb-0">(144) 1234 4567</p>
              </div>
              <div>
                <h5>Follow Us</h5>
                <ul className="p-0 m-0 mt-4 list-unstyled widget_social_media">
                  <li className="">
                    <Link
                      href="https://www.facebook.com/"
                      className="position-relative"
                    >
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="https://twitter.com/"
                      className="position-relative"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://github.com/" className="position-relative">
                      <i className="fab fa-github"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="https://www.instagram.com/"
                      className="position-relative"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="map">
        <Container fluid className="p-0">
          <iframe
            loading="lazy"
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902543.2003194243!2d-118.04220880485131!3d36.56083290513502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80be29b9f4abb783%3A0x4757dc6be1305318!2sInyo%20National%20Forest!5e0!3m2!1sen!2sin!4v1576668158879!5m2!1sen!2sin"
            height="600"
          ></iframe>
        </Container>
      </div>
      <div className="section-padding">
        <Container>
          <Row className="row">
            <Col lg="10" >
              <div className="title-box">
                <h3 className="fw-500">To Learn More About How Streamit Can Help You, Contact Us. We'd Be Happy To Take On The Challenge!</h3>
              </div>
            </Col>
            <Col lg="2" className="d-none d-lg-block"></Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <div className="contact-box d-flex gap-3 rounded mb-3 mb-lg-0">
                <Image src="/assets/images/pages/box-pattern.webp" width={50} height={30} className="img-fluid position-absolute top-0 end-0" alt="pattern" />
                <div className="icon-wrapper rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 17" fill="none">
                    <path d="M4.22501 8.70833C4.86668 7.55 6.10001 6.86667 6.81668 5.84167C7.57501 4.76667 7.15001 2.75833 5.00001 2.75833C3.59168 2.75833 2.90001 3.825 2.60835 4.70833L0.450012 3.8C1.04168 2.025 2.65001 0.5 4.99168 0.5C6.95001 0.5 8.29168 1.39167 8.97501 2.50833C9.55835 3.46667 9.90001 5.25833 9.00001 6.59167C8.00001 8.06667 7.04168 8.51667 6.52501 9.46667C6.31668 9.85 6.23335 10.1 6.23335 11.3333H3.82501C3.81668 10.6833 3.71668 9.625 4.22501 8.70833ZM6.66668 14.6667C6.66668 15.5833 5.91668 16.3333 5.00001 16.3333C4.08335 16.3333 3.33335 15.5833 3.33335 14.6667C3.33335 13.75 4.08335 13 5.00001 13C5.91668 13 6.66668 13.75 6.66668 14.6667Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div style={{zIndex: '1'}}>
                  <h6 className="font-size-18 fw-500 mb-4">For General Enquiries</h6>
                  <p className="mb-1 font-size-14">Call On: <span className="text-primary">(144) 1234 4567</span>
                  </p>
                  <p className="mb-0">Mail: <Link href="mailto:info@medyapim.com" className="text-white fw-500">info@enquiries.com</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="contact-box d-flex gap-3 rounded mb-3 mb-lg-0">
                <Image src="/assets/images/pages/box-pattern.webp" width={50} height={30} className="img-fluid position-absolute top-0 end-0" alt="pattern" />
                <div className="icon-wrapper rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 0.5C3.85833 0.5 0.5 3.85833 0.5 8V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H5.5V8.83333H2.16667V8C2.16667 4.775 4.775 2.16667 8 2.16667C11.225 2.16667 13.8333 4.775 13.8333 8V8.83333H10.5V15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V8C15.5 3.85833 12.1417 0.5 8 0.5ZM3.83333 10.5V13.8333H2.16667V10.5H3.83333ZM13.8333 13.8333H12.1667V10.5H13.8333V13.8333Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div style={{zIndex: '1'}}>
                  <h6 className="font-size-18 fw-500 mb-4">For user support</h6>
                  <p className="mb-1 font-size-14">Call On: <span className="text-primary">(144) 4321 4567</span>
                  </p>
                  <p className="mb-0">Mail: <Link href="mailto:info@medyapim.com" className="text-white fw-500">support@enquiries.com</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="contact-box d-flex gap-3 rounded">
                <Image src="/assets/images/pages/box-pattern.webp" width={50} height={30} className="img-fluid position-absolute top-0 end-0" alt="pattern" />
                <div className="icon-wrapper rounded-circle text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.8416 8.50829L9.48329 1.14996C9.17496 0.841626 8.74996 0.666626 8.30829 0.666626H2.33329C1.41663 0.666626 0.666626 1.41663 0.666626 2.33329V8.30829C0.666626 8.74996 0.841626 9.17496 1.15829 9.48329L8.51663 16.8416C9.16663 17.4916 10.225 17.4916 10.875 16.8416L16.85 10.8666C17.5 10.2166 17.5 9.16663 16.8416 8.50829ZM9.69163 15.6666L2.33329 8.30829V2.33329H8.30829L15.6666 9.69163L9.69163 15.6666Z" fill="white"></path>
                    <path d="M4.41663 5.66663C5.10698 5.66663 5.66663 5.10698 5.66663 4.41663C5.66663 3.72627 5.10698 3.16663 4.41663 3.16663C3.72627 3.16663 3.16663 3.72627 3.16663 4.41663C3.16663 5.10698 3.72627 5.66663 4.41663 5.66663Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div style={{zIndex: '1'}}>
                  <h6 className="font-size-18 fw-500 mb-4">For sales Support</h6>
                  <p className="mb-1 font-size-14">Call On: <span className="text-primary">(144) 1234 1234</span>
                  </p>
                  <p className="mb-0">Mail: <Link href="mailto:info@medyapim.com" className="text-white fw-500">user@enquiries.com</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

ContactPage.displayName = "ContactPage";
export default ContactPage;
