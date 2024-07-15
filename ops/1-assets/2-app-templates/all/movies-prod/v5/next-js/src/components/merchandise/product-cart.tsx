import React, { Fragment, memo } from "react";

//react-router-dom
// import { Link } from "react-router-dom";
import Link from "next/link";


interface ProductCartProps{
  thumbnail?:string
  product_name?:string
  final_price?:string
}

const ProductCart = memo((props:ProductCartProps) => {
  return (
    <Fragment>
      <tr className="cart-form__cart-item cart_item">
        <td className="product-name" data-title="Product">
          <div className="product-thumbnail">
            <Link href="/merchandise/product-detail">
              <img
                width="300"
                height="400"
                src={props.thumbnail}
                alt="image"
                loading="lazy"
              />
            </Link>
            <Link
              href="/merchandise/product-detail"
              className="cart_item_name"
            >
              {props.product_name}
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
          <Link href="#" className="remove" aria-label="Remove this item">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Link>
        </td>
      </tr>
      <tr>
        <td colSpan={6} className="actions">
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
              Apply coupon
            </button>
          </div>
          <button
            className="iq-button btn update-cart btn-hover text-right"
            type="button"
            name="update_cart"
            disabled
            aria-disabled="true"
          >
            Update cart
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
