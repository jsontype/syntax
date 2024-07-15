import React,{ useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup, ButtonToolbar, DropdownButton, Dropdown, Collapse } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiButtons = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   const[open6,setOpen6]=useState(false)
   const[open7,setOpen7]=useState(false)
   const[open8,setOpen8]=useState(false)
   const[open9,setOpen9]=useState(false)
   const[open10,setOpen10]=useState(false)
   const[open11,setOpen11]=useState(false)
   const[open12,setOpen12]=useState(false)
   const[open13,setOpen13]=useState(false)
   const[open14,setOpen14]=useState(false)
   const[open15,setOpen15]=useState(false)
   const[open16,setOpen16]=useState(false)
   const[open17,setOpen17]=useState(false)
   
   return(
      <>
         <Container fluid className="ui-elements">
            <Row>
               <Col lg="6" xl="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Default Buttons</h4>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="primary mt-2">Primary</Button> 
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="primary mt-2">Primary</Button>{' '}
                        <Button variant="secondary mt-2">Secondary</Button>{' '}
                        <Button variant="success mt-2">Success</Button>{' '}
                        <Button variant="danger mt-2">Danger</Button>{' '}
                        <Button variant="warning mt-2">Warning</Button>{' '}
                        <Button variant="info mt-2">Info</Button>{' '}
                        <Button variant="light mt-2">Light</Button>{' '}
                        <Button variant="dark mt-2">Dark</Button>{' '}
                        <Button variant="link mt-2">Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Default Buttons Rounded Shape</h4>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open1}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant="primary rounded-pill mt-2">Primary</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button  variant="primary rounded-pill mt-2">Primary</Button>{' '}
                        <Button  variant="secondary rounded-pill mt-2">Secondary</Button>{' '}
                        <Button  variant="success rounded-pill mt-2">Success</Button>{' '}
                        <Button  variant="danger rounded-pill mt-2">Danger</Button>{' '}
                        <Button  variant="warning rounded-pill mt-2">Warning</Button>{' '}
                        <Button  variant="info rounded-pill mt-2">Info</Button>{' '}
                        <Button  variant="light rounded-pill mt-2">Light</Button>{' '}
                        <Button  variant="dark rounded-pill mt-2">Dark</Button>{' '}
                        <Button  variant="link rounded-pill mt-2">Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Outline Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={ () => setOpen2(!open2) }>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open2}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant="outline-primary mt-2">Primary</Button>
                                 `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button  variant="outline-primary mt-2">Primary</Button>{' '}
                        <Button  variant="outline-secondary mt-2">Secondary</Button>{' '}
                        <Button  variant="outline-success mt-2">Success</Button>{' '}
                        <Button  variant="outline-danger mt-2">Danger</Button>{' '}
                        <Button  variant="outline-warning mt-2">Warning</Button>{' '}
                        <Button  variant="outline-info mt-2">Info</Button>{' '}
                        <Button  variant="outline-dark mt-2">Dark</Button>{' '}
                        <Button  variant="outline-link mt-2">Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Rounded Outline Buttons</h4>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open3}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant="outline-primary rounded-pill mt-2">Primary</Button>
                                 `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button  variant="outline-primary rounded-pill mt-2">Primary</Button>{' '}
                        <Button  variant="outline-secondary rounded-pill mt-2">Secondary</Button>{' '}
                        <Button  variant="outline-success rounded-pill mt-2">Success</Button>{' '}
                        <Button  variant="outline-danger rounded-pill mt-2">Danger</Button>{' '}
                        <Button  variant="outline-warning rounded-pill mt-2">Warning</Button>{' '}
                        <Button  variant="outline-info rounded-pill mt-2">Info</Button>{' '}
                        <Button  variant="outline-dark rounded-pill mt-2">Dark</Button>{' '}
                        <Button  variant="outline-link rounded-pill mt-2">Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Default Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen4(!open4) }>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open4}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant="primary btn-with-icon mt-2"><i className="ri-bill-fill"></i>Primary</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button  variant="primary btn-with-icon mt-2"><i className="ri-bill-fill"></i>Primary</Button>{' '}
                        <Button  variant="secondary btn-with-icon mt-2"><i className="ri-heart-fill"></i>Secondary</Button>{' '}
                        <Button  variant="success btn-with-icon mt-2"><i className="ri-bill-fill"></i>Success</Button>{' '}
                        <Button  variant="danger btn-with-icon mt-2"><i className="ri-heart-fill"></i>Danger</Button>{' '}
                        <Button  variant="warning btn-with-icon mt-2"><i className="ri-bill-fill"></i>Warning</Button>{' '}
                        <Button  variant="info btn-with-icon mt-2"><i className="ri-heart-fill"></i>Info</Button>{' '}
                        <Button  variant="light btn-with-icon mt-2"><i className="ri-bill-fill"></i>Light</Button>{' '}
                        <Button  variant="dark btn-with-icon mt-2"><i className="ri-heart-fill"></i>Dark</Button>{' '}
                        <Button  variant="link btn-with-icon mt-2"><i className="ri-bill-fill"></i>Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Default Buttons Rounded Shape</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={ () => setOpen5(!open5)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open5}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="primary rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Primary</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="primary rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Primary</Button>{' '}
                        <Button variant="secondary rounded-pill btn-with-icon mt-2"><i className="ri-heart-fill"></i>Secondary</Button>{' '}
                        <Button variant="success rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Success</Button>{' '}
                        <Button variant="danger rounded-pill btn-with-icon mt-2"><i className="ri-heart-fill"></i>Danger</Button>{' '}
                        <Button variant="warning rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Warning</Button>{' '}
                        <Button variant="info rounded-pill btn-with-icon mt-2"><i className="ri-heart-fill"></i>Info</Button>{' '}
                        <Button variant="light rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Light</Button>{' '}
                        <Button variant="dark rounded-pill btn-with-icon mt-2"><i className="ri-heart-fill"></i>Dark</Button>{' '}
                        <Button variant="link rounded-pill btn-with-icon mt-2"><i className="ri-bill-fill"></i>Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Outline Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen6(!open6) }>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open6}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="outline-button" className="text-white"><code>
{`<Button variant="outline-primary mt-2 btn-with-icon"><i className="ri-heart-line"></i>Primary</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="outline-primary mt-2 btn-with-icon"><i className="ri-heart-line"></i>Primary</Button>{' '}
                        <Button variant="outline-secondary mt-2 btn-with-icon"><i className="ri-alert-line"></i>Secondary</Button>{' '}
                        <Button variant="outline-success mt-2 btn-with-icon"><i className="ri-heart-line"></i>Success</Button>{' '}
                        <Button variant="outline-danger mt-2 btn-with-icon"><i className="ri-alert-line"></i>Danger</Button>{' '}
                        <Button variant="outline-warning mt-2 btn-with-icon"><i className="ri-heart-line"></i>Warning</Button>{' '}
                        <Button variant="outline-info mt-2 btn-with-icon"><i className="ri-alert-line"></i>Info</Button>{' '}
                        <Button variant="outline-dark mt-2 btn-with-icon"><i className="ri-alert-line"></i>Dark</Button>{' '}
                        <Button variant="outline-link mt-2 btn-with-icon"><i className="ri-heart-line"></i>Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Rounded Outline Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen7(!open7)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open7}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="outline-primary rounded-pill mt-2 btn-with-icon"><i className="ri-heart-line"></i>Primary</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="outline-primary rounded-pill mt-2 btn-with-icon"><i className="ri-heart-line"></i>Primary</Button>{' '}
                        <Button variant="outline-secondary rounded-pill mt-2 btn-with-icon"><i className="ri-alert-line"></i>Secondary</Button>{' '}
                        <Button variant="outline-success rounded-pill mt-2 btn-with-icon"><i className="ri-heart-line"></i>Success</Button>{' '}
                        <Button variant="outline-danger rounded-pill mt-2 btn-with-icon"><i className="ri-alert-line"></i>Danger</Button>{' '}
                        <Button variant="outline-warning rounded-pill mt-2 btn-with-icon"><i className="ri-heart-line"></i>Warning</Button>{' '}
                        <Button variant="outline-info rounded-pill mt-2 btn-with-icon"><i className="ri-alert-line"></i>Info</Button>{' '}
                        <Button variant="outline-dark rounded-pill mt-2 btn-with-icon"><i className="ri-alert-line"></i>Dark</Button>{' '}
                        <Button variant="outline-link rounded-pill mt-2 btn-with-icon"><i className="ri-heart-line"></i>Link</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Button Tags</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen8(!open8)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>          
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open8}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button href="#"  variant="primary mt-2">Link</Button>
<Button variant="success mt-2" type="submit">Button</Button>
<Button as="input" variant="danger mt-2" type="button" value="Input" />
<Button    as="input" variant="warning mt-2" type="submit" value="Submit" />
<Button as="input" variant="info mt-2" type="reset" value="Reset" />
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button href="#"  variant="primary mt-2">Link</Button>{' '}
                        <Button variant="success mt-2" type="submit">Button</Button>{' '}
                        <Button as="input" variant="danger mt-2" type="button" value="Input" />{' '}
                        <Button as="input" variant="warning mt-2" type="submit" value="Submit" />{' '}
                        <Button as="input" variant="info mt-2" type="reset" value="Reset" />{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Buttons Sizes</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen9(!open9)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open9}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button size="sm" variant="primary mr-2">Small Button</Button>
<Button variant="success mr-2">Button</Button>
<Button size="lg" variant="info">Large Button</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button size="sm" variant="primary mr-2">Small Button</Button>{' '}
                        <Button variant="success mr-2">Button</Button>{' '}
                        <Button size="lg" variant="info">Large Button</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Block Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen10(!open10)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open10}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button block variant="primary">Block level button</Button>      `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button block variant="primary">Block level button</Button>{' '}
                        <Button block variant="success">Block level button</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Icons Buttons</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button"  onClick={ () => setOpen11(!open11)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open11}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre id="icons-button" className="text-white"><code>
{`<Button variant="primary mt-2"><i className="ri-heart-fill pr-0"></i></Button>
<Button variant="primary mt-2 btn-with-icon"><i className="ri-heart-fill"></i>Buttons</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="primary mt-2"><i className="ri-heart-fill pr-0"></i></Button>{' '}
                        <Button variant="secondary mt-2"><i className="ri-star-fill pr-0"></i></Button>{' '}
                        <Button variant="success mt-2"><i className="ri-settings-4-fill pr-0"></i></Button>{' '}
                        <Button variant="danger mt-2"><i className="ri-radio-button-fill pr-0"></i></Button>{' '}
                        <Button variant="warning mt-2"><i className="ri-delete-bin-2-fill pr-0"></i></Button>{' '}
                        <Button variant="info mt-2"><i className="ri-lock-fill pr-0"></i></Button>{' '}
                        <Button variant="light mt-2"><i className="ri-time-fill pr-0"></i></Button>{' '}
                        <Button variant="dark mt-2"><i className="ri-sun-fill pr-0"></i></Button>{' '}
                        <Button variant="link"><i className="ri-moon-fill pr-0"></i></Button>{' '}
                        <div className="d-inline-block w-100">
                           <Button variant="primary mt-2 btn-with-icon"><i className="ri-heart-fill"></i>Buttons</Button>{' '}
                           <Button variant="secondary mt-2 btn-with-icon"><i className="ri-star-fill"></i>Buttons</Button>{' '}
                           <Button variant="success mt-2 btn-with-icon"><i className="ri-settings-4-fill"></i>Buttons</Button>{' '}
                           <Button variant="danger mt-2 btn-with-icon"><i className="ri-radio-button-fill"></i>Buttons</Button>{' '}
                           <Button variant="info mt-2 btn-with-icon"><i className="ri-lock-fill"></i>Buttons</Button>{' '}
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Social Disabled State</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen12(!open12)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>                        
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open12}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="primary mt-2" disabled>Primary button</Button> `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="primary mt-2" disabled>Primary button</Button>{' '}
                        <Button variant="success mt-2" disabled>Button</Button>{' '}
                        <Button variant="outline-primary mt-2" disabled>Button</Button>{' '}
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Buttons Toggle States</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen13(!open13)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open13}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="primary" data-toggle="button" aria-pressed="false" >
   Single toggle
</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button variant="primary" data-toggle="button" aria-pressed="false" >
                           Single toggle
                        </Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Default Buttons Active</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen14(!open14)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open14}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button active variant="primary  mt-2">Active</Button>
