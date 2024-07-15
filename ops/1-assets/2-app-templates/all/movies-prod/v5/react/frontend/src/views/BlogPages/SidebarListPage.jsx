import React, { Fragment, memo, useEffect } from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

//react-router-dom
import { useParams } from "react-router-dom";

// Components
import DetailMetaList from "../../components/blog/DetailMetaList";
import CardBlogGrid from "../../components/cards/CardBlogGrid";
import BreadCrumbWidget from "../../components/BreadcrumbWidget";

//static data
import { blogsGrid } from "../../StaticData/blogs";

// the hook
import { useTranslation } from "react-i18next";

const SidebarList = memo(() => {
  const { t } = useTranslation();
  let _class, title;
  const { position } = useParams();

  switch (position) {
    case "left":
      _class = "flex-lg-row-reverse flex-sm-column-reverse";
      title = "header.left_sidebar";
      break;
    case "right":
      _class = " ";
      title = "header.right_sidebar";
      break;

    default:
      break;
  }

  return (
    <Fragment>
      <BreadCrumbWidget title={title} />
      <div className="section-padding">
        <Container>
          <Row className={_class}>
            <Col lg="8" sm="12">
              {blogsGrid.slice(0, 10).map((item, index) => {
                return (
                  <CardBlogGrid
                    key={index}
                    title={t(item.title)}
                    slug={item.slug}
                    thumbnail={item.thumbnail}
                    tags={item.tags}
                    username={t(item.username)}
                    description={t(item.description)}
                    date={item.blogDate}
                    categories={t(item.categories)}
                  ></CardBlogGrid>
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

SidebarList.displayName = "SidebarList";
export default SidebarList;
