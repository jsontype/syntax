import React, { useState }  from  'react'
import { Container, Row, Col, Collapse, Alert } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiAlerts = () =>{
   //collpase state 
   const [alert1, setOpen] = useState(false);
   const [alert2, setOpen2] = useState(false);
   const [alert3, setOpen3] = useState(false);
   const [alert4, setOpen4] = useState(false);
   const [alert5, setOpen5] = useState(false);
   const [alert6, setOpen6] = useState(false);
   const [alert7, setOpen7] = useState(false);
   const [alert8, setOpen8] = useState(false);
   const [alert9, setOpen9] = useState(false);
   
   //Alert dismissable state
   const [show, setShow] = useState(true);
   const [show1, setShow1] = useState(true);
   const [show2, setShow2] = useState(true);
   const [show3, setShow3] = useState(true);
   const [show4, setShow4] = useState(true);
   const [show5, setShow5] = useState(true);
   const [show6, setShow6] = useState(true);
   const [show7, setShow7] = useState(true);
   const [show8, setShow8] = useState(true);
   const [show9, setShow9] = useState(true);
   const [show10, setShow10] = useState(true);
   const [show11, setShow11] = useState(true);
   const [show12, setShow12] = useState(true);
   const [show13, setShow13] = useState(true);

   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                        <h4 className="card-title">Basic Alerts</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i onClick={() => setOpen(!alert1)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert1} >
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre  className="text-white"><code>
{`<Alert variant="primary">
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="secondary">
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="success">
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="danger">
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="warning">
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="info" >
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant="light mb-0">
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="primary">
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="secondary">
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="success">
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="danger">
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="warning">
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="info" >
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="light mb-0">
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Basic Alerts With Icons</h4>
                           </Card.Header.Title>
                           <Card.Header.Action>
                              <i type="button" onClick={() => setOpen2(!alert2)} >
                                 <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                 </svg>
                              </i>
                           </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert2}>
                           <div id="alert-2">
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="primary">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="secondary">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="success">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="danger">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="warning">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="info">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant="light m-0">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>`}                       
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="primary">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="secondary">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="success">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="danger">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="warning">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="info">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="light m-0">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Line Alerts</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button"  onClick={() => setOpen3(!alert3)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert3}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="primary bg-white" >
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="secondary bg-white">
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="success bg-white">
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="danger bg-white">
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="warning bg-white">
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="info  bg-white">
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant="light bg-white  mb-0">
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>                       
                        `}       
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="primary bg-white" >
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="secondary bg-white">
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="success bg-white">
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="danger bg-white">
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="warning bg-white">
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="info  bg-white">
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="light bg-white  mb-0">
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Line Alerts With Icons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen4(!alert4)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert4}>
                           <div  id="alert-4">
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="primary bg-white" >
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="secondary bg-white">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="success bg-white">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="danger bg-white">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="warning bg-white">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="info  bg-white">
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant="light bg-white  mb-0">
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="primary bg-white" >
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="secondary bg-white">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="success bg-white">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="danger bg-white">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="warning bg-white">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="info  bg-white">
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="light bg-white  mb-0">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Alerts With Background</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen5(!alert5)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert5}>
                           <Card>
                              <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="text-white bg-primary">
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-secondary">
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-success">
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-danger">
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-warning" >
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-info">
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant=" bg-light mb-0">
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>`}
                              </code></pre></kbd>
                           </Card>
                        </Collapse>
                        <Alert variant="text-white bg-primary">
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-secondary">
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-success">
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-danger">
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-warning" >
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-info">
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant=" bg-light mb-0">
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Background Alerts With Icons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen6(!alert6)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <div className="card-body">
                        <Collapse in={alert6}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="text-white bg-primary">
