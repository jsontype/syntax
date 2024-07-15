import React , { useState } from 'react'
import { Container, Row, Col, Collapse, Tab, Nav } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiTabs = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   const[open6,setOpen6]=useState(false)
   const[open7,setOpen7]=useState(false)
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Tabs</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab">
   <Nav variant="tabs">
      <Nav.Item>
         <Nav.Link eventKey="home-tab">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
                        <Tab.Container defaultActiveKey="home-tab">
                           <Nav variant="tabs">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Tabs Style 3</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab-two">
   <Nav variant="tabs">
      <Nav.Item>
         <Nav.Link eventKey="home-tab-two">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab-two">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab-two">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab-two">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab-two">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab-two">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                        <Tab.Container defaultActiveKey="home-tab-two">
                           <Nav variant="tabs">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab-two">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab-two">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab-two">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab-two">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab-two">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab-two">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tabs Vertical Pills</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen2(!open2)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open2}>
                           <div>
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="v-pills-home-tab">
   <Row>
      <Col sm="3">
         <Nav variant="pills flex-column text-center">
            <Nav.Item>
               <Nav.Link eventKey="v-pills-home-tab">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="v-pills-profile-tab">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="v-pills-messages-tab">Messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
               <Nav.Link eventKey="v-pills-settings-tab">Settings</Nav.Link>
            </Nav.Item>
         </Nav>
      </Col>
      <Col sm="9">
         <Tab.Content className="mt-0">
            <Tab.Pane eventKey="v-pills-home-tab">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="v-pills-profile-tab">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="v-pills-messages-tab">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="v-pills-settings-tab">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Tab.Pane>
         </Tab.Content>
      </Col>
   </Row>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>
                        <Tab.Container defaultActiveKey="v-pills-home-tab">
                           <Row>
                              <Col sm="3">
                                 <Nav variant="pills flex-column text-center">
                                    <Nav.Item>
                                       <Nav.Link eventKey="v-pills-home-tab">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                       <Nav.Link eventKey="v-pills-profile-tab">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                       <Nav.Link eventKey="v-pills-messages-tab">Messages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                       <Nav.Link eventKey="v-pills-settings-tab">Settings</Nav.Link>
                                    </Nav.Item>
                                 </Nav>
                              </Col>
                              <Col sm="9">
                                 <Tab.Content className="mt-0">
                                    <Tab.Pane eventKey="v-pills-home-tab">
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="v-pills-profile-tab">
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="v-pills-messages-tab">
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="v-pills-settings-tab">
                                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </Tab.Pane>
                                 </Tab.Content>
                              </Col>
                           </Row>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tabs Justify Center</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen3(!open3)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open3}>
                           <div>
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab-justify">
   <Nav variant="tabs justify-content-center">
      <Nav.Item>
         <Nav.Link eventKey="home-tab-justify">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab-justify">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab-justify">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab-justify">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab-justify">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab-justify">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Centered with <code>.justify-content-center</code></p>
                        <Tab.Container defaultActiveKey="home-tab-justify">
                           <Nav variant="tabs justify-content-center">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab-justify">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab-justify">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab-justify">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab-justify">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab-justify">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab-justify">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>            
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Tabs Style 2</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab-pills">
   <Nav variant="pills mb-3">
      <Nav.Item>
         <Nav.Link eventKey="home-tab-pills">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab-pills">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab-pills">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab-pills">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab-pills">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab-pills">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
                        <Tab.Container defaultActiveKey="home-tab-pills">
                           <Nav variant="pills mb-3">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab-pills">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab-pills">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab-pills">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab-pills">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab-pills">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab-pills">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Basic Tabs Style 4</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab-three">
   <Nav variant="tabs">
      <Nav.Item>
         <Nav.Link eventKey="home-tab-three">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab-three">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab-three">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab-three">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab-three">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab-three">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                        <Tab.Container defaultActiveKey="home-tab-three">
                           <Nav variant="tabs">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab-three">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab-three">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab-three">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab-three">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab-three">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab-three">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tabs Fill and justify</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen6(!open6)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open6}>
                           <div>
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="pills-home-tab-fill">
   <Nav variant="pills mb-3" fill>
      <Nav.Item>
         <Nav.Link eventKey="pills-home-tab-fill">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="pills-profile-tab-fill">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="pills-contact-tab-fill">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="pills-home-tab-fill">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="pills-profile-tab-fill">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="pills-contact-tab-fill">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
                        <Tab.Container defaultActiveKey="pills-home-tab-fill">
                           <Nav variant="pills mb-3" fill>
                              <Nav.Item>
                                 <Nav.Link eventKey="pills-home-tab-fill">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="pills-profile-tab-fill">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="pills-contact-tab-fill">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="pills-home-tab-fill">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="pills-profile-tab-fill">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="pills-contact-tab-fill">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tabs Justify Right</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen7(!open7)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open7}>
                           <div>
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<Tab.Container defaultActiveKey="home-tab-end">
   <Nav variant="tabs justify-content-end">
      <Nav.Item>
         <Nav.Link eventKey="home-tab-end">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="profile-tab-end">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
         <Nav.Link eventKey="contact-tab-end">Contact</Nav.Link>
      </Nav.Item>
   </Nav>
   <Tab.Content>
      <Tab.Pane eventKey="home-tab-end">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="profile-tab-end">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
      <Tab.Pane eventKey="contact-tab-end">
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </Tab.Pane>
   </Tab.Content>
</Tab.Container>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Right-aligned with <code>.justify-content-end</code>.</p>
                        <Tab.Container defaultActiveKey="home-tab-end">
                           <Nav variant="tabs justify-content-end">
                              <Nav.Item>
                                 <Nav.Link eventKey="home-tab-end">Home</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="profile-tab-end">Profile</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="contact-tab-end">Contact</Nav.Link>
                              </Nav.Item>
                           </Nav>
                           <Tab.Content>
                              <Tab.Pane eventKey="home-tab-end">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="profile-tab-end">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                              <Tab.Pane eventKey="contact-tab-end">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </Tab.Pane>
                           </Tab.Content>
                        </Tab.Container>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiTabs;