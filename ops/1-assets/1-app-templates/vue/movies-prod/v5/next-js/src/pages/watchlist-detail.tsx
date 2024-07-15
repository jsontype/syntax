import React, { Fragment, memo, useState } from 'react'

//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

//router
import Link from 'next/link'

//fslight-box
import FsLightbox from 'fslightbox-react'

//components
import WishlistCard from '../components/cards/WishlistCard'

const WatchlistDetail = memo(() => {
  const [toggler, setToggler] = useState(false);
  const watchlist = [
    {
      id: '01',
      thumbnail: '/assets/images/movies/latest/01.webp',
      title: 'mortal nories',
      duration: '1 month ago',
      views: '30 views',
    },
    {
      id: '02',
      thumbnail: '/assets/images/movies/latest/02.webp',
      title: 'advetre',
      duration: '3 month ago',
      views: '75 views',
    },
    {
      id: '03',
      thumbnail: '/assets/images/movies/latest/03.webp',
      title: 'net ailo',
      duration: '2 month ago',
      views: '150 views',
    },
    {
      id: '04',
      thumbnail: '/assets/images/movies/latest/04.webp',
      title: 'ariivaal',
      duration: '5 month ago',
      views: '300 views',
    },
  ]
  return (
    <Fragment>
      <section className="section-padding">
        <Container fluid>
          <Row >
            <Col lg="4" md="5">
              <div className="playlist-main-banner position-relative">
                <Link href="/videos/detail" className="position-absolute top-0 bottom-0 start-0 end-0 z-1"></Link>
                <div className="img-box">
                  <img src="/assets/images/movies/ott2.webp" alt="movie-card" className="img-fluid object-cover d-block" />
                </div>
                <div className="img-detail z-3">
                  <Link href="#" className="video-open playbtn text-decoration-none"
                    tabIndex={0} onClick={() => setToggler(!toggler)}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                      y="0px" width="25px" height="25px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7"
                      xmlSpace="preserve">
                      <polygon className="triangle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                        strokeMiterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                      <circle className="circle" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"
                        strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                    </svg>
                    <span className="w-trailor text-uppercase font-size-14 ms-2 fw-500">Play All</span>
                  </Link>

                </div>
              </div>
            </Col>
            <Col lg="8" md="7" >
              <div className="playlist-listing mt-4 mt-md-0">
                <h4 className="fw-500">Playlist Demo 1</h4>
                <div className="seperator d-flex align-items-center">
                  <span className="text-body fw-semibold font-size-12 text-capitalize">public</span>
                  <span className="circle circle-small"></span>
                  <span className="text-body fw-semibold font-size-12 text-capitalize">5 videos</span>
                </div>
                <ul className="list-inline mt-3 mt-md-5 p-0">
                  {watchlist.map((item, index) => {
                    return (
                      <li key={index}>
                        <WishlistCard image={item.thumbnail} title={item.title} duration={item.duration} views={item.views} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <FsLightbox
        maxYoutubeVideoDimensions={{ width: 700, height: 400 }}
        exitFullscreenOnClose={true}
        toggler={toggler}
        sources={["/assets/images/video/trailer.mp4"]}
      />
    </Fragment>
  )
})

WatchlistDetail.displayName = "WatchlistDetail"
export default WatchlistDetail