<div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-secondary" >
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-success" >
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-danger" >
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-warning" >
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert variant="text-white bg-info" >
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert variant=" bg-light mb-0" >
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="text-white bg-primary">
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-secondary" >
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-success" >
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-danger" >
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-warning" >
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant="text-white bg-info" >
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                        </Alert>
                        <Alert variant=" bg-light mb-0" >
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                        </Alert>
                     </div>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Alerts Dismissing</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen7(!alert7)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert7}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="text-white bg-primary" show={show} >
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-secondary" show={show1} >
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
   <button type="button"  className="close" onClick={() => setShow1(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-success" show={show2}>
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow2(false)}>
   <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-danger" show={show3}>
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow3(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-warning" show={show4}>
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow4(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-info" show={show5} >
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow5(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="  bg-light mb-0" show={show6} >
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
   <button type="button" className="close text-muted" onClick={() => setShow6(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="text-white bg-primary" show={show} >
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-secondary" show={show1} >
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                           <button type="button"  className="close" onClick={() => setShow1(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-success" show={show2}>
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow2(false)}>
                           <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-danger" show={show3}>
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow3(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-warning" show={show4}>
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow4(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-info" show={show5} >
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow5(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="  bg-light mb-0" show={show6} >
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                           <button type="button" className="close text-muted" onClick={() => setShow6(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Alerts Dismissing With Icons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen8(!alert8)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert8}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="text-white bg-primary" show={show7}>
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow7(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-secondary" show={show8}>
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow8(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-success" show={show9}>
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow9(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-danger" show={show10}>
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow10(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant="text-white bg-warning" show={show11}>
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow11(false)}>
         <i className="ri-close-line"></i>   
   </button>
</Alert>
<Alert variant="text-white bg-info" show={show12}>
   <div className="iq-alert-icon">
      <i className="ri-information-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
   <button type="button" className="close" onClick={() => setShow12(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>
<Alert variant=" bg-light mb-0" show={show13}>
   <div className="iq-alert-icon">
      <i className="ri-alert-line"></i>
   </div>
   <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
   <button type="button" className="close text-muted" onClick={() => setShow13(false)}>
      <i className="ri-close-line"></i>
   </button>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Alert variant="text-white bg-primary" show={show7}>
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow7(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-secondary" show={show8}>
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow8(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-success" show={show9}>
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow9(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-danger" show={show10}>
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow10(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-warning" show={show11}>
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow11(false)}>
                                 <i className="ri-close-line"></i>   
                           </button>
                        </Alert>
                        <Alert variant="text-white bg-info" show={show12}>
                           <div className="iq-alert-icon">
                              <i className="ri-information-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                           <button type="button" className="close" onClick={() => setShow12(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                        <Alert variant=" bg-light mb-0" show={show13}>
                           <div className="iq-alert-icon">
                              <i className="ri-alert-line"></i>
                           </div>
                           <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                           <button type="button" className="close text-muted" onClick={() => setShow13(false)}>
                              <i className="ri-close-line"></i>
                           </button>
                        </Alert>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <div className="col-sm-12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Additional content</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick= { () => setOpen9(!alert9)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={alert9}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="basic-alert" className="text-white"><code>
{`<Alert variant="primary" >
      <div className="iq-alert-text">
         <Alert.Heading as="h5">Well done!</Alert.Heading>
         <p>Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
         </p>
         <hr />
         <p className="mb-0">Whenever you need to, be sure to use margin utilities to
            keep things nice and tidy.
         </p>
      </div>
   </Alert>
</Col>
<Col sm="12" lg="12">
   <Alert variant="success mb-0">
      <div className="iq-alert-text">
         <Alert.Heading as="h5">Well done!</Alert.Heading>
         <p>Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
         </p>
         <hr />
         <p className="mb-0">Whenever you need to, be sure to use margin utilities to
            keep things nice and tidy.
         </p>
      </div>
</Alert>`}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Row>
                           <Col sm="12" lg="12">
                              <Alert variant="primary" >
                                 <div className="iq-alert-text">
                                    <Alert.Heading as="h5">Well done!</Alert.Heading>
                                    <p>Aww yeah, you successfully read this important alert message. This
                                       example text is going to run a bit longer so that you can see how
                                       spacing within an alert works with this kind of content.
                                    </p>
                                    <hr />
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to
                                       keep things nice and tidy.
                                    </p>
                                 </div>
                              </Alert>
                           </Col>
                           <Col sm="12" lg="12">
                              <Alert variant="success mb-0">
                                 <div className="iq-alert-text">
                                 <Alert.Heading as="h5">Well done!</Alert.Heading>
                                    <p>Aww yeah, you successfully read this important alert message. This
                                       example text is going to run a bit longer so that you can see how
                                       spacing within an alert works with this kind of content.
                                    </p>
                                    <hr />
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to
                                       keep things nice and tidy.
                                    </p>
                                 </div>
                              </Alert>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </div>
            </Row>
         </Container>
      </>
   )
}

export default UiAlerts;