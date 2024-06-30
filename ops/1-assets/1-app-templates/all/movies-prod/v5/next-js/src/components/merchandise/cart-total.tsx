import React, { Fragment, memo } from "react";

interface CartTotalProps{
  final_price?:string
}

const CartTotal = memo((props:CartTotalProps) => {
  return (
    <Fragment>
      <tbody>
        <tr className="cart-subtotal">
          <th>Subtotal</th>
          <td data-title="Subtotal">
            <span className="">
              <bdi>
                <span className=""></span>
                {props.final_price}
              </bdi>
            </span>
          </td>
        </tr>
        <tr className="order-total">
          <th>Total</th>
          {/* <!-- <td data-title="Total"><strong><span className="amount"><bdi className="final text-primary"><span className="">$</span>{ data.final_price }</bdi></span></strong></td> --> */}
          <td data-title="Total">
            <strong>
              <span className="amount">
                <bdi className="final text-primary">
                  <span className=""></span> {props.final_price}{" "}
                </bdi>
              </span>
            </strong>
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
});

CartTotal.displayName = "CartTotal";
export default CartTotal;
