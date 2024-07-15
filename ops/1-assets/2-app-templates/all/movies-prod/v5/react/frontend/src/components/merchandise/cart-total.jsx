import React, { Fragment, memo } from "react";

// the hook
import { useTranslation } from "react-i18next";

const CartTotal = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <tbody>
        <tr className="cart-subtotal">
          <th>{t("shop.subtotal")}</th>
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
          <th>{t("shop.total_")}</th>
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
