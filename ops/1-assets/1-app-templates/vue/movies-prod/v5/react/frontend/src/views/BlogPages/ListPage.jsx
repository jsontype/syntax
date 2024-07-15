import React, { Fragment, memo } from "react";

//react bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import CardBlogList from "../../components/cards/CardBlogList";
import DetailMetaList from "../../components/blog/DetailMetaList";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data
import { blogs } from "../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const BlogList = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <BreadCrumbWidget title={t(props.title)} />
      <div className="section-padding">
        <Container>
          <Row>
            <Col lg="8" sm="12">
              {blogs.slice(0, 7).map((item, index) => {
                return (
                  <CardBlogList
                    key={index}
                    slug={item.slug}
                    title={t(item.title)}
                    thumbnail={item.thumbnail}
                    blogDate={item.blogDate}
                    username={t(item.username)}
                    categories={t(item.categories)}
                    tags={item.tags}
                    description={t(item.description)}
                  />
                );
              })}
            </Col>
            <Col lg="4" sm="12">
              <DetailMetaList></DetailMetaList>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

BlogList.displayName = "BlogList";
export default BlogList;
