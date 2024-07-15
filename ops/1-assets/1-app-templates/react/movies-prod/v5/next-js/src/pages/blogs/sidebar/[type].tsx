
import React, { Fragment, memo, useEffect } from 'react'

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

//router
import { useRouter } from 'next/router'

// Components
import DetailMetaList from '@/components/blog/DetailMetaList';
// import CardBlogGrid from '@/components/cards/CardBlogGrid';
import CardBlogList from "@/components/cards/CardBlogList";
import SidebarBreadcrumb from '@/components/blog/SidebarBreadcrumb';
//components

//static data
import { blogsGrid } from '@/StaticData/blogs';

const LeftSidebarPage = memo(() => {
  const router = useRouter()
  const type = router.query.type;
  let _class;
  switch (type) {
    case 'left':
      _class = 'order-1'
      break;
    case 'right':
      _class = ''
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <SidebarBreadcrumb type={type} />
      <div className='section-padding'>
        <Container>
          <Row>
            <Col lg="8" sm="12" className={_class}>
              {blogsGrid.slice(0, 10).map((item, index) => {
                return (
                  <CardBlogList
                  key={index}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  blogDate={item.blogDate}
                  username={item.username}
                  categories={item.categories}
                  tags={item.tags}
                  description={item.description}
                  />
                  
                  // <CardBlogGrid key={index} title={item.title} thumbnail={item.thumbnail} tags={item.tags} username={item.username} description={item.description} date={item.blogDate} categories={item.categories}>
                  // </CardBlogGrid>
                  
                )
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

LeftSidebarPage.displayName = "LeftSidebarPage";
export default LeftSidebarPage;
