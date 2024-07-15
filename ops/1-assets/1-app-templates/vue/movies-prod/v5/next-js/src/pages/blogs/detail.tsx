import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Row, Col, Container } from 'react-bootstrap'

//router
import Link from 'next/link';

//static data
import { blogs } from '../../StaticData/blogs';

//components
import DetailMetaList from '../../components/blog/DetailMetaList';
import FormWidget from '../../components/blog/FormWidget';

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

interface BlogDetail {
    id: string,
    categories: string,
    title: string,
    userImage: string,
    username: string,
    blogDate: string,
    tags: [string],
    longDescription: string
}

const BlogDetail = () => {
    const slug = "the-most-anticipated-movies";
    const blog: BlogDetail | any = blogs.find((item) => item.slug === slug)
    useBreadcrumb('The Most Anticipated Movies')
    return (
        <Fragment>
            {blog !== undefined && blog !== null ? (
                <div className='section-padding'>
                    <Container>
                        <Row>
                            <Col xl="8">
                                <div className='iq-blog blog-detail'>
                                    <Link href="" className='blog-image d-block overflow-hidden'>
                                        <img src={blog.thumbnail} loading="lazy" alt="" className='img-fluid w-100' />
                                    </Link>
                                    <div className='iq-blog-box pt-4'>
                                        <div className="iq-blog-meta d-flex mb-3">
                                            <ul className="iq-blogtag list-inline">
                                                <li className="border-gredient-left">
                                                    <Link href="/blogs/filter/author" className="iq-user"><i className="fa fa-user-o me-1" aria-hidden="true"></i>{blog.username}</Link>
                                                </li>
                                            </ul>
                                            <ul className='list-inline mb-0 ms-2'>
                                                <li className="border-gredient-left">
                                                    <Link rel="bookmark" href="/blogs/filter/date">
                                                        <i className="far fa-calendar-alt me-1" aria-hidden="true"></i>
                                                        {blog.blogDate} </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div >
                                            <div dangerouslySetInnerHTML={{ __html: blog.longDescription }}></div>
                                        </div>
                                        <div className='iq-blog-tag'>
                                            <FormWidget></FormWidget>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className='mt-5 mt-xl-0'>
                                <DetailMetaList />
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : ''}
        </Fragment>
    )
}

export default BlogDetail