import React,{ useState } from 'react'
import { Container, Row, Col, Collapse, Carousel } from 'react-bootstrap'
import  Card from '../../../components/Card'

//img
import img1 from '../../../assets/images/small/img-1.jpg'

const UiCarousels = () =>{
   
   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Slides only</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen(!open)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>   
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Carousel id="carouselExampleSlidesOnly" indicators={false} nextIcon={''} prevIcon={''} data-ride="carousel">
   <Carousel.Item> 
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
</Carousel>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                        <Carousel id="carouselExampleSlidesOnly" indicators={false} nextIcon={''} prevIcon={''} data-ride="carousel">
                           <Carousel.Item> 
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                        </Carousel>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Slides With Controls</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen1(!open1)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open1}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Carousel  indicators={false} >
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
</Carousel>
                        `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                        <Carousel  indicators={false} >
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                        </Carousel>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Slides With Indicators</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen2(!open2)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open2}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Carousel>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
</Carousel>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                        <Carousel>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                        </Carousel>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Slides With Captions</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen3(!open3)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open3}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Carousel>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
      <Carousel.Caption className="d-none d-md-block">
         <h4 className="text-white">First slide label</h4>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
      <Carousel.Caption className="d-none d-md-block">
         <h4 className="text-white">Second slide label</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
      <Carousel.Caption className="d-none d-md-block">
         <h4 className="text-white">Third slide label</h4>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
   </Carousel.Item>
</Carousel>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                        <div className="bd-example">
                           <Carousel>
                              <Carousel.Item>
                                 <img src={img1} className="d-block w-100" alt="#" />
                                 <Carousel.Caption className="d-none d-md-block">
                                    <h4 className="text-white">First slide label</h4>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                 </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={img1} className="d-block w-100" alt="#" />
                                 <Carousel.Caption className="d-none d-md-block">
                                    <h4 className="text-white">Second slide label</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </Carousel.Caption>
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={img1} className="d-block w-100" alt="#" />
                                 <Carousel.Caption className="d-none d-md-block">
                                    <h4 className="text-white">Third slide label</h4>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                 </Carousel.Caption>
                              </Carousel.Item>
                           </Carousel>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Slides With Crossfade</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen4(!open4)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open4}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Carousel  indicators={false} >
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
   <Carousel.Item>
      <img src={img1} className="d-block w-100" alt="#" />
   </Carousel.Item>
</Carousel>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                        <Carousel  indicators={false} >
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                           <Carousel.Item>
                              <img src={img1} className="d-block w-100" alt="#" />
                           </Carousel.Item>
                        </Carousel>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiCarousels;