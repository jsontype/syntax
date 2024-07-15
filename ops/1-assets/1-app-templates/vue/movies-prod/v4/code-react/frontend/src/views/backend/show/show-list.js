import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

//img
import episode1 from '../../../assets/images/episodes/01.jpg'
import episode2 from '../../../assets/images/episodes/02.jpg'
import episode3 from '../../../assets/images/episodes/03.jpg'
import episode4 from '../../../assets/images/episodes/04.jpg'
import episode5 from '../../../assets/images/episodes/05.jpg'
import episode6 from '../../../assets/images/episodes/06.jpg'
import episode7 from '../../../assets/images/episodes/07.jpg'
import episode8 from '../../../assets/images/episodes/08.jpg'
import episode9 from '../../../assets/images/episodes/09.jpg'
import episode10 from '../../../assets/images/episodes/10.jpg'
import video from '../../../assets/video/sample-video.mp4'

const ShowList = () => { 
   return (
      <>
         <div className="video-container iq-main-slider">
            <video className="video d-block" controls loop>
               <source src={video} type="video/mp4"/>
            </video>
         </div>
         <div className="main-content">
            <section className="movie-detail container-fluid">
               <Row>
                  <Col lg="12">
                     <div className="trending-info season-info g-border">
                        <h4 className="trending-text big-title text-uppercase mt-0">The Hero Camp</h4>
                        <div className="d-flex align-items-center text-white text-detail episode-name mb-0">
                           <span>S1E01</span>
                           <span className="trending-year">Lorem Ipsum is dummy text</span>
                        </div>
                        <p className="trending-dec w-100 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                           unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                           survived not only five centuries.
                        </p>
                        <ul className="list-inline p-0 mt-4 share-icons music-play-lists">
                           <li>
                              <span><i className="ri-add-line"></i></span>
                           </li>
                           <li>
                              <span><i className="ri-heart-fill"></i></span>
                           </li>
                           <li className="share">
                              <span><i className="ri-share-fill"></i></span>
                              <div className="share-box">
                                 <div className="d-flex align-items-center">
                                    <Link to="#" className="share-ico"><i className="ri-facebook-fill"></i></Link>
                                    <Link to="#" className="share-ico"><i className="ri-twitter-fill"></i></Link>
                                    <Link to="#" className="share-ico"><i className="ri-links-fill"></i></Link>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </section>
            <section id="iq-favorites">
               <Container fluid>
                  <div className="block-space">
                     <Row>
                        <Col sm="12" className="overflow-hidden">
                           <div className="iq-main-header d-flex align-items-center justify-content-between">
                              <h4 className="main-title">Latest Episodes</h4>
                              <Link to="#" className="text-primary">View all</Link>
                           </div>
                        </Col>
                     </Row>
                     <Row>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode1} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode2} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode3} className="img-fluid img-zoom" alt=""/>  
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode4} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode5} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode6} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode7} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode8} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode9} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                        <Col md="6" className="col-1-5 iq-mb-30">
                           <div className="epi-box">
                              <div className="epi-img position-relative">
                                 <img src={episode10} className="img-fluid img-zoom" alt=""/>
                                 <div className="episode-play-info">
                                    <div className="episode-play">
                                       <Link to="#">
                                          <i className="ri-play-fill"></i>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="epi-desc p-3">
                                 <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-white">11 Aug 20</span>
                                    <span className="text-primary">30m</span>
                                 </div>
                                 <Link to="#">
                                    <h6 className="epi-name text-white mb-0">Lorem Ipsum is simply dummy text</h6>
                                 </Link>
                              </div>
                           </div>
                        </Col>
                     </Row>
                  </div>
               </Container>
            </section>
         </div>
      </>
   )
}
export default ShowList; 