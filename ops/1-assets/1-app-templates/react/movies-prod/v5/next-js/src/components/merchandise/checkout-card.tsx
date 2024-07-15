import React, { Fragment, memo } from "react";

interface CheckOutProps{
  thumbnail?:any
  product_name?:string
  final_price?:string
}
const CheckoutCard = memo((props:CheckOutProps) => {
  return (
    <Fragment>
      <table className="shop_table">
        <tbody>
          <tr className="cart_item">
            <div><h5 className="mb-3">Product</h5></div>
            <td className="product-name">
              <div className="product-image">
                <img
                  width="300"
                  height="400"
                  src={props.thumbnail}
                  className="cartimg"
                  alt="image"
                  loading="lazy"
                  sizes="(min-width: 960px) 75vw, 100vw"
                />
              </div>
              <div className="text">
                <span>{props.product_name}</span>
                <br />
                <strong className="product-quantity text-white">
                  QTY:&nbsp;1
                </strong>
              </div>
            </td>
            <td className="product-total">
              <span className="Price-amount">
                <bdi className="text-white">{props.final_price}</bdi>
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span className="Price-amount">
                <bdi>{props.final_price}</bdi>
              </span>
            </td>
          </tr>
          <tr className="order-total">
            <th>Total</th>
            <td>
              <strong>
                <span className="Price-amount">
                  <bdi className="final text-primary">{props.final_price}</bdi>
                </span>
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </Fragment>
  );
});

CheckoutCard.displayName = "CheckoutCard"
export default CheckoutCard;
