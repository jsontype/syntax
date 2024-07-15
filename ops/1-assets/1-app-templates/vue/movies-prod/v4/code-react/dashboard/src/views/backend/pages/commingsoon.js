import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

//img
import logo from '../../../assets/images/logo-full.png'

const CommingSoon = () => {

  useEffect(
    () =>{
      //count down pluing js
      function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }
      
      function initializeClock(elem, endtime) {
        const clock =  document.querySelector(elem)
        const daysSpan = clock.querySelector('[data-days]')
        const hoursSpan = clock.querySelector('[data-hours]')
        const minutesSpan = clock.querySelector('[data-minutes]')
        const secondsSpan = clock.querySelector('[data-seconds]')
      
        function updateClock() {
            const t = getTimeRemaining(endtime)
      
            daysSpan.innerHTML = t.days
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
            
            if (t.total <= 0) {
                clearInterval(timeinterval)
            }
        }
      
        updateClock()
        const timeinterval = setInterval(updateClock, 1000)
      }
      
      let time = document.querySelector('.countdown').getAttribute('data-date')
      if (time === undefined) {
        time = Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
      }
      const deadline = new Date(time)
      initializeClock('.countdown', deadline)  
    }
  )
    
  return (
      <>
        <div className="iq-comingsoon pt-5">
          <Container fluid>
              <Row className="justify-content-center">
                <Col sm="8" className="text-center">
                    <div className="iq-comingsoon-info">
                      <Link to="/">
                        <img src={logo} className="img-fluid w-25" alt=""/>
                      </Link>
                      <h2 className="mt-4 mb-1">Stay tunned, we're launching very soon</h2>
                      <p>We are working very hard to give you the best experience possible!</p>
                      <ul className="countdown d-flex align-items-center list-inline" data-date="Feb 02 2022 20:20:22">
                        <li className="col-md-6 col-lg-3">
                          <Card>
                            <Card.Body>
                              <span data-days>0</span>Days
                            </Card.Body>
                          </Card>
                        </li>
                        <li className="col-md-6 col-lg-3">
                          <Card>
                            <Card.Body>
                              <span data-hours>0</span>Hours
                            </Card.Body>
                          </Card>
                        </li>
                        <li className="col-md-6 col-lg-3">
                          <Card>
                            <Card.Body>
                              <span data-minutes>0</span>Minutes
                            </Card.Body>
                          </Card>
                        </li>
                        <li className="col-md-6 col-lg-3">
                          <Card>
                            <Card.Body>
                              <span data-seconds>0</span>Seconds
                            </Card.Body>
                          </Card>
                        </li>
                      </ul>
                    </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="4">
                    <Form className="iq-comingsoon-form mt-5">
                      <Form.Group>
                          <Form.Control type="email" className="comming mb-0" id="exampleInputEmail1"  placeholder="Enter email address"/>
                          <Button type="button" variant="btn btn-primary">Subscribe</Button>
                      </Form.Group>
                    </Form>
                </Col>
              </Row>
          </Container>
        </div>
      </>
  )
}

export default CommingSoon;