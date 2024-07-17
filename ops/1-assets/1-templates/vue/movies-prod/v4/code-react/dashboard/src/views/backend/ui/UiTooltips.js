import React, { useState } from 'react'
import { Container ,Row, Col, Collapse, OverlayTrigger, Button, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'
const UiTooltips = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   
   return(
      <>
         <Container fluid className="ui-elements">
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tooltips</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<OverlayTrigger  placement="top" overlay={
   <Tooltip >
      Tooltip on top
   </Tooltip>
   }>
   <Button variant="secondary mt-2">Tooltip on top</Button>
</OverlayTrigger>
<OverlayTrigger  placement="right" overlay={
   <Tooltip >
      Tooltip on right
   </Tooltip>
   }>
   <Button variant="secondary mt-2">Tooltip on right</Button>
</OverlayTrigger>
<OverlayTrigger  placement="bottom" overlay={
   <Tooltip >
      Tooltip on bottom
   </Tooltip>
   }>
   <Button variant="secondary mt-2">Tooltip on bottom</Button>
</OverlayTrigger>
<OverlayTrigger  placement="left" overlay={
   <Tooltip >
      Tooltip on left
   </Tooltip>
   }>
   <Button variant="secondary mt-2">Tooltip on left</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-placement attribute specifies the tooltip position.</p>
                        <OverlayTrigger  placement="top" overlay={
                              <Tooltip >
                                 Tooltip on top
                              </Tooltip>
                              }>
                           <Button variant="secondary mt-2" className="mr-1">Tooltip on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="right" overlay={
                           <Tooltip >
                              Tooltip on right
                           </Tooltip>
                           }>
                           <Button variant="secondary mt-2" className="mr-1">Tooltip on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="bottom" overlay={
                           <Tooltip >
                              Tooltip on bottom
                           </Tooltip>
                           }>
                           <Button variant="secondary mt-2" className="mr-1">Tooltip on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="left" overlay={
                           <Tooltip >
                              Tooltip on left
                           </Tooltip>
                           }>
                           <Button variant="secondary mt-2" className="mr-1">Tooltip on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Disabled elements</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<OverlayTrigger   overlay={
   <Tooltip >
      Disabled tooltip
   </Tooltip>
   }>
   <span className="d-inline-block">
      <Button disabled variant="primary" style={{pointerEvents: "none"}}>Disabled button</Button>
   </span>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabIndex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
                        <OverlayTrigger   overlay={
                           <Tooltip >
                              Disabled tooltip
                           </Tooltip>
                           }>
                           <span className="d-inline-block">
                              <Button disabled variant="primary" style={{pointerEvents: "none"}}>Disabled button</Button>
                           </span>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tooltips</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<OverlayTrigger  placement="top" overlay={
   <Tooltip >
      Tooltip on top
   </Tooltip>
   }>
   <Button variant="primary mt-2">Tooltip on top</Button>
</OverlayTrigger>
<OverlayTrigger  placement="right" overlay={
   <Tooltip >
      Tooltip on right
   </Tooltip>
   }>
   <Button variant="success mt-2">Tooltip on right</Button>
</OverlayTrigger>
<OverlayTrigger  placement="bottom" overlay={
   <Tooltip >
      Tooltip on bottom
   </Tooltip>
   }>
   <Button variant="danger mt-2">Tooltip on bottom</Button>
</OverlayTrigger>
<OverlayTrigger  placement="left" overlay={
   <Tooltip >
      Tooltip on left
   </Tooltip>
   }>
   <Button variant="info mt-2">Tooltip on left</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using background colors</p>
                        <OverlayTrigger  placement="top" overlay={
                           <Tooltip >
                              Tooltip on top
                           </Tooltip>
                           }>
                           <Button variant="primary mt-2" className="mr-1">Tooltip on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="right" overlay={
                           <Tooltip >
                              Tooltip on right
                           </Tooltip>
                           }>
                           <Button variant="success mt-2" className="mr-1">Tooltip on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="bottom" overlay={
                           <Tooltip >
                              Tooltip on bottom
                           </Tooltip>
                           }>
                           <Button variant="danger mt-2" className="mr-1">Tooltip on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="left" overlay={
                           <Tooltip >
                              Tooltip on left
                           </Tooltip>
                           }>
                           <Button variant="info mt-2" className="mr-1">Tooltip on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Tooltips</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<OverlayTrigger  placement="top" overlay={
   <Tooltip >
      Tooltip on top
   </Tooltip>
   }>
   <Button variant=" bg-primary-light iq-bg-primary mt-2">Tooltip on top</Button>
</OverlayTrigger>
<OverlayTrigger  placement="right" overlay={
   <Tooltip >
      Tooltip on right
   </Tooltip>
   }>
   <Button variant=" iq-bg-success mt-2">Tooltip on right</Button>
</OverlayTrigger>
<OverlayTrigger  placement="bottom" overlay={
   <Tooltip >
      Tooltip on bottom
   </Tooltip>
   }>
   <Button variant=" iq-bg-danger mt-2">Tooltip on bottom</Button>
</OverlayTrigger>
<OverlayTrigger  placement="left" overlay={
   <Tooltip >
      Tooltip on left
   </Tooltip>
   }>
   <Button variant=" iq-bg-info mt-2">Tooltip on left</Button>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using Light background colors</p>
                        <OverlayTrigger  placement="top" overlay={
                           <Tooltip >
                              Tooltip on top
                           </Tooltip>
                           }>
                           <Button variant=" bg-primary-light iq-bg-primary mt-2" className="mr-1">Tooltip on top</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="right" overlay={
                           <Tooltip >
                              Tooltip on right
                           </Tooltip>
                           }>
                           <Button variant=" iq-bg-success mt-2" className="mr-1">Tooltip on right</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="bottom" overlay={
                           <Tooltip >
                              Tooltip on bottom
                           </Tooltip>
                           }>
                           <Button variant=" iq-bg-danger mt-2" className="mr-1">Tooltip on bottom</Button>
                        </OverlayTrigger>
                        <OverlayTrigger  placement="left" overlay={
                           <Tooltip >
                              Tooltip on left
                           </Tooltip>
                           }>
                           <Button variant=" iq-bg-info mt-2" className="mr-1">Tooltip on left</Button>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Hover elements</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button" onClick={() => setOpen4(!open4)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open4}>
                           <div>
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
<OverlayTrigger  overlay={
   <Tooltip >
      Some tooltip text!
      </Tooltip>
   }>
   <Link to="/" onClick={ e=>{ e.preventDefault() } }>Hover over me</Link>
</OverlayTrigger>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Hover over the buttons below to see the tooltip.</p>
                        <OverlayTrigger  overlay={
                           <Tooltip >
                              Some tooltip text!
                           </Tooltip>
                           }>
                           <Link to="/" onClick={ e=>{ e.preventDefault() } }>Hover over me</Link>
                        </OverlayTrigger>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiTooltips;