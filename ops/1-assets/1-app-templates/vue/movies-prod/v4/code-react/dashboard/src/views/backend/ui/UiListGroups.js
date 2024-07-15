import React , { useState } from 'react'
import { Container, Row, Col, Collapse, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const UiListGroups = () =>{

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
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">List group</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={()=> setOpen(!open)}>
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
                                 <kbd className="bg-dark"><pre  className="text-white"><code>
{`<ListGroup>
   <ListGroup.Item>Cras justo odio</ListGroup.Item>
   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
   <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
                        <ListGroup>
                           <ListGroup.Item>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Disabled items</h4>
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
{`<ListGroup>
   <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
   <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>
                        <ListGroup>
                           <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Flush</h4>
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
{`<ListGroup  variant="flush">
   <ListGroup.Item>Cras justo odio</ListGroup.Item>
   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
   <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add <code className="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                        <ListGroup  variant="flush">
                           <ListGroup.Item>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Contextual classes</h4>
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
{`<ListGroup>
   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
   <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
   <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
   <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
   <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
   <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
   <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
   <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
</ListGroup>`}                   
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Use contextual classes to style list items with a stateful background and color.</p>
                        <ListGroup>
                           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item variant="primary">A simple primary list group item</ListGroup.Item>
                           <ListGroup.Item variant="secondary">A simple secondary list group item</ListGroup.Item>
                           <ListGroup.Item variant="success">A simple success list group item</ListGroup.Item>
                           <ListGroup.Item variant="danger">A simple danger list group item</ListGroup.Item>
                           <ListGroup.Item variant="warning">A simple warning list group item</ListGroup.Item>
                           <ListGroup.Item variant="info">A simple info list group item</ListGroup.Item>
                           <ListGroup.Item variant="light">A simple light list group item</ListGroup.Item>
                           <ListGroup.Item variant="dark">A simple dark list group item</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">With badges</h4>
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
{`<ListGroup>
   <ListGroup.Item variant=" d-flex justify-content-between align-items-center">
      Cras justo odio
      <span className="badge badge-primary badge-pill">14</span>
   </ListGroup.Item>
   <ListGroup.Item className=" d-flex justify-content-between align-items-center">
      Dapibus ac facilisis in
      <span className="badge badge-success badge-pill">2</span>
   </ListGroup.Item>
   <ListGroup.Item className=" d-flex justify-content-between align-items-center">
      Morbi leo risus
      <span className="badge badge-danger badge-pill">1</span>
   </ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/4.3/utilities/flex/">utilities</Link>.</p>
                        <ListGroup>
                           <ListGroup.Item variant=" d-flex justify-content-between align-items-center">
                              Cras justo odio
                              <span className="badge badge-primary badge-pill">14</span>
                           </ListGroup.Item>
                           <ListGroup.Item className=" d-flex justify-content-between align-items-center">
                              Dapibus ac facilisis in
                              <span className="badge badge-success badge-pill">2</span>
                           </ListGroup.Item>
                           <ListGroup.Item className=" d-flex justify-content-between align-items-center">
                              Morbi leo risus
                              <span className="badge badge-danger badge-pill">1</span>
                           </ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">With badges</h4>
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
{`<ListGroup>
   <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-primary">
      Cras justo odio
      <span className="badge badge-primary badge-pill">14</span>
   </ListGroup.Item>
   <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-success" >
      Dapibus ac facilisis in
      <span className="badge badge-success badge-pill">2</span>
   </ListGroup.Item>
   <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-danger">
      Morbi leo risus
      <span className="badge badge-danger badge-pill">1</span>
   </ListGroup.Item>
</ListGroup>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/4.3/utilities/flex/">utilities</Link>.</p>
                        <ListGroup>
                           <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-primary">
                              Cras justo odio
                              <span className="badge badge-primary badge-pill">14</span>
                           </ListGroup.Item>
                           <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-success" >
                              Dapibus ac facilisis in
                              <span className="badge badge-success badge-pill">2</span>
                           </ListGroup.Item>
                           <ListGroup.Item variant=" d-flex justify-content-between align-items-center iq-bg-danger">
                              Morbi leo risus
                              <span className="badge badge-danger badge-pill">1</span>
                           </ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">List Active</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() => setOpen6(!open6)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open6}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ListGroup>
   <ListGroup.Item active>Cras justo odio</ListGroup.Item>
   <ListGroup.Item>Dapibus ac faciListGroup.Itemsis in</ListGroup.Item>
   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
   <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
   <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
                        <ListGroup>
                           <ListGroup.Item active>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Dapibus ac faciListGroup.Itemsis in</ListGroup.Item>
                           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                           <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                           <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Links and buttons</h4>
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
                        <Collapse in={open7}>
                        <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ListGroup  defaultActiveKey="#link1">
   <ListGroup.Item action href="#link1">
   Cras justo odio
   </ListGroup.Item>
   <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item action href="#">Morbi leo risus</ListGroup.Item>
   <ListGroup.Item action href="#">Porta ac consectetur ac</ListGroup.Item>
   <ListGroup.Item action href="#" disabled>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>
                        <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
                        <ListGroup  defaultActiveKey="#link1">
                           <ListGroup.Item action href="#link1">
                           Cras justo odio
                           </ListGroup.Item>
                           <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item action href="#">Morbi leo risus</ListGroup.Item>
                           <ListGroup.Item action href="#">Porta ac consectetur ac</ListGroup.Item>
                           <ListGroup.Item action href="#" disabled>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Horizontal</h4>
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
                        <Collapse in={open8}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ListGroup horizontal>
   <ListGroup.Item>Cras justo odio</ListGroup.Item>
   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item>Morbi leo risus</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-|sm|md|lg|xl</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be combined with flush list groups.</strong></p>
                        <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>
                        <ListGroup horizontal>
                           <ListGroup.Item>Cras justo odio</ListGroup.Item>
                           <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Contextual classes Action</h4>
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
                        <Collapse in={open9}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ListGroup>
   <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
   <ListGroup.Item action href="#" variant="primary">A simple primary list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="secondary">A simple secondary list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="success">A simple success list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="danger">A simple danger list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="warning">A simple warning list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="info">A simple info list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="light">A simple light list group item</ListGroup.Item>
   <ListGroup.Item action href="#" variant="dark">A simple dark list group item</ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Use contextual classes to style list items with a stateful background and color.</p>
                        <ListGroup>
                           <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="primary">A simple primary list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="secondary">A simple secondary list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="success">A simple success list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="danger">A simple danger list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="warning">A simple warning list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="info">A simple info list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="light">A simple light list group item</ListGroup.Item>
                           <ListGroup.Item action href="#" variant="dark">A simple dark list group item</ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Custom content</h4>
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
                        <Collapse in={open10}>
                           <div>
                              <Card>
                                 <kbd className="bg-dark"><pre className="text-white"><code>
{`<ListGroup>
   <ListGroup.Item href="#" action active>
      <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1 text-white">List group item heading</h5>
         <small>3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
   </ListGroup.Item>
   <ListGroup.Item href="#" action>
      <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1">List group item heading</h5>
         <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small className="text-muted">Donec id elit non mi porta.</small>
   </ListGroup.Item>
   <ListGroup.Item href="#" action>
      <div className="d-flex w-100 justify-content-between">
         <h5 className="mb-1">List group item heading</h5>
         <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small className="text-muted">Donec id elit non mi porta.</small>
   </ListGroup.Item>
</ListGroup>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <Link to="/docs/4.3/utilities/flex/">flexbox utilities</Link>.</p>
                        <ListGroup>
                           <ListGroup.Item href="#" action active>
                              <div className="d-flex w-100 justify-content-between">
                                 <h5 className="mb-1 text-white">List group item heading</h5>
                                 <small>3 days ago</small>
                              </div>
                              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small>Donec id elit non mi porta.</small>
                           </ListGroup.Item>
                           <ListGroup.Item href="#" action>
                              <div className="d-flex w-100 justify-content-between">
                                 <h5 className="mb-1">List group item heading</h5>
                                 <small className="text-muted">3 days ago</small>
                              </div>
                              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small className="text-muted">Donec id elit non mi porta.</small>
                           </ListGroup.Item>
                           <ListGroup.Item href="#" action>
                              <div className="d-flex w-100 justify-content-between">
                                 <h5 className="mb-1">List group item heading</h5>
                                 <small className="text-muted">3 days ago</small>
                              </div>
                              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                              <small className="text-muted">Donec id elit non mi porta.</small>
                           </ListGroup.Item>
                        </ListGroup>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiListGroups;