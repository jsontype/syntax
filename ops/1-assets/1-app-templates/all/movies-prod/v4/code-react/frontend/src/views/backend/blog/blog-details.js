import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import aboutus1 from '../../../assets/images/about-us/01.jpg'
import img1 from '../../../assets/images/blog/blog1.jpeg'
import img2 from '../../../assets/images/blog/blog3.jpeg'

const BlogDetail = () => {
    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(${aboutus1})`}}>  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav className="text-center iq-breadcrumb-two">
                                <h2 className="title">The Most Anticipated Movies</h2>
                                <Breadcrumb className="main-bg">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item> 
                                    <Breadcrumb.Item>Blog</Breadcrumb.Item>
                                    <Breadcrumb.Item active>The Most Anticipated Movies</Breadcrumb.Item>
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
                                        <img width="1920" height="1080" src={img1} alt=""/>				
                                    </div>
                                    <div className="iq-blog-detail">
                                        <div className="iq-blog-meta">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="iq-user">
                                                        <i className="fa fa-user-o mr-1" aria-hidden="true"></i>admin
                                                    </Link>
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
                                        <div className="blog-content">
                                            <p><strong>Praesent iaculis, purus ac vehicula mattis, arcu lorem blandit nisl, non laoreet dui mi eget elit. Donec porttitor ex vel augue maximus luctus. Vivamus finibus nibh eu nunc volutpat suscipit.</strong></p>
                                            <p>Nam vulputate libero quis nisi euismod rhoncus. Sed eu euismod felis. Aenean ullamcorper dapibus odio ac tempor. Aliquam iaculis, quam vitae imperdiet consectetur, mi ante semper metus, ac efficitur nisi justo ut eros. Maecenas suscipit turpis fermentum elementum scelerisque.</p>
                                            <p>Sed leo elit, volutpat quis aliquet eu, elementum eget arcu. Aenean ligula tellus, malesuada eu ultrices vel, vulputate sit amet metus. Donec tincidunt sapien ut enim feugiat, sed egestas dolor ornare.</p>
                                        </div>
                                        <blockquote className="wp-block-quote">
                                            <p>\”Simon Doe has his tongue planted in his cheek as he describes the<br/>fictional skills of his advancing agent.\”</p>
                                            <cite><Link to="#">Steve Kowalsky</Link></cite>
                                        </blockquote>
                                        <p>Potenti fusce himenaeos hac aenean quis donec vivamus aliquet, wprdpress integer inceptos curae sollicitudin in class sociosqu netus, euismod tempus fermentum odio gravida eleifend viverra pulvinar inceptos ligula consectetur. Potenti ante porttitor tristique curae scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra in commodo.</p>
                                        <p>Nisi habitasse viverra praesent a maecenas odio erat tristique praesent elementum rutrum maecenas blandit nec curabitur donec, turpis varius etiam felis ultrices sit, per inceptos dapibus fames donec praesent quisque commodo primis proin leo nisl lacinia dictumst justo sagittis luctus vestibulum sed quisque.</p>
                                        <div>
                                            <div>
                                                <iframe title="Lauren Cohan opens up about her ‘Walking Dead’ salary dispute" width="525" height="295" src="https://www.youtube.com/embed/bPh0kfMRIFA?feature=oembed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                                            </div>
                                        </div>
                                        <p>Potenti fusce himenaeos hac aenean quis donec vivamus aliquet, wprdpress integer inceptos curae sollicitudin in class sociosqu netus, euismod tempus fermentum odio gravida eleifend viverra pulvinar inceptos ligula consectetur. Potenti ante porttitor tristique curae scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra in commodo.</p>
                                    </div>
                                    <div className="comments-area validate-form">
                                        <div className="comment-respond">
                                            <h3 className="comment-reply-title">Leave a Reply <small><Link to="" style={{display: "none"}}>Cancel reply</Link></small></h3>
                                            <form action="#" method="post" className="comment-form" noValidate>Your email address will not be published. Required fields are marked *<div className="comment-form-comment"><textarea name="comment" aria-required="true" placeholder="Comment"></textarea></div>
                                                <Row>
                                                    <Col lg="4">
                                                        <div className="comment-form-author">
                                                            <input id="author" name="author" aria-required="true" placeholder="Name*"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div className="comment-form-email">
                                                            <input id="email" name="email" placeholder="Email*"/>
                                                        </div>
                                                    </Col>
                                                    <Col lg="4">
                                                        <div className="comment-form-url">
                                                            <input id="url" name="url" placeholder="Website"/>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <p className="d-flex align-items-start">
                                                    <input type="checkbox"/>
                                                    <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                                </p>
                                                <p className="form-submit">
                                                    <button name="submit" type="button" id="submit" className="submit">
                                                        <span className="iq-btn-text-holder">Post Comment</span>
                                                    </button>
                                                    <input type="hidden" name="comment_post_ID" id="comment_post_ID"/>
                                                    <input type="hidden" name="comment_parent" id="comment_parent"/>
                                                </p>
                                            </form>	
                                        </div>
                                        <div className="wpcf7-response-output error-msg" aria-hidden="true" style={{display: "none"}}></div>
                                    </div>
                                </div>
                            </article>
                        </Col>
                        <Col lg="4" sm="12">
                            <div className="widget-area" aria-label="Blog Sidebar">
                                <div id="search-2" className="widget widget_search">
                                    <form method="get" className="search-form" action="#" autoComplete="off">
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
                                                        <Link to="#" style={{backgroundImage: `url(${img1})`}}></Link>
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
                                                        <Link to="#" style={{backgroundImage: `url(${img1})`}}></Link>
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
                                                        <Link to="#" style={{backgroundImage: `url(${img2})`}}></Link>
                                                    </div>
                                                    <div className="post-blog">
                                                        <div className="blog-box">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item  mr-3">
                                                                    <Link className="date-widget" to="#"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>February 2, 2019</Link>
                                                                </li>
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
                                <div id="tag_cloud-2" className="widget widget_tag_cloud"><h5 className="widget-title">Tags</h5><div className="tagcloud">
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

export default BlogDetail