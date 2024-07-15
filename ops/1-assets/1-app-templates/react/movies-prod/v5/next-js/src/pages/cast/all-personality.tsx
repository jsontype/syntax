import React, { Fragment, memo } from 'react'

//react-bootstrap
import { Col, Container, Row } from 'react-bootstrap'

//component
import PersonalityCard from '@/components/cards/PersonalityCard'

//custom hooks
import { useBreadcrumb } from '@/utilities/usePage'

const AllPersonality = memo(() => {
  const cast = [
    {
      id: '01',
      thumbnail: '/assets/images/cast/01.webp',
      name: 'John Abraham',
      category: 'Actor',
    },
    {
      id: '02',
      thumbnail: '/assets/images/cast/02.webp',
      name: 'Leena Burton',
      category: 'Actress',
    },
    {
      id: '03',
      thumbnail: '/assets/images/cast/03.webp',
      name: 'Lorina Williams',
      category: 'Actor',
    },
    {
      id: '04',
      thumbnail: '/assets/images/cast/04.webp',
      name: 'Davina Decorous',
      category: 'Actress',
    },
    {
      id: '05',
      thumbnail: '/assets/images/cast/05.webp',
      name: 'Thomas Bailey',
      category: 'Producer',
    },
    {
      id: '06',
      thumbnail: '/assets/images/cast/06.webp',
      name: 'Kelly Reilly',
      category: 'Actress',
    },
    {
      id: '07',
      thumbnail: '/assets/images/cast/07.webp',
      name: 'Smith Jonas',
      category: 'Director',
    },
    {
      id: '08',
      thumbnail: '/assets/images/cast/08.webp',
      name: 'Angel Louis',
      category: 'Producer',
    },
    {
      id: '09',
      thumbnail: '/assets/images/cast/09.webp',
      name: 'Millar Joseph',
      category: 'Actor',
    },
    {
      id: '10',
      thumbnail: '/assets/images/cast/10.webp',
      name: 'Mark Wilson',
      category: 'Actor',
    },
    {
      id: '11',
      thumbnail: '/assets/images/cast/11.webp',
      name: 'Kelley Walker',
      category: 'Director',
    },
    {
      id: '12',
      thumbnail: '/assets/images/cast/12.webp',
      name: 'Amy Sedaris',
      category: 'Actress',
    },
  ]
  useBreadcrumb('View All')
  return (
    <Fragment>
      <div className='section-padding'>
        <Container fluid>
          <Row >
            <Col sm="12" className="my-4">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="main-title text-capitalize mb-0">favourite-personality</h5>
              </div>
            </Col>
          </Row>
          <div className="card-style-grid">
            <Row xl="5" md="2" className="row-cols-1 personality-card">
              {cast.map((item, index) => {
                return (
                  <Col className="mb-4" key={index}>
                    <div className='iq-cast'>
                    <PersonalityCard image={item.thumbnail} title={item.name} category={item.category} categoryLink={''} />
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </div>
    </Fragment>
  )
})

AllPersonality.displayName = "AllPersonality"
export default AllPersonality