import React, { Fragment, memo } from "react";

//react-bootstrap
import { Col, Container, Row } from "react-bootstrap";

//components
import BreadCrumbWidget from "../../components/BreadcrumbWidget";
import ProductCard from "../../components/merchandise/product-card";

//static data
import { newProduct } from "../../StaticData/shop";

//hooks
import { useTranslation } from "react-i18next";

const AllProduct = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t("ott_home.view_all")} />
      <section className="section-padding">
        <Container fluid>
          <Row md="3" lg="5" className="row-cols-2">
            {newProduct.slice(0, 5).map((item, index) => {
              return (
                <Col className="mb-5" key={index}>
                  <ProductCard
                    thumbnail={item.thumbnail}
                    product_name={t(item.product_name)}
                    price={item.price}
                    final_price={item.final_price}
                    rating="5"
                    count1="0"
                    is_sale={item.is_sale}
                    is_new={item.is_new}
                    slug={item.slug}
                  />
                </Col>
              );
            })}
            {newProduct.slice(0, 5).map((item, index) => {
              return (
                <Col className="mb-5" key={index}>
                  <ProductCard
                    thumbnail={item.thumbnail}
                    product_name={t(item.product_name)}
                    price={item.price}
                    final_price={item.final_price}
                    rating="5"
                    count1="0"
                    is_sale={item.is_sale}
                    is_new={item.is_new}
                    slug={item.slug}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
});

AllProduct.displayName = "AllProduct";
export default AllProduct;
