import { memo, useState } from "react";
import { Link } from "react-router-dom";

//components
import RatingStar from "../rating-star";
import ProductModal from "./ProductModal";

//sweetalert2
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

// the hook
import { useTranslation } from "react-i18next";

const ProductCard = memo((props) => {
  const { t } = useTranslation();
  const showSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_wishlist")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };
  const cartSwal = () => {
    Swal.fire({
      title: `${t("sweetalert.added")}`,
      text: `${t("sweetalert.added_to_cart")}`,
      icon: "success",
      confirmButtonText: `${t("sweetalert.ok_btn")}`,
      background: "#141314",
      color: "#ffffff",
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isSale = props.is_sale;
  const isNew = props.is_new;
  return (
    <>
      <div className="product-block">
        {isSale ? (
          <span className="onsale bg-primary">{t("shop.sale!")}</span>
        ) : isNew ? (
          <span className="onsale bg-primary">{t("shop.new!")}</span>
        ) : (
          ""
        )}

        <div className="image-wrap">
          <Link to="/product-detail">
            <div className="product-image">
              <img
                src={props.thumbnail}
                className="img-fluid w-100"
                alt=""
                loading="lazy"
              />
            </div>
          </Link>
          <div className="buttons-holder">
            <ul className="list-unstyled m-0 p-0">
              <li>
                <Link className="sq-btn" to="#" onClick={handleShow}>
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
              <li>
                <div className="on-first-load">
                  <div className="add-button">
                    <Link to="#" className="add_to_wishlist" onClick={showSwal}>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="#"
                  className="added_to_cart d-flex align-items-center "
                  onClick={cartSwal}
                >
                  <i className="fa-solid fa-basket-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
          <h5 className="product__title">
            <Link to="/product-detail" className="title-link">
              {props.product_name}
            </Link>
          </h5>
          <div className="price-detail">
            <span className="price">
              <del>{props.price}</del>
              {props.final_price}
            </span>
          </div>
          <div className="container-rating">
            <div className="star-rating text-primary">
              <RatingStar
                count={props.rating}
                count1={props.count1}
                starColor="text-warning"
              />
            </div>
          </div>
        </div>
      </div>

      <ProductModal show={show} handleClose={handleClose} />
    </>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;
