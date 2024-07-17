import React , { useState } from 'react'
import { Container, Row, Col, Collapse, OverlayTrigger, Button, Popover } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiPopOvers = () =>{
   
   //  Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)
   const[open6,setOpen6]=useState(false)
   
   return(
      <>
         <Container fluid className="ui-elements">
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Popovers</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen(!open)}>
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
{`<OverlayTrigger trigger="click" placement="right" overlay={
   <Popover id="popover-basic">
   <Popover.Title as="h3">Popover right</Popover.Title>
   <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
   </Popover.Content>
   </Popover>
}>
   <Button  size="lg" variant="danger mt-2">Click to toggle popover</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Title as="h3">Popover right</Popover.Title>
                              <Popover.Content>
                                 And here's some amazing content. It's very engaging.
                                 Right?
                              </Popover.Content>
                           </Popover>
                           }>
                           <Button  size="lg" variant="danger mt-2">Click to toggle popover</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Dismiss on next click</h4>
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
{`<OverlayTrigger trigger="click" placement="right" overlay={
   <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>And here's some amazing content. It's very engaging. Right?</Popover.Content>
   </Popover>
   }>
   <Button href="#" variant="danger text-white mt-2">Click to toggle popover</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Title as="h3">Popover right</Popover.Title>
                              <Popover.Content>And here's some amazing content. It's very engaging. Right?</Popover.Content>
                           </Popover>
                           }>
                           <Button href="#" variant="danger text-white mt-2">Click to toggle popover</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Disabled elements</h4>
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
{`<OverlayTrigger trigger="click" placement="right" overlay={
   <Popover id="popover-basic">
      <Popover.Content>Disabled popover</Popover.Content>
   </Popover>
   }>
   <span className="d-inline-block">
      <Button disabled variant="primary mt-2"  style={{pointerEvents: "none"}}>Disabled button</Button>
   </span>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Disabled popover</Popover.Content>
                           </Popover>
                           }>
                           <span className="d-inline-block">
                              <Button disabled variant="primary mt-2"  style={{pointerEvents: "none"}}>Disabled button</Button>
                           </span>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Hover elements</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<OverlayTrigger  placement="right" overlay={
   <Popover id="popover-basic">
      <Popover.Content>Disabled popover</Popover.Content>
   </Popover>
   }>
   <span className="d-inline-block">
      <Button disabled variant="primary mt-2"  style={{pointerEvents: "none"}}>Disabled button</Button>
   </span>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
                        <OverlayTrigger  placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Disabled popover</Popover.Content>
                           </Popover>
                           }>
                           <span className="d-inline-block">
                              <Button disabled variant="primary mt-2"  style={{pointerEvents: "none"}}>Disabled button</Button>
                           </span>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Four directions</h4>
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
{`<OverlayTrigger trigger="click" placement="top" overlay={
   <Popover id="popover-basic">
      <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
   </Popover>
   }>
   <Button  variant="secondary mt-2">Popover on top</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                        <OverlayTrigger trigger="click" placement="top" overlay={
                              <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="secondary mt-2" className="mr-1">Popover on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="secondary mt-2" className="mr-1">Popover on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                              <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="secondary mt-2" className="mr-1">Popover on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="secondary mt-2" className="mr-1">Popover on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Popovers With Color</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen5(!open5)}>
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
{`<OverlayTrigger trigger="click" placement="top" overlay={
   <Popover id="popover-basic">
      <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
   </Popover>
   }>
   <Button  variant="primary mt-2">Popover on top</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                        <OverlayTrigger trigger="click" placement="top" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="primary mt-2" className="mr-1">Popover on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="success mt-2" className="mr-1">Popover on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="danger mt-2" className="mr-1">Popover on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button  variant="info mt-2" className="mr-1">Popover on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Popovers With Color</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>
{`<OverlayTrigger trigger="click" placement="top" overlay={
   <Popover id="popover-basic">
   <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
   </Popover>
}>
   <Button  variant=" iq-bg-primary mt-2">Popover on top</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p className="mb-2">Four options are available: top, right, bottom, and left aligned.</p>
                        <OverlayTrigger trigger="click" placement="top" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button className="btn btn-secondary mr-1" variant=" iq-bg-primary mt-2">Popover on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="right" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button className="btn btn-secondary mr-1" variant=" iq-bg-success mt-2">Popover on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button className="btn btn-secondary mr-1" variant=" iq-bg-danger mt-2">Popover on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger trigger="click" placement="left" overlay={
                           <Popover id="popover-basic">
                              <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
                           </Popover>
                           }>
                           <Button className="btn btn-secondary mr-1" variant=" iq-bg-info mt-2">Popover on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiPopOvers;