import React, { Fragment, memo, useEffect } from "react";

//react-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//react-router-dom
import { useParams } from "react-router-dom";

//component
import CardBlogGrid from "../../components/cards/CardBlogGrid";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data
import { blogsGrid } from "../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const BlogGrid = memo(() => {
  const { t } = useTranslation();
  const { grid } = useParams();
  let _column, title;
  switch (grid) {
    case "single":
      _column = "12";
      title = "header.1_column_blog";
      break;
    case "double":
      _column = "6";
      title = "header.2_column_blog";
      break;
    case "large-grid":
      _column = "4";
      title = "header.3_column_blog";
      break;
    case "small-grid":
      _column = "3";
      title = "header.4_column_blog";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <BreadCrumbWidget title={title} />
      <div className="section-padding">
        <Container>
          <Row>
            {blogsGrid.slice(0, 10).map((item, index) => {
              return (
                <Col lg={_column} md={_column} sm="12" key={index}>
                  <CardBlogGrid
                    title={t(item.title)}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    description={t(item.shortDescription)}
                    username={t(item.username)}
                    date={item.blogDate}
                    categories={t(item.categories)}
                  ></CardBlogGrid>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

BlogGrid.displayName = "BlogGrid";
export default BlogGrid;
