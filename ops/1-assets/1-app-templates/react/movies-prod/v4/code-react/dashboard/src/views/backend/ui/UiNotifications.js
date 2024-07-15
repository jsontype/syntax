import React , { useState } from 'react'
import { Container, Row, Col, Collapse, Toast } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiNotifications = () =>{
   
   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Notifications</h4>
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
{`<Toast>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
</Toast>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                        <Toast>
                           <Toast.Header>
                              <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#007aff"></rect>
                              </svg>
                              <strong className="mr-auto">Bootstrap</strong>
                              <small>11 mins ago</small>
                           </Toast.Header>
                           <Toast.Body>
                              Hello, world! This is a toast message.
                           </Toast.Body>
                        </Toast>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Stacking</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen1(!open1)}>
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
{`<Toast>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small className="text-muted">just now</small>
   </Toast.Header>
   <Toast.Body>
      See? Just like this.
   </Toast.Body>
</Toast>
<Toast>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small className="text-muted">2 seconds ago</small>
   </Toast.Header>
   <Toast.Body>
      Heads up, toasts will stack automatically
   </Toast.Body>
</Toast>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>
                        <Toast>
                           <Toast.Header>
                              <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#007aff"></rect>
                              </svg>
                              <strong className="mr-auto">Bootstrap</strong>
                              <small className="text-muted">just now</small>
                           </Toast.Header>
                           <Toast.Body>
                              See? Just like this.
                           </Toast.Body>
                        </Toast>
                        <Toast>
                           <Toast.Header>
                              <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#007aff"></rect>
                              </svg>
                              <strong className="mr-auto">Bootstrap</strong>
                              <small className="text-muted">2 seconds ago</small>
                           </Toast.Header>
                           <Toast.Body>
                              Heads up, toasts will stack automatically
                           </Toast.Body>
                        </Toast>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Notifications horizontally and/or vertically </h4>
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
{`<Toast>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
</Toast>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
                        <div className="p-3 bg-dark">
                           <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
                              <Toast>
                                 <Toast.Header>
                                    <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                       <rect width="100%" height="100%" fill="#007aff"></rect>
                                    </svg>
                                    <strong className="mr-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                 </Toast.Header>
                                 <Toast.Body>
                                    Hello, world! This is a toast message.
                                 </Toast.Body>
                              </Toast>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Notifications</h4>
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
{`<Toast>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
</Toast>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</p>
                        <div className="p-3 bg-dark">
                           <Toast>
                              <Toast.Header>
                                 <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <rect width="100%" height="100%" fill="#007aff"></rect>
                                 </svg>
                                 <strong className="mr-auto">Bootstrap</strong>
                                 <small>11 mins ago</small>
                              </Toast.Header>
                              <Toast.Body>
                                 Hello, world! This is a toast message.
                              </Toast.Body>
                           </Toast>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Stacking Placement</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen4(!open4)} >
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
{`<Toast style={{position: "absolute", top: "0", right: "0"}}>
   <Toast.Header>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
   </Toast>
`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>
                        <div className="bg-dark p-3">
                           <div aria-live="polite" aria-atomic="true" style={{position: "relative" , minHeight: "200px"}}>
                              <Toast style={{position: "absolute", top: "0", right: "0"}}>
                                 <Toast.Header>
                                    <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                       <rect width="100%" height="100%" fill="#007aff"></rect>
                                    </svg>
                                    <strong className="mr-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                 </Toast.Header>
                                 <Toast.Body>
                                    Hello, world! This is a toast message.
                                 </Toast.Body>
                              </Toast>
                           </div>
                        </div>
                        <p className="mt-3">For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
                        <div className="bg-dark p-3 mt-3">
                           <div aria-live="polite" aria-atomic="true" style={{position: "relative" ,minHeight: "200px"}}>
                              <div style={{position: "absolute" ,top: "0", right: "0"}}>
                                 <Toast>
                                    <Toast.Header>
                                       <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                          <rect width="100%" height="100%" fill="#007aff"></rect>
                                       </svg>
                                       <strong className="mr-auto">Bootstrap</strong>
                                       <small className="text-muted">just now</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                       See? Just like this.
                                    </Toast.Body>
                                 </Toast>
                                 <Toast>
                                    <Toast.Header>
                                       <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                          <rect width="100%" height="100%" fill="#007aff"></rect>
                                       </svg>
                                       <strong className="mr-auto">Bootstrap</strong>
                                       <small className="text-muted">2 seconds ago</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                       Heads up, toasts will stack automatically
                                    </Toast.Body>
                                 </Toast>
                              </div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Notifications</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen5(!open5)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open5}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<Toast className="bg-primary text-white border-0 rounded p-2">
   <Toast.Header className="bg-primary text-white" closeButton={false}>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#fff"></rect>
      </svg>
      <strong className="mr-auto text-white">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
      </button>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
   </Toast>
   <Toast className="bg-success text-white border-0 rounded p-2 mt-3">
   <Toast.Header className="bg-success text-white" closeButton={false}>
      <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
         <rect width="100%" height="100%" fill="#fff"></rect>
      </svg>
      <strong className="mr-auto text-white">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">×</span>
      </button>
   </Toast.Header>
   <Toast.Body>
      Hello, world! This is a toast message.
   </Toast.Body>
   </Toast>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>
                        <Toast className="bg-primary text-white border-0 rounded p-2">
                           <Toast.Header className="bg-primary text-white" closeButton={false}>
                              <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#fff"></rect>
                              </svg>
                              <strong className="mr-auto text-white">Bootstrap</strong>
                              <small>11 mins ago</small>
                              <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">×</span>
                              </button>
                           </Toast.Header>
                           <Toast.Body>
                              Hello, world! This is a toast message.
                           </Toast.Body>
                        </Toast>
                        <Toast className="bg-success text-white border-0 rounded p-2 mt-3">
                           <Toast.Header className="bg-success text-white" closeButton={false}>
                              <svg className="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                 <rect width="100%" height="100%" fill="#fff"></rect>
                              </svg>
                              <strong className="mr-auto text-white">Bootstrap</strong>
                              <small>11 mins ago</small>
                              <button type="button" className="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">
                              <span aria-hidden="true">×</span>
                              </button>
                           </Toast.Header>
                           <Toast.Body>
                              Hello, world! This is a toast message.
                           </Toast.Body>
                        </Toast>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiNotifications;