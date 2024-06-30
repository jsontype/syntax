import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

//router
import { useRouter } from 'next/router'

//component
import CardBlogGrid from '@/components/cards/CardBlogGrid'

//static data 
import { blogsGrid } from '@/StaticData/blogs'

import GridPageBreadCrumb from '@/components/blog/GridPageBreadCrumb'
const BlogGrid = memo((props) => {
    const router = useRouter()
    const type = router.query.type;

    let _column: number = 12;
    switch (type) {
        case 'one-column':
            _column = 12;
            break;
        case 'two-column':
            _column = 6;
            break;
        case 'three-column':
            _column = 4;
            break;
        case 'four-column':
            _column = 3;
            break;
        default:
            break;
    }
    return (
        <Fragment>
            <GridPageBreadCrumb type={type}></GridPageBreadCrumb>
            <div className="section-padding">
                <Container>
                    <Row>
                        {blogsGrid.slice(0, 10).map((item, index) => {
                            return (
                                <Col lg={_column} sm="12" key={index} >
                                    <CardBlogGrid title={item.title} thumbnail={item.thumbnail} description={item.description} username={item.username} date={item.blogDate} categories={item.categories}></CardBlogGrid>
                                </Col>
                            )
                        }
                        )}
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
});

BlogGrid.displayName = "BlogGrid";
export default BlogGrid;
