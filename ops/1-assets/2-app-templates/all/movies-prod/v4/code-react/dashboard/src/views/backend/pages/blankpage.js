import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const BlankPage = () => {
   return (
      <>
         <Container fluid>
            <Row>
               <Col lg="12">
                  <Card>
                     <Card.Body>
                        Here Add Your HTML Content.....
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default BlankPage;