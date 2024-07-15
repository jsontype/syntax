import React, { Fragment, memo } from "react";

//components
import { Button, Col, Modal, Row } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import Counter from "../counter";
import RatingStar from "../rating-star";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../StaticData/data";

const ProductModal = memo((props) => {
  const { t } = useTranslation();
  const showSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.handleclose}
        bsPrefix=" modal custom-modal"
        size="lg"
        tabIndex="-1"
        centered="true"
        contentClassName="rounded-0 border-0 woosq-popup"
        dialogClassName="position-relative"
      >
        <Modal.Body className="p-0">
          <Button
            variant=""
            className="btn-close position-absolute end-0"
            aria-label="close"
            onClick={props.handleClose}
          ></Button>
          <Row className="align-items-center">
            <Col md="6">
              <img
                src={generateImgPath("/assets/images/shop/product/01.webp")}
                alt="shop-img"
                className="object-cover"
              />
            </Col>
            <Col md="6">
              <div className="entry-summary p-md-4">
                <h3>{t("shop.bag_pack")}</h3>
                <div className="review">
                  <RatingStar count="5" count1="0" starColor="text-warning" />
                </div>
                <h4 className="price text-white mt-3">
                  <del className="text-body fw-normal me-1">$48.00</del>
                  $28.00
                </h4>
                <p>{t("shop.desc1")}</p>
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                  <li>
                    <Counter />
                  </li>
                  <li>
                    <div className="iq-button">
                      <Link
                        to="#"
                        className="btn btn-sm text-uppercase position-relative cart-btn"
                        onClick={showSwal}
                      >
                        <span className="button-text">
                          {t("shop.add_to_cart")}
                        </span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">
                    {t("shop.sku")}{" "}:
                  </span>
                  <span>{t("shop.bag_pack")}</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">
                    {t("shop.category")}
                  </span>
                  <span className="text-primary">
                    {t("shop.uptight_birds")}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">
                    {t("shop.tags")}
                  </span>
                  <span className="text-primary">{t("shop.costume")},</span>
                  <span className="text-primary">{t("shop.lighting")}</span>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
});

ProductModal.displayName = "ProductModal";
export default ProductModal;
