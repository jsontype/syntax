import React from 'react'
import {Container,Row,Col ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const FontAwsome = () => {
 return (
     <>
  
<Container fluid>
<Row>
   <Col sm="12">
      <Card>
         <Card.Header className="d-flex justify-content-between">
            <div className="iq-header-title">
               <h4 className="card-title">Fontawesome Icon</h4>
            </div>
         </Card.Header>
         <Card.Body>
            <p>Use className <code>&lt;i className="fa fa-address-book"&gt;&lt;/i&gt;</code></p>
            <Row className="mt-3">
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-address-book" aria-hidden="true"></i>address-book</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-envelope-open" aria-hidden="true"></i>envelope-open</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-id-card" aria-hidden="true"></i>id-card</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-telegram" aria-hidden="true"></i>telegram</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-user-circle" aria-hidden="true"></i>user-circle</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-area-chart" aria-hidden="true"></i>area-chart</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-asterisk" aria-hidden="true"></i>asterisk</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-car" aria-hidden="true"></i>car</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-bars" aria-hidden="true"></i>bars</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-battery-full" aria-hidden="true"></i>battery-full</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-bluetooth" aria-hidden="true"></i>bluetooth</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-book" aria-hidden="true"></i>book</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-bug" aria-hidden="true"></i>bug</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-building" aria-hidden="true"></i>building</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-calculator" aria-hidden="true"></i>calculator</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-calendar" aria-hidden="true"></i>calendar</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-camera" aria-hidden="true"></i>camera</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-commenting" aria-hidden="true"></i>commenting</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-crop" aria-hidden="true"></i>crop</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-download" aria-hidden="true"></i>download</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-folder" aria-hidden="true"></i>folder</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-gift" aria-hidden="true"></i>gift</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-users" aria-hidden="true"></i>users</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-hashtag" aria-hidden="true"></i>hashtag</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-home" aria-hidden="true"></i>home</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-lock" aria-hidden="true"></i>lock</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-graduation-cap" aria-hidden="true"></i>graduation-cap</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-paper-plane" aria-hidden="true"></i>paper-plane</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-star" aria-hidden="true"></i>star</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-tag" aria-hidden="true"></i>tag</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-trash" aria-hidden="true"></i>trash</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-upload" aria-hidden="true"></i>upload</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-university" aria-hidden="true"></i>university</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-wifi" aria-hidden="true"></i>wifi</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i>thumbs-up</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-train" aria-hidden="true"></i>train</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-file" aria-hidden="true"></i>file</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-snapchat" aria-hidden="true"></i>snapchat</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-twitter" aria-hidden="true"></i>twitter</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-wordpress" aria-hidden="true"></i>wordpress</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-wordpress" aria-hidden="true"></i>wordpress</Link>
               </Col>
               <Col sm="6" md="4" lg="3">
                  <Link className="iq-icons-list" to="#"><i className="fa fa-wordpress" aria-hidden="true"></i>wordpress</Link>
               </Col>
               <Col sm="12" className="text-center mt-3">
                  <Button href="https://fontawesome.com/v4.7.0/" target="blank" variant="btn btn-primary">View All Icon</Button>
               </Col>
            </Row>
         </Card.Body>
      </Card>
   </Col>
</Row>
</Container>
     </>
 )
}

export default FontAwsome;



