import React , { useState } from 'react'
import { Container, Row, Col, Collapse, ProgressBar } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiProgressBars = () =>{

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
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Examples</h4>
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
                              <Card><kbd className="bg-dark"><pre  className="text-white"><code>
{`<ProgressBar className="mb-3" />
<ProgressBar className="mb-3" now={25} />
<ProgressBar className="mb-3" now={50} />
<ProgressBar className="mb-3" now={75} />
<ProgressBar  now={100} />
`}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                        <ul>
                           <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
                           <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
                           <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
                           <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
                        </ul>
                        <p>Put that all together, and you have the following examples.</p>
                        <ProgressBar className="mb-3" />
                        <ProgressBar className="mb-3" now={25} />
                        <ProgressBar className="mb-3" now={50} />
                        <ProgressBar className="mb-3" now={75} />
                        <ProgressBar  now={100} />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Height</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i  type="button"  onClick={() => setOpen1(!open1)}>
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
   <ProgressBar className="mb-3" now={25} label={"25%"} style={{height :'3px'}} />
   <ProgressBar className="mb-3" now={50} label={"50%"} style={{height :'10px'}} />
   <ProgressBar className="mb-3" now={75} label={"75%"} style={{height :'15px'}} />
   <ProgressBar className="mb-3" now={99} label={"99%"} style={{height :'20px'}} />
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
                        <ProgressBar className="mb-3" now={25} label={`25%`} style={{height :'3px'}} />
                        <ProgressBar className="mb-3" now={50} label={`50%`} style={{height :'10px'}} />
                        <ProgressBar className="mb-3" now={75} label={`75%`} style={{height :'15px'}} />
                        <ProgressBar className="mb-3" now={99} label={`99%`} style={{height :'20px'}} />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Animated stripes</h4>
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
{`<ProgressBar className="mb-3" now={75} animated striped />
<ProgressBar className="mb-3" variant="success" now={75} animated  striped />
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
                        <ProgressBar className="mb-3" now={75} animated striped />
                        <ProgressBar className="mb-3" variant="success" now={75} animated  striped />
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Labels</h4>
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
{`<ProgressBar className="mb-3" now={25} label={"25%"} />
<ProgressBar className="mb-3" now={50} label={"50%"} />
<ProgressBar className="mb-3" now={75} label={"75%"}  />
<ProgressBar className="mb-3" now={99} label={"99%"}  />
                           `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>
                        <ProgressBar className="mb-3" now={25} label={"25%"} />
                        <ProgressBar className="mb-3" now={50} label={"50%"} />
                        <ProgressBar className="mb-3" now={75} label={"75%"}  />
                        <ProgressBar className="mb-3" now={99} label={"99%"}  />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Backgrounds</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button"  onClick={() =>setOpen4(!open4)}>
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
{`<ProgressBar className="mb-3" variant="success" now={25}  />
<ProgressBar className="mb-3" variant="info" now={50}  />
<ProgressBar className="mb-3" variant="warning" now={75}   />
<ProgressBar className="mb-3" variant="danger" now={100}   />
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Use background utility classes to change the appearance of individual progress bars.</p>
                        <ProgressBar className="mb-3" variant="success" now={25}  />
                        <ProgressBar className="mb-3" variant="info" now={50}  />
                        <ProgressBar className="mb-3" variant="warning" now={75}   />
                        <ProgressBar className="mb-3" variant="danger" now={100}   />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Multiple bars</h4>
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
{`<ProgressBar>
<ProgressBar  now={15}  />
<ProgressBar variant="success" now={30}  />
<ProgressBar variant="info" now={20}  />
</ProgressBar>
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Include multiple progress bars in a progress component if you need.</p>
                        <ProgressBar>
                        <ProgressBar  now={15}  />
                        <ProgressBar variant="success" now={30}  />
                        <ProgressBar variant="info" now={20}  />
                        </ProgressBar>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Striped</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() =>  setOpen6(!open6)}>
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
{`<ProgressBar animated className="mb-3" now={10} striped />
<ProgressBar animated className="mb-3" now={25} variant="success" striped />
<ProgressBar animated className="mb-3" now={50} variant="info" striped />
<ProgressBar animated className="mb-3" now={75} variant="warning" striped />
<ProgressBar animated className="mb-3" now={100} variant="danger" striped />
                              `}
                              </code></pre></kbd></Card>
                           </div>
                        </Collapse>
                        <p>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</p>
                        <ProgressBar animated className="mb-3" now={10} striped />
                        <ProgressBar animated className="mb-3" now={25} variant="success" striped />
                        <ProgressBar animated className="mb-3" now={50} variant="info" striped />
                        <ProgressBar animated className="mb-3" now={75} variant="warning" striped />
                        <ProgressBar animated className="mb-3" now={100} variant="danger" striped />
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiProgressBars;