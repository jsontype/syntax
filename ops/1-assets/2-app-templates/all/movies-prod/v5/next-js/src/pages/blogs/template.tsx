import React, { memo, Fragment } from 'react'

//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

//router
import Link from 'next/link';

//static data
import { blogs } from '../../StaticData/blogs'

//components
import FormWidget from '../../components/blog/FormWidget'
import DetailMetaList from '../../components/blog/DetailMetaList'

//custom hook
import { useBreadcrumb } from "@/utilities/usePage";

interface BlogDetail {
  id: [string],
  categories: string,
  title: string,
  userImage: string,
  username: string,
  blogDate: string,
  tags: [string],
  longDescription: string
}
const TemplatePage = memo(() => {
  const slug = "everything-you-need-to-know-about";
  const blog: BlogDetail | any = blogs.find((item) => item.slug === slug)
  useBreadcrumb('Scarlett Drops Out Of Playing a Transgender Man Following Backlash"')
  return (
    <Fragment>
      {blog !== undefined && blog !== null ? (
        <div className="section-padding">
          <Container>
            <Row>
              <Col lg="8" sm="12">
                <div className='blog-box'>
                  <img src='/assets/images/blog/blog2.webp' className='img-fluid mb-4 pb-3 rounded' />
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <ul className='iq-blog-category-2 m-0  p-0 list-unstyled'>
                      <li>
                        <Link href="" className='fw-500 text-capitalize'>{blog.categories}</Link>
                      </li>
                    </ul>
                    <div className='d-flex align-items-center gap-2'>
                      <span className='font-size-12'>5 Min Read</span>
                      <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.2428 12.2419C10.4091 14.0758 7.69386 14.472 5.47185 13.4444C5.14382 13.3123 4.87489 13.2056 4.61922 13.2056C3.90709 13.2098 3.0207 13.9003 2.56002 13.4402C2.09933 12.9795 2.79036 12.0924 2.79036 11.3759C2.79036 11.1202 2.68785 10.8561 2.55579 10.5274C1.5277 8.30577 1.92447 5.58961 3.75816 3.75632C6.09896 1.41466 9.90201 1.41466 12.2428 3.75572C14.5878 6.101 14.5836 9.90086 12.2428 12.2419Z" stroke="#E50914" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M10.3637 8.24775H10.3691" stroke="#E50914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M7.95843 8.24775H7.96383" stroke="#E50914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M5.55316 8.24775H5.55856" stroke="#E50914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className='font-size-12'>Comments</span>
                      </div>
                    </div>
                  </div>
                  <h3>{blog.title}</h3>
                  <div className='iq-author-details d-flex align-items-center justify-content-between gap-2'>
                    <div className='iq-author-image d-flex align-items-center gap-2'>
                      <img src={blog.userImage} alt="user" className='img-fluid avatar-40 rounded-circle' />
                      <div className='gap-1 d-flex align-items-center font-size-14'>
                        By <span><Link href="" className='fw-500 text-capitalize'>{blog.username}</Link></span>
                      </div>
                    </div>
                    <div className='iq-published-date'>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.19336 5.59936H11.8109" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M9.39685 7.70678H9.40185" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M7.00232 7.70678H7.00732" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M4.60291 7.70678H4.6079" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M9.39685 9.80371H9.40185" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M7.00232 9.80371H7.00732" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M4.60291 9.80371H4.6079" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M9.18255 1.60425V3.37991" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path d="M4.82318 1.60425V3.37991" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.8571 2.4563H2.14453V12.3959H11.8571V2.4563Z" stroke="#E50914" strokeWidth="1.5" strokeLinecap="square"></path>
                      </svg>
                      <span className="font-size-14 text-uppercase">
                        <Link href="#">{blog.blogDate}</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: blog.longDescription }}></div>
                <div className='iq-blog-tag'>
                  <ul className='p-0 m-0 list-unstyled gap-2 widget_tags'>
                    <li>
                      <i className='fas fa-tags text-primary' aria-hidden="true"></i>
                      <span className="font-size-12 fw-semibold">TAGS:</span>
                    </li>
                    {blog.tags.map((item: string, index: string) => {
                      return (
                        <li key={index}>
                          <Link href="" className='text-capitalize'>{item}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='widget my-5 my-md-0'>
                  <div className='iq-author-meta-details d-flex align-items-start align-items-md-center gap-4 flex-column flex-md-row'>
                    <div className='iq-author-image'>
                      <img src={blog.userImage} alt="user" className='img-fluid rounded' />
                    </div>
                    <div>
                      <h5>{blog.username}</h5>
                      <ul className='p-0 m-0 list-unstyled widget_social_media mt-4'>
                        <li><Link href=""><i className="fab fa-facebook"></i></Link></li>
                        <li><Link href=""><i className="fab fa-instagram"></i></Link></li>
                        <li><Link href=""><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href=""><i className="fab fa-dribbble"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <FormWidget nextLink='/blogs/detail' prevLink='/blogs/single/gallery' />
              </Col>
              <Col lg="4" md="12" sm="12">
                <DetailMetaList />
              </Col>
            </Row>
          </Container>
        </div>
      ) : ''}
    </Fragment>
  );
});

TemplatePage.displayName = "TemplatePage";
export default TemplatePage;
