import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";

const ProductCart = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <tr className="cart-form__cart-item cart_item">
        <td className="product-name" data-title="Product">
          <div className="product-thumbnail">
            <Link to="/product-detail">
              <img
                width="300"
                height="400"
                src={props.thumbnail}
                alt="image"
                loading="lazy"
              />
            </Link>
            <Link to="/product-detail" className="cart_item_name">
              {t(props.product_name)}
            </Link>
          </div>
        </td>
        <td className="product-price" data-title="Price">
          <span className="amount">
            <bdi>{props.final_price}</bdi>
          </span>
        </td>
        <td className="product-quantity" data-title="Quantity">
          <span className="quantity shop-quantity">
            <label className="screen-reader-text" htmlFor="quantity1"></label>
            <button type="button" className="minus shopminus">
              <i
                className="fa fa-minus text-white fa-1x"
                aria-hidden="true"
              ></i>
            </button>
            <input
              id="quantity1"
              type="text"
              className="qty"
              step="1"
              min="1"
              name="quantity"
              defaultValue="1"
              title="Qty"
              placeholder=""
              disabled
            />
            <button type="button" className="plus shopplus">
              <i className="fa fa-plus fa-1x text-white" aria-hidden="true"></i>
            </button>
          </span>
        </td>
        <td className="product-subtotal" data-title="Subtotal">
          <span className="amount">
            <bdi>
              <span className=""></span>
              {props.final_price}
            </bdi>
          </span>
        </td>
        <td className="product-remove">
          <Link to="#" className="remove" aria-label="Remove this item">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Link>
        </td>
      </tr>
      <tr>
        <td colSpan="6" className="actions">
          <div className="coupon">
            <label htmlFor="coupon_code"></label>
            <input
              id="coupon_code"
              type="text"
              name="coupon_code"
              className="input-text"
              defaultValue=""
              placeholder="Coupon Code"
            />
            <button
              className="iq-button btn btn-hover"
              type="button"
              name="apply_coupon"
            >
              {t("shop.apply_coupon")}
            </button>
          </div>
          <button
            className="iq-button btn update-cart btn-hover text-right"
            type="button"
            name="update_cart"
            disabled=""
            aria-disabled="true"
          >
            {t("shop.update_cart")}
          </button>
          <input
            id="cart-nonce"
            type="hidden"
            name="cart-nonce"
            defaultValue=""
          />
          <input type="hidden" name="" defaultValue="" />
        </td>
      </tr>
    </Fragment>
  );
});

ProductCart.displayName = "ProductCart";
export default ProductCart;
