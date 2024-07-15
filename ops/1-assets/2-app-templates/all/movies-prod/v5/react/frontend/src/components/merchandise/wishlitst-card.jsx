import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const WishlistCard = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <div>
            <Link to="#" className="remove">
              <i className="far fa-trash-alt"></i>
            </Link>
          </div>
        </td>
        <td className="product-name">
          <Link to="/product-detail">
            <img src={props.thumbnail} className="img-fluid" loading="lazy" />
          </Link>
          <Link className="product-title ms-4" to="/product-detail">
            {props.product_name}
          </Link>
        </td>
        <td className="product-price">
          <span className="text-secondary">
            <del>{props.price}</del> {props.final_price}
          </span>
        </td>
        <td className="product-stock-status">
          <span className="wishlist-in-stock">{props.stockStatus}</span>
        </td>
        <td className="product-add-to-cart">
          <Link className="iq-button btn btn-hover" to="/product-detail">
            {" "}
            {t("shop.view_product")}{" "}
          </Link>
        </td>
      </tr>
    </Fragment>
  );
});

WishlistCard.displayName = "WishlistCard";
export default WishlistCard;
