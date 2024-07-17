import React, { memo, Fragment } from "react";

// react-bootstrap
import { Table } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

// components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import CustomButton from "../../components/CustomButton";

// img
import img1 from "/assets/images/shop/product/01.webp";
import img2 from "/assets/images/shop/product/02.webp";
import img3 from "/assets/images/shop/product/03.webp";

// the hook
import { useTranslation } from "react-i18next";

const WishlistPage = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("header.wishlist")} />
      <div className="wishlist-page section-padding">
        <div className="container">
          <h5 className="mb-5">{t("shop.my_wishlist")}</h5>
          <Table className="table cart-table" responsive>
            <thead className="border-bottom">
              <tr>
                <th className="fw-500 font-size-18"></th>
                <th className="fw-500 font-size-18">
                  {t("shop.product_name")}
                </th>
                <th className="fw-500 font-size-18">{t("shop.unit_price")}</th>
                <th className="fw-500 font-size-18">
                  {t("shop.stock_status")}
                </th>
                <th className="fw-500 font-size-18"></th>
              </tr>
            </thead>
            <tbody>
              <tr data-item="list">
                <td>
                  <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                    <span className="btn-inner">
                      <i className="far fa-trash-alt"></i>
                    </span>
                  </button>
                </td>
                <td>
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="#">
                      <img className="avatar-80" src={img1} alt="" />
                    </Link>{" "}
                    <span className="mt-2">{t("shop.bag_pack")}</span>
                  </div>
                </td>
                <td>
                  <span className="fw-500">$25.00</span>
                </td>
                <td>
                  <span>{t("shop.in_stock")}</span>
                </td>
                <td>
                  <CustomButton
                    buttonTitle={t("shop.view_product")}
                    link="/product-detail"
                    linkButton="false"
                  />
                </td>
              </tr>
              <tr data-item="list">
                <td>
                  <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                    <span className="btn-inner">
                      <i className="far fa-trash-alt"></i>
                    </span>
                  </button>
                </td>
                <td>
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="#">
                      <img className="avatar-80" src={img2} alt="" />
                    </Link>{" "}
                    <span className="mt-2">{t("shop.believe_mask")}</span>
                  </div>
                </td>
                <td>
                  <span className="fw-500">$13.00</span>
                </td>
                <td>
                  <span>{t("shop.in_stock")}</span>
                </td>
                <td>
                  <CustomButton
                    buttonTitle={t("shop.view_product")}
                    link="/product-detail"
                    linkButton="false"
                  />
                </td>
              </tr>
              <tr data-item="list">
                <td>
                  <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                    <span className="btn-inner">
                      <i className="far fa-trash-alt"></i>
                    </span>
                  </button>
                </td>
                <td>
                  <div className="product-thumbnail">
                    <Link className="mb-2 me-3" to="">
                      <img className="avatar-80" src={img3} alt="" />
                    </Link>{" "}
                    <span className="mt-2">{t("shop.black_bow")}</span>
                  </div>
                </td>
                <td>
                  <span className="fw-500">$18.00 – $45.00</span>
                </td>
                <td>
                  <span>Out of Stock</span>
                </td>
                <td>
                  <CustomButton
                    buttonTitle={t("shop.view_product")}
                    link="/product-detail"
                    linkButton="false"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="product-social-share mt-5 d-flex flex-wrap align-items-center gap-3">
            <h5 className="mb-0">Share On:</h5>
            <ul className="list-inline m-0 p-0 d-flex flex-wrap align-items-center gap-2">
              <li className="flex-shrink-0">
                <Link
                  to="https://www.facebook.com/"
                  className="d-inline-block border-radius rounded-circle bg-primary text-white text-center"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://twitter.com/"
                  className="d-inline-block border-radius rounded-circle bg-info text-white text-center"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://in.pinterest.com/"
                  className="d-inline-block border-radius rounded-circle bg-danger text-white text-center"
                  target="_blank"
                >
                  <i className="fab fa-pinterest-p"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://iqonic.design/"
                  className="d-inline-block border-radius rounded-circle bg-warning text-white text-center"
                  target="_blank"
                >
                  <i className="far fa-envelope"></i>
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link
                  to="https://www.whatsapp.com/"
                  className="d-inline-block border-radius rounded-circle bg-success text-white text-center"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

WishlistPage.displayName = "WishlistPage";
export default WishlistPage;
