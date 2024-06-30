import React,{ useState } from 'react'
import { Container, Row, Col, Breadcrumb, Collapse} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const UiBreadcrumbs = () =>{

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
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb</h4>
                           </Card.Header.Title>
                           <Card.Header.Action>
                              <i type="button" onClick={()=> setOpen(!open)} >
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
{`<Breadcrumb>
   <Breadcrumb.Item active>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
   <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
   <Breadcrumb.Item active>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
   <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
   <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
   <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
                                 `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
                              <Breadcrumb>
                                 <Breadcrumb.Item active>Home</Breadcrumb.Item>
                              </Breadcrumb>
                              <Breadcrumb>
                                 <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                 <Breadcrumb.Item active>Library</Breadcrumb.Item>
                              </Breadcrumb>
                              <Breadcrumb>
                                 <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                 <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                 <Breadcrumb.Item active>Data</Breadcrumb.Item>
                              </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb With Icon</h4>
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
{`<Breadcrumb>
   <Breadcrumb.Item active className="align-items-center"><i className="ri-home-4-line mr-2 float-left"></i>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
      <Breadcrumb.Item href="#" className="align-items-center"><i className="ri-home-4-line  pt-1 mr-2 float-left"></i>Home</Breadcrumb.Item>
      <Breadcrumb.Item active >Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb>
      <Breadcrumb.Item href="#" ><i className="ri-home-4-line pt-1 mr-2 float-left"></i>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#" >Library</Breadcrumb.Item>
      <Breadcrumb.Item active >Data</Breadcrumb.Item>
</Breadcrumb>
                                    `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with Icon</p>
                           <Breadcrumb>
                              <Breadcrumb.Item active className="align-items-center"><i className="ri-home-4-line mr-2 float-left"></i>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb>
                              <Breadcrumb.Item href="#" className="align-items-center"><i className="ri-home-4-line  pt-1 mr-2 float-left"></i>Home</Breadcrumb.Item>
                              <Breadcrumb.Item active >Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb>
                              <Breadcrumb.Item href="#" ><i className="ri-home-4-line pt-1 mr-2 float-left"></i>Home</Breadcrumb.Item>
                              <Breadcrumb.Item href="#" >Library</Breadcrumb.Item>
                              <Breadcrumb.Item active >Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb</h4>
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
                                    <kbd className="bg-dark"><pre id="breadcrumb2" className="text-white"><code>
{`<Breadcrumb bsPrefix="breadcrumb bg-primary">
   <Breadcrumb.Item className="text-white" active>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb bg-primary">
   <li className="breadcrumb-item"><Link to="/" onClick={e => e.preventDefault()} className="text-white">Home</Link></li>
   <Breadcrumb.Item className="text-white" active>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb bg-primary md-0">
   <li className="breadcrumb-item"><Link to={"/"}  onClick={ e => e.preventDefault()} className="text-white">Home</Link></li>
   <li className="breadcrumb-item"><Link to={"/"}  onClick={ e => e.preventDefault()} className="text-white">Library</Link></li>
   <Breadcrumb.Item className="text-white" active>Data</Breadcrumb.Item>
</Breadcrumb>
                                    `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>use class <code>.breadcrumb .bg-primary</code></p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item className="text-white" active>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <li className="breadcrumb-item"><Link to="/" onClick={e => e.preventDefault()} className="text-white">Home</Link></li>
                              <Breadcrumb.Item className="text-white" active>Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary md-0">
                              <li className="breadcrumb-item"><Link to={"/"}  onClick={ e => e.preventDefault()} className="text-white">Home</Link></li>
                              <li className="breadcrumb-item"><Link to={"/"}  onClick={ e => e.preventDefault()} className="text-white">Library</Link></li>
                              <Breadcrumb.Item className="text-white" active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb With Icon</h4>
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
{`
      <Breadcrumb bsPrefix="breadcrumb bg-primary">
         <Breadcrumb.Item className="text-white" active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb bsPrefix="breadcrumb bg-primary">
         <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
         <Breadcrumb.Item className="text-white" active>Library</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb bsPrefix="breadcrumb bg-primary md-0">
         <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
         <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white">Library</Link></li>
         <Breadcrumb.Item className="text-white" active>Data</Breadcrumb.Item>
      </Breadcrumb>
                                 `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <Breadcrumb.Item className="text-white" active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary">
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
                              <Breadcrumb.Item className="text-white" active>Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb bg-primary md-0">
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-white">Library</Link></li>
                              <Breadcrumb.Item className="text-white" active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb With Icon</h4>
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
{`<Breadcrumb bsPrefix="breadcrumb iq-bg-primary">
   <Breadcrumb.Item  active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb iq-bg-primary">
   <Breadcrumb.Item href="#"><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
   <Breadcrumb.Item  active>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb iq-bg-primary mb-0">
   <Breadcrumb.Item href="#"><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
   <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
   <Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
                                 `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>use class <code>.breadcrumb .iq-bg-primary</code></p>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-primary">
                              <Breadcrumb.Item  active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-primary">
                              <Breadcrumb.Item href="#"><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
                              <Breadcrumb.Item  active>Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-primary mb-0">
                              <Breadcrumb.Item href="#"><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
                              <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                              <Breadcrumb.Item  active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
                  <Col sm="12" lg="6">
                     <Card>
                        <Card.Header>
                           <Card.Header.Title>
                              <h4 className="card-title">Breadcrumb With Icon</h4>
                           </Card.Header.Title>
                           <Card.Header.Action>
                              <i type="button" onClick={ () => setOpen5(!open5)}>
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
{`<Breadcrumb bsPrefix="breadcrumb iq-bg-danger">
   <Breadcrumb.Item  active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb iq-bg-danger">
   <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
   <Breadcrumb.Item  active>Library</Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb bsPrefix="breadcrumb iq-bg-danger mb-0">
   <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
   <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger">Library</Link></li>
   <Breadcrumb.Item  active>Data</Breadcrumb.Item>
</Breadcrumb>
                                    `}
                                    </code></pre></kbd>
                                 </Card>
                              </div>
                           </Collapse>
                           <p>use class <code>.breadcrumb .iq-bg-danger</code></p>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-danger">
                              <Breadcrumb.Item  active><i className="ri-home-4-line mr-1 float-left"></i>Home</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-danger">
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
                              <Breadcrumb.Item  active>Library</Breadcrumb.Item>
                           </Breadcrumb>
                           <Breadcrumb bsPrefix="breadcrumb iq-bg-danger mb-0">
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger"><i className="ri-home-4-line mr-1 float-left"></i>Home</Link></li>
                              <li className="breadcrumb-item"><Link to="/"  onClick={ e => e.preventDefault()} className="text-danger">Library</Link></li>
                              <Breadcrumb.Item  active>Data</Breadcrumb.Item>
                           </Breadcrumb>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
            </Container>
         </>
   )
}

export default UiBreadcrumbs;