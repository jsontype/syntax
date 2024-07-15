import { Fragment, memo } from "react";

// react-bootstrap
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

// router
import Link from "next/link";

// components
import CardStyle from "../../components/cards/CardStyle";
import Sources from "../../components/Sources";

// function
import { generateImgPath } from '../../StaticData/data'

import { useEnterExit } from "@/utilities/usePage";

const DetailPage = memo(() => {
  const cast =
  {
    id: '01',
    thumbnail: generateImgPath('/assets/images/cast/01.webp'),
    name: 'Debbi Bossi',
    roles: ['director', 'writer', 'actor'],
    description: '"Many actors have left a lasting impact on the world of entertainment. They bring characters to life on screen, captivating audiences with their talent and charisma. From classic Hollywood icons like Marilyn Monroe and Humphrey Bogart to contemporary stars like Leonardo DiCaprio and Scarlett Johansson, actors have played a vital role in shaping the world of cinema. Each actor has their unique style and contribution to the art of <span class="text-primary">storytelling (2001)</span>, making',
    awards: '56 WINS & 83 NOMINATIONS',
    sites: 'IQONIC DESIGN',
    site_link: 'https://iqonic.design/',
    dob: 'October 15, 1982',
    place_of_birth: 'Westminster, London, England, UK',
    height: '6′ 1¾″ (1.87 m)',
    parents: 'Diana Patricia (Servaes)',
    siblings: 'Emma Hiddleston',
    works: [
      {
        id: '1',
        name: 'Mortal Norris',
        as: 'Christina Ricci',
        thumbnail: generateImgPath('/assets/images/movies/latest/01.webp'),
        year: '2009',
      },
      {
        id: '2',
        name: 'Advetre',
        as: 'Christina Ricci',
        thumbnail: generateImgPath('/assets/images/movies/latest/02.webp'),
        year: '2009',
      },
      {
        id: '3',
        name: 'Net Ailo',
        as: 'Christina Ricci',
        thumbnail: generateImgPath('/assets/images/movies/latest/03.webp'),
        year: '2009',
      },
      {
        id: '4',
        name: 'Ariivaal',
        as: 'Christina Ricci (3 Seasons)',
        thumbnail: generateImgPath('/assets/images/movies/latest/04.webp'),
        year: '2009',
      },
    ],
    most_views: [
      {
        id: "01",
        thumbnail: generateImgPath('/assets/images/movies/popular/01.webp'),
        title: 'CRW',
        duration: '2hr: 12mins',
        watchlistLink: '/play-list',
        link: '/movies/detail'
      },
      {
        id: "02",
        thumbnail: generateImgPath('/assets/images/movies/popular/03.webp'),
        title: 'Goal',
        duration: '2hr: 30mins',
        watchlistLink: '/play-list',
        link: '/movies/detail'
      },
      {
        id: "03",
        thumbnail: generateImgPath('/assets/images/movies/popular/04.webp'),
        title: 'Dandacg',
        duration: '1hr: 30mins',
        watchlistLink: '/play-list',
        link: '/movies/detail'
      },
      {
        id: "04",
        thumbnail: generateImgPath('/assets/images/movies/popular/05.webp'),
        title: 'Mexcan',
        duration: '1hr: 30mins',
        watchlistLink: '/play-list',
        link: '/movies/detail'
      },
    ]
  }

  useEnterExit()
  return (
    <Fragment>
      <div className="section-padding">
        <Container fluid>
          <Row>
            <Col lg="3" md="5">
              <div className="cast-box position-relative">
                <img src={cast.thumbnail} alt="person" className="img-fluid object-cover w-100" loading="lazy" />
                <ul className="p-0 m-0 list-unstyled widget_social_media position-absolute w-100 text-center">
                  <li className="">
                    <Link href="https://www.facebook.com/" className="position-relative">
                      <i className="fab fa-facebook"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://twitter.com/" className="position-relative">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://github.com/" className="position-relative">
                      <i className="fab fa-github"></i>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="https://www.instagram.com/" className="position-relative">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <h5 className="mt-5 mb-4 text-white fw-500">Personal Details</h5>
              <h6 className="font-size-18 text-white fw-500">Official Sites :</h6>
              <p><Link href={cast.site_link} target="_blank" className="text-uppercase">{cast.sites}</Link></p>
              <h6 className="font-size-18 text-white fw-500">Born :</h6>
              <div className="seperator d-flex align-items-center flex-wrap mb-3">
                <span>{cast.dob}</span>
                <span className="circle"></span>
                <span>{cast.place_of_birth}</span>
              </div>
              <h6 className="font-size-18 text-white fw-500">Height :</h6>
              <p>{cast.height}</p>
              <h6 className="font-size-18 text-white fw-500">Parents & Relatives :</h6>
              <p className="mb-0">{cast.parents} <span className="text-primary">{cast.siblings}</span>(Sibling)</p>
            </Col>
            <Col lg="9" md="7">
              <h4 className="fw-500">{cast.name}</h4>
              <div className="seperator d-flex align-items-center flex-wrap mb-3">
                {cast.roles.map((item, index) => {
                  return (
                    <span key={index}>
                      <span className="fw-semibold text-capitalize">{item}</span>
                      {index < cast.roles.length - 1 ? <span className="d-inline-block circle"></span> : ''}
                    </span>
                  )
                })}
              </div>
              <p dangerouslySetInnerHTML={{ __html: cast.description }}></p>
              <div className="awards-box border-bottom">
                <h5>Awards</h5>
                <span className="text-white fw-500">{cast.awards}</span>
              </div>
              <div className="pb-md-5">
                <h5 className="main-title text-capitalize mb-4">Most View Movies</h5>
                <div className="card-style-grid mb-5">
                  <Row xl="5" sm="12" className=" row-cols-1">
                    {cast.most_views.map((item, index) => {
                      return (
                        <Col className="mb-4" key={index}>
                          <CardStyle title={item.title} movieTime={item.duration} watchlistLink={item.watchlistLink} link={item.link} image={item.thumbnail} />
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              </div>
              <div className="content-details trending-info">
                <Tab.Container defaultActiveKey="first">
                  <Nav as="ul" className="nav-underline nav-pills d-flex align-items-center text-center mb-5 gap-5">
                    <Nav.Item as="div">
                      <Nav.Link eventKey="first" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="div">
                      <Nav.Link eventKey="second" id="nav-movies-tab" data-bs-toggle="tab" data-bs-target="#nav-movies" type="button" role="tab" aria-controls="nav-movies" aria-selected="true">Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="div">
                      <Nav.Link eventKey="third" id="nav-shows-tab" data-bs-toggle="tab" data-bs-target="#nav-shows" type="button" role="tab" aria-controls="nav-shows" aria-selected="true">TV Shows</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane className="fadeInUp animated" eventKey="first">
                      <div className="description-content">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {cast.works.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="w-15">
                                      <img src={item.thumbnail} alt="image-icon" className="img-fluid person-img object-cover" />
                                    </td>
                                    <td className="w-20">
                                      <div className="font-size-18 d-flex gap-4 text-white fw-500">
                                        <span>{item.id}</span>
                                        <span className="text-capitalize">{item.name}</span>
                                        <span className="fw-normal text-body">as {item.as}</span>
                                      </div>
                                    </td>
                                    <td><span className="fw-500 font-size-18 text-white">{item.year}</span></td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="fadeInUp animated" eventKey="second">
                      <div className="description-content">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              {cast.works.slice(2, 4).map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="w-15">
                                      <img src={item.thumbnail} alt="image-icon" className="img-fluid person-img object-cover" />
                                    </td>
                                    <td className="w-20">
                                      <div className="font-size-18 d-flex gap-4 text-white fw-500">
                                        <span>{item.id}</span>
                                        <span className="text-capitalize">{item.name}</span>
                                        <span className="fw-normal text-body">as {item.as}</span>
                                      </div>
                                    </td>
                                    <td><span className="fw-500 font-size-18 text-white">{item.year}</span></td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="fadeInUp animated" eventKey="third">
                      <Sources />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
});

DetailPage.displayName = "DetailPage";
export default DetailPage;
