import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { Link } from "react-router-dom";

//components
import BreadCrumbWidget from "../../../components/partials/theme/breadcrumb-widget";

// the hook
import { useTranslation } from "react-i18next";

const ShopCartSummary = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title="Cart Summary" />
      <Container fluid>
        <div className="page-header">
          <ul className="page-items">
            <li className="page_item active">
              <span className="pre-heading"> 1 </span>
              <span className="page_link">{t("shop.shopping_cart")}</span>
            </li>
            <li className="page_item">
              <span className="pre-heading"> 2 </span>
              <span className="page_link">{t("shop.checkout")}</span>
            </li>
            <li className="page_item">
              <span className="pre-heading"> 3 </span>
              <span className="page_link">{t("shop.order_summary")}</span>
            </li>
          </ul>
        </div>
        <div className="order">
          <p className="thank">{t("shop.thankyou")}.</p>
          <ul className="details">
            <li className="detail">
              {t("shop.order_number")}:<strong>15823</strong>
            </li>
            <li className="detail">
              {t("shop.date")}:<strong>June 22, 2022</strong>
            </li>
            <li className="detail">
              {t("shop.email")}:<strong>jondoe@gmail.com</strong>
            </li>
            <li className="detail">
              {t("shop.total_")}<strong>$25.00</strong>
            </li>
            <li className="detail">
              {t("shop.payment_method")}:
              <strong>{t("shop.bank_transfer")}</strong>
            </li>
          </ul>
        </div>
        <h5 className="order_details">Order Details</h5>
        <Row>
          <Col lg="8">
            <section className="maintable">
              <table className="shop_table">
                <thead>
                  <tr>
                    <th className="product-name">{t("shop.product_")}</th>
                    <th className="product-total">{t("shop.total")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="order_item">
                    <td className="product-name">
                      <Link to="#">Back Pack &nbsp;</Link>
                      <strong className="product-quantity">×&nbsp;1</strong>
                    </td>
                    <td className="product-total">
                      <span className="amount">
                        <bdi>
                          <span className="">$</span>25.00
                        </bdi>
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="order_item">
                    <th scope="row bill-total">{t("shop.subtotal")}:</th>
                    <td>
                      <span className="amount">
                        <span className="">$</span>25.00
                      </span>
                    </td>
                  </tr>
                  <tr className="order_item">
                    <th scope="row bill-total">{t("shop.payment_method")}:</th>
                    <td>{t("shop.bank_transfer")}</td>
                  </tr>
                  <tr>
                    <th scope="row bill-total">{t("shop.total")}:</th>
                    <td>
                      <span className="amount">
                        <span className="">$</span>25.00
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </section>
          </Col>
          <Col lg="4">
            <section className="bill_section">
              <h5 className="bill_address">{t("shop.billing_addess")}</h5>
              <address>
                <div className="table-responsive bill_table">
                  <table>
                    <tbody className="bill_body">
                      <tr>
                        <td className="label-name">{t("shop.name")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("shop.test")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("shop.company")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("shop.test")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("shop.country")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("shop.us")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("shop.address")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">{t("shop.dccc")}</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("shop.email")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">jondoe@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="label-name">{t("shop.phone")}</td>
                        <td className="seprator">
                          <span>:</span>
                        </td>
                        <td className="last-name">96465216515</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </address>
            </section>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
});

ShopCartSummary.displayName = "ShopCartSummary";
export default ShopCartSummary;
