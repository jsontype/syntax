import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import bg1 from '../../../assets/images/blog/blog1.jpeg'
import bg2 from '../../../assets/images/blog/blog2.jpeg'
import bg3 from '../../../assets/images/blog/blog3.jpeg'
import bg4 from '../../../assets/images/blog/blog4.jpeg'
import bg5 from '../../../assets/images/blog/blog5.jpeg'
import bg6 from '../../../assets/images/blog/blog6.jpeg'
import bg7 from '../../../assets/images/blog/blog7.jpeg'
import bg8 from '../../../assets/images/blog/blog8.jpeg'
import bg9 from '../../../assets/images/blog/blog9.jpeg'
import bg10 from '../../../assets/images/blog/blog10.jpeg'
import aboutus1 from '../../../assets/images/about-us/01.jpg'

const Blog = () => {
    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(${aboutus1})`}}>  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav className="text-center iq-breadcrumb-two">
                                <h2 className="title">Blog</h2>
                                <Breadcrumb className="main-bg">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item> 
                                    <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="8" sm="12"> 
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg1} alt=""/>	
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#">
                                                    The Most Anticipated Movies
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-film" aria-hidden="true"></i> Categories:
                                            </li>
                                            <li>
                                                <Link to="#">Dramas</Link>
                                            </li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">comedy</Link></li>
                                            <li><Link to="#">Drama</Link></li>
                                            <li><Link to="#">Trailers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg2} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#">Amy Adams Always Dreamed</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-film" aria-hidden="true"></i> Categories:
                                            </li>
                                            <li>
                                                <Link to="#">Dramas</Link>
                                            </li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Drama</Link></li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg3} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#"> WandaVision Will Reveal Scarlet Witch’s Untapped Powers</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">horr</Link></li>
                                            <li><Link to="#">Movie</Link></li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                            <li><Link to="#">Thriller</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg4} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#"> Everything You Need to Know About</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">Trailers</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">comedy</Link></li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                            <li><Link to="#">Trailers</Link></li>
                                            <li><Link to="#">TV Series</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg5} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#">My streaming Black Pearl</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#"> Movie Trailers</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                            <li><Link to="#">Mystery</Link></li>
                                            <li><Link to="#">thrill</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg6} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#">My streaming Black Pearl</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#"> Movie Trailers</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Horror</Link></li>
                                            <li><Link to="#">Movie</Link></li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg7} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#">Cookies and Web Beacons</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">TV Comedies</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">comedy</Link></li>
                                            <li><Link to="#">Tv Rumors</Link></li>
                                            <li><Link to="#">TV Series</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg8} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#"> Birds Of Prey Star Says She’s Definitely Open To A Ghost Return</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">Dramas</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Comedies</Link></li>
                                            <li><Link to="#">Drama</Link></li>
                                            <li><Link to="#">Horror</Link></li>
                                            <li><Link to="#">Movie</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg9} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#"> Saturday Night Live’ Re-Enacts Biden and Harris’ Victory Speeches</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">Historical</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Historical</Link></li>
                                            <li><Link to="#">Movie</Link></li>
                                            <li><Link to="#">Mystery</Link></li>
                                            <li><Link to="#">Thriller</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <div className="iq-blog-box">
                                    <div className="iq-blog-image">
                                        <img width="1920" height="1080" src={bg10} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user"><i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="fa fa-calendar mr-1" aria-hidden="true"></i>
                                                    <span className="screen-reader-text">Posted on</span>
                                                    <Link to="#" rel="bookmark">
                                                        <time  dateTime="2019-02-02T12:46:15+00:00">February 2, 2019</time>
                                                    </Link>					
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-title">
                                            <h3 className="entry-title">
                                                <Link to="#"> Gillian Anderson Shares the  Photos From The Crown	</Link>
                                            </h3>
                                        </div>
                                        <div className="blog-content">
                                            <p>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</p>
                                        </div>
                                        <div className="blog-button">
                                            <Link className="button-link" to="#">Read More<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                        </div>
                                        <ul className="iq-blogcat">
                                            <li className="iq-tag-title"><i className="fa fa-film" aria-hidden="true"></i> Categories:</li>
                                            <li><Link to="#">Movie</Link></li>
                                        </ul>
                                        <ul className="iq-blogtag">
                                            <li className="iq-tag-title">
                                                <i className="fa fa-tags" aria-hidden="true"></i> Tags:						
                                            </li>
                                            <li><Link to="#">Comedies</Link></li>
                                            <li><Link to="#">Movie Trailers</Link></li>
                                            <li><Link to="#">TV Series</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <Link to="#" className=" btn btn-hover iq-button">
                                <span>Load More</span>
                            </Link>
                        </Col>
                        <Col lg="4" sm="12">
                            <div className="widget-area" aria-label="Blog Sidebar">
                                <div id="search-2" className="widget widget_search">
                                    <form method="get" className="search-form" action="#">
                                        <label>
                                            <span className="input-group screen-reader-text">Search for:</span>
                                        </label>
                                        <input type="search" className="search-field search__input"  placeholder="Search" name="s"/>
                                        <button type="submit" className="search-submit">
                                            <i className="ri-search-line"></i>
                                            <span className="screen-reader-text">Search</span>
                                        </button>
                                    </form>
                                </div>
                                <div className="iq-widget-menu widget">
                                    <h5 className="widget-title">Recent Post</h5>              
                                    <div className="list-inline iq-widget-menu">
                                        <ul className="iq-post">
                                            <li>
                                                <div className="post-img">
                                                    <div className="post-img-holder">
                                                    <Link to="#" style={{backgroundImage: `url(${bg1})`}}></Link>
                                                    </div>
                                                    <div className="post-blog">
                                                    <div className="blog-box">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item  mr-3">
                                                                <Link className="date-widget" to="#"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>February 2, 2019</Link>
                                                            </li>
                                                        </ul>
                                                        <Link className="new-link" to="#"><h6>The Most Anticipated Movies</h6></Link>
                                                    </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <div className="post-img-holder">
                                                    <Link to="#" style={{backgroundImage: `url(${bg2})`}}></Link>
                                                    </div>
                                                    <div className="post-blog">
                                                    <div className="blog-box">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item  mr-3"><Link className="date-widget" to="#"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>February 2, 2019</Link></li>
                                                        </ul>
                                                        <Link className="new-link" to="#"><h6>Amy Adams Always Dreamed</h6></Link>
                                                    </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <div className="post-img-holder">
                                                        <Link to="#" style={{backgroundImage: `url(${bg3})`}}></Link>
                                                    </div>
                                                    <div className="post-blog">
                                                        <div className="blog-box">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item  mr-3"><Link className="date-widget" to="#"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>February 2, 2019</Link></li>
                                                            </ul>
                                                            <Link className="new-link" to="#"><h6>WandaVision Will Reveal Scarlet Witch’s Untapped Powers</h6></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="archives-2" className="widget widget_archive">
                                    <h5 className="widget-title">Archives</h5>
                                    <ul>
                                        <li><Link to="#">February 2019</Link></li>
                                        <li><Link to="#">January 2019</Link></li>
                                    </ul>
                                </div>
                                <div id="categories-2" className="widget widget_categories">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul>
                                        <li><Link to="#">Dramas</Link></li>
                                        <li><Link to="#">Historical</Link></li>
                                        <li><Link to="#">Movie</Link></li>
                                        <li><Link to="#">Movie Trailers</Link></li>
                                        <li><Link to="#">Trailers</Link></li>
                                        <li><Link to="#">TV Comedies</Link></li>
                                        <li><Link to="#">TV Rumors</Link></li>
                                        <li><Link to="#">TV Series</Link></li>
                                    </ul>
                                </div>
                                <div id="tag_cloud-2" className="widget widget_tag_cloud"><h5 className="widget-title">Tags</h5>
                                    <div className="tagcloud">
                                        <ul className="wp-tag-cloud">
                                            <li><Link to="#" className="tag-cloud-link " >Action</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Comedies</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">comedy</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Drama</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Dramas</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Historical</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">horr</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Horror</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Movie</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">Movie Trailers</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">Mystery</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">Rumors</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">thrill</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">Thriller</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">Trailers</Link></li>
                                            <li><Link to="#" className="tag-cloud-link ">Tv Rumors</Link></li>
                                            <li><Link to="#" className="tag-cloud-link">TV Series</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="recent-posts-2" className="widget widget_recent_entries">
                                    <h5 className="widget-title">Recent Posts</h5>
                                    <ul>
                                        <li>
                                            <Link to="#">The Most Anticipated Movies</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Amy Adams Always Dreamed</Link>
                                        </li>
                                        <li>
                                            <Link to="#">WandaVision Will Reveal Scarlet Witch’s Untapped Powers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Everything You Need to Know About</Link>
                                        </li>
                                        <li>
                                            <Link to="#">My streaming Black Pearl</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="meta-1" className="widget widget_meta">
                                    <h5 className="widget-title">Meta</h5>
                                    <ul>
                                        <li><Link to="#">Log in</Link></li>
                                        <li><Link to="#">Entries feed</Link></li>
                                        <li><Link to="#">Comments feed</Link></li>
                                        <li><Link to="#">WordPress.org</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Blog