import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup, CardGroup, CardColumns } from 'react-bootstrap'

//img
import card from '../../../assets/images/page-img/07.jpg'
import pageimg8 from '../../../assets/images/page-img/08.jpg'
import pageimg9 from '../../../assets/images/page-img/09.jpg'

const UiCards = () =>{
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="6" md="6" lg="3">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img variant="top" src={card} alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Card.Text>
                        <Button variant="primary">Button</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="6" md="6" lg="3">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img variant="top" src={card}  alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Card.Text>
                        <p>It is a long established fact that a the readable content of a page when looking at its layout.</p>
                        <Card.Link href="#">Card link</Card.Link>
                        <Card.Link href="#">Another link</Card.Link>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="6" md="6" lg="3">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img variant="top" src={card} alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Card.Text>
                        <ListGroup variant="flush" as="ul">
                           <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                           <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="6" md="6" lg="3">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img variant="top" src={card} alt="#" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                     <ListGroup variant="flush" as="ul">
                        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                     </ListGroup>
                     <Card.Body>
                        <Card.Link href="#">Card link</Card.Link>
                        <Card.Link href="#">Another link</Card.Link>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="6" md="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Card.Text>
                        <Button block variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="6" md="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Card.Text>
                        <Button block variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col lg="4" md="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Header>
                        Featured
                     </Card.Header>
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button  variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="4" md="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Header>
                        Quote
                     </Card.Header>
                     <Card.Body>
                        <blockquote className="blockquote">
                           <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                           <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="4" md="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Header>
                        Featured
                     </Card.Header>
                     <Card.Body>
                        <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                     <Card.Footer className="text-muted">
                        2 days ago
                     </Card.Footer>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col lg="4" md="6" sm="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button block variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="4" md="6" sm="6" className="text-center">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button block variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="4" sm="6" md="6" className="text-right">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Special title treatment</Card.Title>
                        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                        <Button block variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col md="6" lg="4" sm="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img src={card}  variant="top" />
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" lg="4" sm="6" >
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4">Card title</Card.Title>
                        <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                     </Card.Body>
                     <Card.Img src={card}  variant="bottom"  />
                  </Card>
               </Col>
               <Col md="6" lg="4" sm="6" >
                  <Card className="bg-dark text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Img src={card}  alt="#" />
                     <Card.ImgOverlay>
                        <Card.Title as="h4" className="text-white">Card title</Card.Title>
                        <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                     </Card.ImgOverlay>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <h3 className="mb-3">Horizontal Card</h3>
               </Col>
               <Col md="6" lg="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Row className="no-gutters">
                        <Col md="6" lg="4">
                           <Card.Img src={pageimg8} />
                        </Col>
                        <Col md="6" lg="8">
                           <Card.Body>
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text>This is a wider card with supporting text below as a natural lead-in. a little bit longer.</Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Col>
                     </Row>
                  </Card>
               </Col>
               <Col md="6" lg="6">
                  <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Row className="no-gutters flex-row-reverse">
                        <Col  md="6" lg="4">
                           <Card.Img src={pageimg9} alt="#" />
                        </Col>
                        <Col md="6" lg="8">
                           <Card.Body className="text-right">
                              <Card.Title as="h4">Card title</Card.Title>
                              <Card.Text>This is a wider card with supporting text below as a natural lead-in. a little bit longer.</Card.Text>
                              <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                           </Card.Body>
                        </Col>
                     </Row>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <h3 className="mb-2">Card Colored Styles</h3>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="primary" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Primary card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content..</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="secondary" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Secondary card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="success" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3" >
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Success card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="danger" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Danger card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content..</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="warning" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Warning card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card bg="info" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body>
                        <Card.Title as="h4" className="text-white">Info card title</Card.Title>
                        <blockquote className="blockquote mb-0">
                           <p className="font-size-14">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                           <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <h3 className="mb-3">Border Card</h3>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="primary" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-primary">
                        <Card.Title as="h4" className="text-primary">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="secondary" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-secondary">
                        <Card.Title as="h4" className="text-secondary">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="success" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-success">
                        <Card.Title as="h4" className="text-success">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="danger" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-danger">
                        <Card.Title as="h4" className="text-danger">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="warning" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-warning">
                        <Card.Title as="h4" className="text-warning">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" sm="6" lg="4">
                  <Card border="info" className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                     <Card.Body className="text-info">
                        <Card.Title as="h4" className="text-info">Primary card title</Card.Title>
                        <Card.Text>Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <h3 className="mb-2">Card groups</h3>
               </Col>
               <Col sm="12">
                  <CardGroup>
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                  </CardGroup>
               </Col>
               <Col sm="12">
                  <CardGroup className="iq-mb-3">
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                     <Card className="text-white">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                           <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                     </Card>
                  </CardGroup>
               </Col>
               <Col sm="12">
                  <h3 className="my-3">Card Masonry Columns</h3>
                  <CardColumns>
                     <Card className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title that wraps to a new line</Card.Title>
                           <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                        </Card.Body>
                     </Card>
                     <Card className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <blockquote className="blockquote mb-0 card-body">
                           <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                           <footer className="blockquote-footer">
                              <small className="text-muted">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                              </small>
                           </footer>
                        </blockquote>
                     </Card>
                     <Card className="text-white iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <Card.Img variant="top" src={card} alt="#" />
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card bg="primary" className="text-white text-center iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <blockquote className="blockquote mb-0 card-body">
                           <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                           <footer className="blockquote-footer">
                              <small className="text-white">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                              </small>
                           </footer>
                        </blockquote>
                     </Card>
                     <Card className="text-center iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This card has a regular title and short paragraphy of text below it.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Img variant="top" src={card} alt="#" />
                     </Card>
                     <Card className="text-right iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <blockquote className="blockquote card-body mb-0">
                           <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                           <footer className="blockquote-footer">
                              <small className="text-muted">
                              Someone famous in <cite title="Source Title">Source Title</cite>
                              </small>
                           </footer>
                        </blockquote>
                     </Card>
                     <Card className="iq-card iq-card-block iq-card-stretch iq-card-height iq-mb-3">
                        <Card.Body>
                           <Card.Title as="h4">Card title</Card.Title>
                           <Card.Text>This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</Card.Text>
                           <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                        </Card.Body>
                     </Card>
                  </CardColumns>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiCards;