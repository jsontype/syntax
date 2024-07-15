import { memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import ProductCard from "@/components/merchandise/product-card";
import ProductDetailCard from "@/components/cards/ProductDetailCard";

//static data
import { newProduct, products } from "@/StaticData/shop";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Redux Selector / Action
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "@/store/setting/selectors";

const ProductDetail = memo(() => {
  const themeSchemeDirection = useSelector(theme_scheme_direction);
  const product = "believe-mask";
  const productDetail = products.find((item) => item.slug === product);
  return (
    <>
       <div className="site-main">
        <Container>
          <Row>
            <Col lg="12">
              {productDetail && (
              <ProductDetailCard
                product_name={productDetail.product_name}
                description={productDetail.descriptio}
                is_new={productDetail.is_new}
                is_sale={productDetail.is_sale}
                price={productDetail.price}
                final_price={productDetail.final_price}
                tags={productDetail.tags}
                additional-info={productDetail.additional_info}
                sku={productDetail.sku}
                category={productDetail.category}
                additional_info={productDetail.additional_info}
                thumbnail={productDetail.thumbnail}
              />
              )}
            </Col>
          </Row>
        </Container>
        <div className="related-product-block section-padding-top">
          <Container className="p-0">
            <div className="row">
              <div className="col-lg-12 mb-4 s-margin">
                <h4>Related Products</h4>
              </div>
              <Swiper
              key={String(themeSchemeDirection)}
              dir={String(themeSchemeDirection)}
                slidesPerView={4}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                loop={true}
                modules={[Navigation]}
                tag="ul"
                className="position-relative swiper-card"
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1025: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  1500: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
              >
                {newProduct.map((item:any, index:any) => {
                  return (
                    <SwiperSlide tag="li" key={index}>
                      <ProductCard
                        thumbnail={item.thumbnail}
                        product_name={item.product_name}
                        price={item.price}
                        final_price={item.final_price}
                        rating="5"
                        count1="0"
                        is_sale={item.is_sale}
                        is_new={item.is_new}
                        slug={item.slug}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
});

ProductDetail.displayName = "ProductDetail";
export default ProductDetail;
