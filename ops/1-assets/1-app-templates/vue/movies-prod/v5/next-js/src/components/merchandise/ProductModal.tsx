import React, { Fragment, memo } from 'react'

//components
import { Button, Col, Modal, Row } from "react-bootstrap";

//react-router-dom
import Link from "next/link";;

//components
import Counter from "../counter"
import RatingStar from "../rating-star";

//sweetalert2
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

interface Props {
  show: boolean,
  // handleClose: Function
  handleClose : () => void;
  // handleClose?:React.MouseEventHandler<HTMLButtonElement>;
}

const ProductModal = memo((props: Props) => {
  const showSwal = () => {
    Swal.fire({
      title: 'Added!',
      text: 'Your item has been added to the cart.',
      icon: 'success',
      confirmButtonText: 'Ok',
      background: "#141314",
      color: "#ffffff"
    })
  }
  return (
    <Fragment>
      <Modal
        id="woosq-popup"
        show={props.show} onHide={props.handleClose}
        size="lg"
        tabIndex="-1"
        centered={true}
        contentClassName="rounded-0 border-0"
        dialogClassName="position-relative"
      >
        <Modal.Body className="p-0">
          <Button variant="" className="btn-close position-absolute end-0" aria-label="close" onClick={props.handleClose}></Button>
          <Row className="align-items-center">
            <Col md="6">
              <img src="/assets/images/shop/product/01.webp" alt="shop-img" className="object-cover" />
            </Col>
            <Col md="6">
              <div className="entry-summary p-md-4">
                <h3>Bag Pack</h3>
                <div className="review">
                  <RatingStar count="5" count1="0" starColor="text-warning" />
                </div>
                <h4 className="price text-white mt-3">
                  <del className="text-body fw-normal me-1">$48.00</del>
                  $28.00
                </h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                  <li><Counter /></li>
                  <li>
                    <div className="iq-button">
                      <Link href="#" className="btn btn-sm text-uppercase position-relative cart-btn" onClick={showSwal}>
                        <span className="button-text">add to cart</span>
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">SKU :</span>
                  <span>Bag Pack</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">Category :</span>
                  <span className="text-primary">Uptight Birds</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-semibold text-white">Tags :</span>
                  <span className="text-primary">Costume,</span>
                  <span className="text-primary">Lighting</span>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Fragment>
  )
})

ProductModal.displayName = 'ProductModal'
export default ProductModal