<Button active variant="secondary  mt-2">Active</Button>
<Button active variant="warning  mt-2">Active</Button>
<Button disabled variant="accent  mt-2">Disabled</Button>
<Button disabled variant="primary  mt-2">Disabled</Button>
<Button disabled variant="outline-primary  mt-2">Disabled</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <Button active variant="primary  mt-2">Active</Button>{' '}
                        <Button active variant="secondary  mt-2">Active</Button>{' '}
                        <Button active variant="warning  mt-2">Active</Button>{' '}
                        <Button disabled className="text-white" variant="accent  mt-2">Disabled</Button>{' '}
                        <Button disabled variant="primary  mt-2">Disabled</Button>{' '}
                        <Button disabled variant="outline-primary  mt-2">Disabled</Button>{' '}
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Button Group Sizing</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen15(!open15)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>  
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open15}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="primary mt-2">Left</Button>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <div className="d-block">
                           <ButtonGroup size="lg" aria-label="Basic example">
                              <Button variant="primary mt-2">Left</Button>{' '}
                              <Button variant="primary mt-2">Middle</Button>{' '}
                              <Button variant="primary mt-2">Right</Button>{' '}
                           </ButtonGroup>
                        </div>
                        <div className="d-block">
                           <ButtonGroup className="mt-2" aria-label="Basic example">
                              <Button  variant="primary">Left</Button>{' '}
                              <Button  variant="primary">Middle</Button>{' '}
                              <Button  variant="primary">Right</Button>{' '}
                           </ButtonGroup>
                        </div>
                        <div className="d-block">
                           <ButtonGroup size="sm" className="mt-2" aria-label="Basic example">
                              <Button variant="primary">Left</Button>{' '}
                              <Button variant="primary">Middle</Button>{' '}
                              <Button variant="primary">Right</Button>{' '}
                           </ButtonGroup>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" md="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Button Group</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen16(!open16)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open16}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ButtonToolbar className="mt-2"  aria-label="Toolbar with button groups">
   <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
   </ButtonGroup>
