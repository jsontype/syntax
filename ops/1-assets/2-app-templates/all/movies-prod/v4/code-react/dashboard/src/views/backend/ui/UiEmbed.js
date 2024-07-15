import React, { useState } from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import  Card from '../../../components/Card'
const UiEmbed = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col lg="6" md="6" sm="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Embeds Video</h4>
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
                           <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`
   <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="iframe1" allowFullScreen></iframe>
   </div>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Wrap any embed like an <code className="highlighter-rouge">&lt;iframe&gt;</code> in a parent element with <code className="highlighter-rouge">.embed-responsive</code> and an aspect ratio. The <code className="highlighter-rouge">.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>
                        <div className="embed-responsive embed-responsive-16by9">
                           <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="iframe1" allowFullScreen></iframe>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Responsive Aspect ratios 4:3</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
   <div className="embed-responsive embed-responsive-4by3">
      <iframe className="embed-responsive-item" title="iframe2" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
   </div>`}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                        <div className="embed-responsive embed-responsive-4by3">
                           <iframe className="embed-responsive-item" title="iframe2" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6" md="6" sm="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Responsive Aspect ratios 21:9</h4>
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
                              <Card><kbd className="bg-dark"><pre className="text-white"><code>{`
   <div className="embed-responsive embed-responsive-21by9">
      <iframe title="iframe3" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
   </div>`}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                        <div className="embed-responsive embed-responsive-21by9">
                           <iframe title="iframe3" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Responsive Aspect ratios 1:1</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() =>setOpen3(!open3)}>
                              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                           </i>
                        </Card.Header.Action>
                     </Card.Header>
                     <Card.Body>
                        <Collapse in={open3}>
                           <div>
                              <Card><kbd className="bg-dark"><pre  className="text-white"><code>{`
   <div className="embed-responsive embed-responsive-1by1">
      <iframe title="ifram4" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
   </div>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>
                        <div className="embed-responsive embed-responsive-1by1">
                           <iframe title="ifram4" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
        </>
    )
}

export default UiEmbed;