import React, { useState, memo, Fragment } from "react";

//React-bootstrap
import { Offcanvas } from "react-bootstrap";

//React-router
import { Link } from "react-router-dom";

//Img
import image1 from "/assets/images/brands/08.png";
import image2 from "/assets/images/brands/09.png";
import image3 from "/assets/images/brands/10.png";
import image4 from "/assets/images/brands/11.png";
import image5 from "/assets/images/brands/13.png";
import image6 from "/assets/images/brands/12.png";

const ShareOffcanvas = memo((props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Fragment>
            {props.share === "99" && (
                <Link to="#" className="" onClick={handleShow}>
                    <span className="ms-1">
                        <svg width="18" className="me-1 text-primary" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z"
                            ></path>
                        </svg>{" "}
                        {props.share} Share
                    </span>
                </Link>
            )}
            {props.share === "2" && (
                <Link
                    type="button"
                    to="#"
                    className="btn btn-soft-primary btn-icon rounded-pill"
                    onClick={handleShow}
                >
                    <span className="btn-inner">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M5.50052 15C6.37518 14.9974 7.21675 14.6653 7.85752 14.07L14.1175 17.647C13.9078 18.4666 14.0002 19.3343 14.378 20.0913C14.7557 20.8483 15.3935 21.4439 16.1745 21.7692C16.9555 22.0944 17.8275 22.1274 18.6309 21.8623C19.4343 21.5971 20.1153 21.0515 20.5493 20.3252C20.9832 19.599 21.1411 18.7408 20.994 17.9076C20.8469 17.0745 20.4047 16.3222 19.7483 15.7885C19.0918 15.2548 18.2652 14.9753 17.4195 15.0013C16.5739 15.0273 15.7659 15.357 15.1435 15.93L8.88352 12.353C8.94952 12.103 8.98552 11.844 8.99152 11.585L15.1415 8.06996C15.7337 8.60874 16.4932 8.92747 17.2925 8.97268C18.0918 9.01789 18.8823 8.78684 19.5315 8.31828C20.1806 7.84972 20.6489 7.17217 20.8577 6.39929C21.0666 5.6264 21.0032 4.80522 20.6784 4.0735C20.3535 3.34178 19.7869 2.74404 19.0735 2.38056C18.3602 2.01708 17.5436 1.90998 16.7607 2.07723C15.9777 2.24447 15.2761 2.67588 14.7736 3.29909C14.271 3.92229 13.9981 4.69937 14.0005 5.49996C14.0045 5.78796 14.0435 6.07496 14.1175 6.35296L8.43352 9.59997C8.1039 9.09003 7.64729 8.67461 7.10854 8.39454C6.5698 8.11446 5.96746 7.97937 5.3607 8.00251C4.75395 8.02566 4.16365 8.20627 3.64781 8.52658C3.13197 8.84689 2.70834 9.29589 2.41853 9.82946C2.12872 10.363 1.98271 10.9628 1.99484 11.5699C2.00697 12.177 2.17683 12.7704 2.48772 13.292C2.79861 13.8136 3.23984 14.2453 3.76807 14.5447C4.29629 14.8442 4.89333 15.0011 5.50052 15Z"
                                fill="#3A57E8"
                            ></path>
                        </svg>
                    </span>
                </Link>
            )}
            {props.share === "3" && (
                <Link
                    type="button"
                    to="#"
                    className="btn btn-primary-subtle btn-icon btn-sm rounded-pill"
                    onClick={handleShow}
                >
                    <span className="btn-inner">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            className="icon-24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M5.50052 15C6.37518 14.9974 7.21675 14.6653 7.85752 14.07L14.1175 17.647C13.9078 18.4666 14.0002 19.3343 14.378 20.0913C14.7557 20.8483 15.3935 21.4439 16.1745 21.7692C16.9555 22.0944 17.8275 22.1274 18.6309 21.8623C19.4343 21.5971 20.1153 21.0515 20.5493 20.3252C20.9832 19.599 21.1411 18.7408 20.994 17.9076C20.8469 17.0745 20.4047 16.3222 19.7483 15.7885C19.0918 15.2548 18.2652 14.9753 17.4195 15.0013C16.5739 15.0273 15.7659 15.357 15.1435 15.93L8.88352 12.353C8.94952 12.103 8.98552 11.844 8.99152 11.585L15.1415 8.06996C15.7337 8.60874 16.4932 8.92747 17.2925 8.97268C18.0918 9.01789 18.8823 8.78684 19.5315 8.31828C20.1806 7.84972 20.6489 7.17217 20.8577 6.39929C21.0666 5.6264 21.0032 4.80522 20.6784 4.0735C20.3535 3.34178 19.7869 2.74404 19.0735 2.38056C18.3602 2.01708 17.5436 1.90998 16.7607 2.07723C15.9777 2.24447 15.2761 2.67588 14.7736 3.29909C14.271 3.92229 13.9981 4.69937 14.0005 5.49996C14.0045 5.78796 14.0435 6.07496 14.1175 6.35296L8.43352 9.59997C8.1039 9.09003 7.64729 8.67461 7.10854 8.39454C6.5698 8.11446 5.96746 7.97937 5.3607 8.00251C4.75395 8.02566 4.16365 8.20627 3.64781 8.52658C3.13197 8.84689 2.70834 9.29589 2.41853 9.82946C2.12872 10.363 1.98271 10.9628 1.99484 11.5699C2.00697 12.177 2.17683 12.7704 2.48772 13.292C2.79861 13.8136 3.23984 14.2453 3.76807 14.5447C4.29629 14.8442 4.89333 15.0011 5.50052 15Z"
                                fill="#3A57E8"
                            ></path>
                        </svg>
                    </span>
                </Link>
            )}
            {props.share === true && (
                <Link
                    className="btn btn-primary-subtle btn-icon rounded-pill"
                    onClick={handleShow}
                >
                    <span className="btn-inner">
                        <svg
                            className="icon-24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M5.50052 15C6.37518 14.9974 7.21675 14.6653 7.85752 14.07L14.1175 17.647C13.9078 18.4666 14.0002 19.3343 14.378 20.0913C14.7557 20.8483 15.3935 21.4439 16.1745 21.7692C16.9555 22.0944 17.8275 22.1274 18.6309 21.8623C19.4343 21.5971 20.1153 21.0515 20.5493 20.3252C20.9832 19.599 21.1411 18.7408 20.994 17.9076C20.8469 17.0745 20.4047 16.3222 19.7483 15.7885C19.0918 15.2548 18.2652 14.9753 17.4195 15.0013C16.5739 15.0273 15.7659 15.357 15.1435 15.93L8.88352 12.353C8.94952 12.103 8.98552 11.844 8.99152 11.585L15.1415 8.06996C15.7337 8.60874 16.4932 8.92747 17.2925 8.97268C18.0918 9.01789 18.8823 8.78684 19.5315 8.31828C20.1806 7.84972 20.6489 7.17217 20.8577 6.39929C21.0666 5.6264 21.0032 4.80522 20.6784 4.0735C20.3535 3.34178 19.7869 2.74404 19.0735 2.38056C18.3602 2.01708 17.5436 1.90998 16.7607 2.07723C15.9777 2.24447 15.2761 2.67588 14.7736 3.29909C14.271 3.92229 13.9981 4.69937 14.0005 5.49996C14.0045 5.78796 14.0435 6.07496 14.1175 6.35296L8.43352 9.59997C8.1039 9.09003 7.64729 8.67461 7.10854 8.39454C6.5698 8.11446 5.96746 7.97937 5.3607 8.00251C4.75395 8.02566 4.16365 8.20627 3.64781 8.52658C3.13197 8.84689 2.70834 9.29589 2.41853 9.82946C2.12872 10.363 1.98271 10.9628 1.99484 11.5699C2.00697 12.177 2.17683 12.7704 2.48772 13.292C2.79861 13.8136 3.23984 14.2453 3.76807 14.5447C4.29629 14.8442 4.89333 15.0011 5.50052 15Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>
                </Link>
            )}
            <Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Share</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="text-center me-3 mb-3">
                            <img
                                src={image1}
                                className="img-fluid rounded mb-2"
                                alt=""
                                loading="lazy"
                            />
                            <h6>Facebook</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img
                                src={image2}
                                className="img-fluid rounded mb-2"
                                alt=""
                                loading="lazy"
                            />
                            <h6>Twitter</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img
                                src={image3}
                                className="img-fluid rounded mb-2"
                                alt=""
                                loading="lazy"
                            />
                            <h6>Instagram</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img
                                src={image4}
                                className="img-fluid rounded mb-2"
                                alt=""
                                loading="lazy"
                            />
                            <h6>Google Plus</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img
                                src={image5}
                                className="img-fluid rounded mb-2"
                                alt=""
                                loading="lazy"
                            />
                            <h6>In</h6>
                        </div>
                        <div className="text-center me-3 mb-3">
                            <img src={image6} className="img-fluid rounded mb-2" alt="" />
                            <h6>YouTube</h6>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    );
});
ShareOffcanvas.displayName = "ShareOffcanvas";
export default ShareOffcanvas;