</ButtonToolbar>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <ButtonGroup aria-label="Basic example">
                           <Button variant="primary">Left</Button>{' '}
                           <Button variant="primary">Middle</Button>{' '}
                           <Button variant="primary">Right</Button>{' '}
                        </ButtonGroup>
                        <ButtonToolbar className="mt-2"  aria-label="Toolbar with button groups">
                           <ButtonGroup className="mr-2" aria-label="First group">
                              <Button variant="secondary">1</Button>{' '}
                              <Button variant="secondary">2</Button>{' '}
                              <Button variant="secondary">3</Button>{' '}
                              <Button variant="secondary">4</Button>{' '}
                           </ButtonGroup>
                           <ButtonGroup className="mr-2" aria-label="Second group">
                              <Button variant="secondary">5</Button>{' '}
                              <Button variant="secondary">6</Button>{' '}
                              <Button variant="secondary">7</Button>{' '}
                           </ButtonGroup>
                           <ButtonGroup aria-label="Third group">
                              <Button variant="secondary">8</Button>{' '}
                           </ButtonGroup>
                        </ButtonToolbar>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Button Dropdown</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen17(!open17)} >
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <Collapse in={open17}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ButtonGroup aria-label="Button group with nested dropdown">
   <Button variant="primary">1</Button>
   <Button variant="primary">2</Button>
   <ButtonGroup>
      <DropdownButton id="btnGroupDrop1" title="Dropdown" as={ButtonGroup}>
         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
   </ButtonGroup>
</ButtonGroup>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <ButtonGroup aria-label="Button group with nested dropdown">
                           <Button variant="primary">1</Button>
                           <Button variant="primary">2</Button>
                           <ButtonGroup>
                              <DropdownButton id="btnGroupDrop1" title="Dropdown" as={ButtonGroup}>
                                 <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                 <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                              </DropdownButton>
                           </ButtonGroup>
                        </ButtonGroup>
                        <div className="d-block mt-2">
                           <ButtonGroup vertical  aria-label="Button group with nested dropdown">
                              <Button variant="primary">1</Button>
                              <Button variant="primary">2</Button>
                              <ButtonGroup>
                                 <DropdownButton id="btnGroupDrop2" title="Dropdown" as={ButtonGroup}>
                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                 </DropdownButton>
                              </ButtonGroup>
                           </ButtonGroup>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiButtons;