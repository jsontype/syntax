import React, { Fragment } from 'react'

//react bootstrap
import { Col, Container, Form, Row } from 'react-bootstrap'

//router
import Link from 'next/link';

//components
import Logo from '../../components/logo'

const Login = () => {

  return (
    <Fragment>
      <main className='main-content'>
        <div className='vh-100' style={{ backgroundImage: "url(/assets/images/pages/01.webp)", backgroundSize: 'cover', backgroundRepeat: "no-repeat", position: 'relative', minHeight: '500px' }}>
          <Container>
            <Row className='justify-content-center align-items-center height-self-center vh-100'>
              <Col lg="5" md="12" className='align-self-center'>
                <div className='user-login-card bg-body'>
                  <div className='text-center'>
                    <Logo />
                  </div>
                  <Form action='post'>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-white fw-500 mb-2'>Username or Email Address</Form.Label>
                      <Form.Control type='text' className='rounded-0' required />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                      <Form.Label className='text-white fw-500 mb-2'>PassWord</Form.Label>
                      <Form.Control type='password' className='rounded-0' required />
                    </Form.Group>
                    <Form.Group className="text-end mb-3">
                      <Link href="/auth/lost-password" className="text-primary fw-semibold fst-italic">Forgot
                        Password?</Link>
                    </Form.Group>
                    <Form.Label className='list-group-item d-flex align-items-center mb-3 font-size-14 text-white fw-500'>
                      <Form.Check.Input type='checkbox' className='m-0 me-2' />
                      Remember Me
                    </Form.Label>
                    <div className="full-button">
                      <div className="iq-button">
                        <Link href="#" className="btn text-uppercase position-relative">
                          <span className="button-text">log in</span>
                          <i className="fa-solid fa-play"></i>
                        </Link>
                      </div>
                    </div>
                  </Form>
                  <p className="my-4 text-center fw-500 text-white">New to Streamit? <Link href="/auth/sign-up" className="text-primary ms-1">Register</Link></p>
                  <div className="seperator d-flex justify-content-center align-items-center">
                    <span className="line"></span>
                    <span className="mx-2">OR</span>
                    <span className="line"></span>
                  </div>
                  <ul className="p-0 pt-4 m-0 list-unstyled widget_social_media text-center">
                    <li className="">
                      <Link href="https:/www.google.com/" className="position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FBC02D"></path>
                          <path d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z" fill="#E53935"></path>
                          <path d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.6057 17.5456 13.3577 18.0001 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z" fill="#4CAF50"></path>
                          <path d="M21.8055 10.0415L21.7975 10H21H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1565C0"></path>
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="https:/facebook.com/" className="position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                          <path d="M12.9998 2.16675C7.01659 2.16675 2.1665 7.01683 2.1665 13.0001C2.1665 18.9833 7.01659 23.8334 12.9998 23.8334C18.9831 23.8334 23.8332 18.9833 23.8332 13.0001C23.8332 7.01683 18.9831 2.16675 12.9998 2.16675Z" fill="url(#paint0_linear_770_72)"></path>
                          <path d="M14.4663 15.8713H17.27L17.7104 13.0232H14.4663V11.4665C14.4663 10.2835 14.8531 9.23425 15.9597 9.23425H17.738V6.74908C17.4255 6.70683 16.7646 6.61475 15.5161 6.61475C12.9085 6.61475 11.3799 7.99166 11.3799 11.129V13.0237H8.69922V15.8718H11.3794V23.7C11.9102 23.7791 12.4481 23.8332 13.0001 23.8332C13.4989 23.8332 13.9859 23.7877 14.4663 23.7227V15.8713Z" fill="white"></path>
                          <defs>
                            <linearGradient id="paint0_linear_770_72" x1="5.41271" y1="5.41296" x2="21.9996" y2="21.9999" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#2AA4F4"></stop>
                              <stop offset="1" stopColor="#007AD9"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link href="https:/twitter.com/" className="position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 6.2145C20.3385 6.5075 19.627 6.703 18.8765 6.7955C19.6395 6.3425 20.2265 5.62 20.502 4.7665C19.788 5.185 18.997 5.4925 18.1555 5.6545C17.4835 4.942 16.525 4.5 15.463 4.5C13.423 4.5 11.7695 6.139 11.7695 8.16C11.7695 8.446 11.803 8.7245 11.866 8.995C8.79704 8.841 6.07504 7.382 4.25404 5.168C3.93404 5.709 3.75404 6.3425 3.75404 7.011C3.75404 8.2815 4.40454 9.4 5.39654 10.059C4.79104 10.0405 4.22104 9.872 3.72203 9.602C3.72203 9.613 3.72203 9.6295 3.72203 9.645C3.72203 11.4205 4.99554 12.899 6.68354 13.2355C6.37504 13.32 6.04904 13.367 5.71304 13.367C5.47454 13.367 5.24204 13.34 5.01704 13.2995C5.48704 14.7505 6.85054 15.811 8.46604 15.8425C7.20204 16.8225 5.61004 17.4095 3.87904 17.4095C3.58004 17.4095 3.28754 17.3925 2.99854 17.3575C4.63404 18.393 6.57604 19 8.66054 19C15.453 19 19.169 13.422 19.169 8.583C19.169 8.4245 19.164 8.2665 19.1565 8.1105C19.8815 7.5985 20.5065 6.9525 21 6.2145Z" fill="#1BB8FF"></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
};

Login.layout = "Blank";
export default Login;
