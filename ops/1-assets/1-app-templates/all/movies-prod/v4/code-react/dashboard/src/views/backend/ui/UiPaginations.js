import React , { useState } from 'react'
import { Container, Row, Col, Pagination, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'
const UiPaginations = () =>{

   //  Collapse state
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
                           <h4 className="card-title">Pagination Examples</h4>
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
{`<Pagination className="mb-0">
   <Pagination.Item>Previous</Pagination.Item>
   <Pagination.Item>1</Pagination.Item>
   <Pagination.Item>2</Pagination.Item>
   <Pagination.Item>3</Pagination.Item>
   <Pagination.Item>Next</Pagination.Item>
</Pagination>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                        <nav aria-label="Page navigation example">
                           <Pagination className="mb-0">
                              <Pagination.Item>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Disabled and active states</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={()=> setOpen1(!open1)}>
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
{`<nav aria-label="...">
   <Pagination>
      <Pagination.Item disabled>Previous</Pagination.Item>
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item active>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
   </Pagination>
</nav>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>
                        <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabIndex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>
                        <nav aria-label="...">
                           <Pagination>
                              <Pagination.Item disabled>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item active>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                        <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
                        <nav aria-label="...">
                           <Pagination>
                              <Pagination.Item disabled>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item active>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Pagination With Color</h4>
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
{`<nav aria-label="Page navigation example">
   <Pagination>
      <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>Previous</Link></li>
      <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>1</Link></li>
      <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>2</Link></li>
      <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>3</Link></li>
      <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>Next</Link></li>
   </Pagination>
</nav>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                        <nav aria-label="Page navigation example">
                           <ul className="pagination">
                              <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>Previous</Link></li>
                              <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>1</Link></li>
                              <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>2</Link></li>
                              <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>3</Link></li>
                              <li className="page-item"><Link className="page-link border-primary bg-primary text-white" to="/" onClick={e =>e.preventDefault()}>Next</Link></li>
                           </ul>
                        </nav>
                        <nav aria-label="Page navigation example">
                           <ul className="pagination">
                              <li className="page-item"><Link className="page-link border-success bg-success text-white" to="/" onClick={e =>e.preventDefault()}>Previous</Link></li>
                              <li className="page-item"><Link className="page-link border-success bg-success text-white" to="/" onClick={e =>e.preventDefault()}>1</Link></li>
                              <li className="page-item"><Link className="page-link border-success bg-success text-white" to="/" onClick={e =>e.preventDefault()}>2</Link></li>
                              <li className="page-item"><Link className="page-link border-success bg-success text-white" to="/" onClick={e =>e.preventDefault()}>3</Link></li>
                              <li className="page-item"><Link className="page-link border-success bg-success text-white" to="/" onClick={e =>e.preventDefault()}>Next</Link></li>
                           </ul>
                        </nav>
                        <nav aria-label="Page navigation example">
                           <ul className="pagination mb-0 ">
                              <li className="page-item"><Link className="page-link border-info bg-info text-white" to="/" onClick={e =>e.preventDefault()}>Previous</Link></li>
                              <li className="page-item"><Link className="page-link border-info bg-info text-white" to="/" onClick={e =>e.preventDefault()}>1</Link></li>
                              <li className="page-item"><Link className="page-link border-info bg-info text-white" to="/" onClick={e =>e.preventDefault()}>2</Link></li>
                              <li className="page-item"><Link className="page-link border-info bg-info text-white" to="/" onClick={e =>e.preventDefault()}>3</Link></li>
                              <li className="page-item"><Link className="page-link border-info bg-info text-white" to="/" onClick={e =>e.preventDefault()}>Next</Link></li>
                           </ul>
                        </nav>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="6">            
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Working with icons</h4>
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
{`<Pagination className="mb-0">
   <Pagination.First />
   <Pagination.Item>1</Pagination.Item>
   <Pagination.Item>2</Pagination.Item>
   <Pagination.Item>3</Pagination.Item>
   <Pagination.Last />
</Pagination>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
                        <nav aria-label="Page navigation example">
                           <Pagination className="mb-0">
                              <Pagination.First />
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Last />
                           </Pagination>
                        </nav>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Pagination Sizing</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button"  onClick={() => setOpen4(!open4)}>
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
{`<nav aria-label="...">
   <Pagination size="lg">
      <Pagination.Item active>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
   </Pagination>
</nav>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
                        <nav aria-label="...">
                           <Pagination size="lg">
                              <Pagination.Item active>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                           </Pagination>
                        </nav>
                        <nav aria-label="...">
                           <Pagination>
                              <Pagination.Item active>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                           </Pagination>
                        </nav>
                        <nav aria-label="...">
                           <Pagination size="sm">
                              <Pagination.Item active>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                           </Pagination>
                        </nav>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Alignment</h4>
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
{`<nav aria-label="Page navigation example">
   <Pagination>
      <Pagination.Item disabled>Previous</Pagination.Item>
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item>Next</Pagination.Item>
   </Pagination>
</nav>
                              `}
                                 </code></pre></kbd>
                              </Card>
                           </div>
                        </Collapse>
                        <p>Change the alignment of pagination components with <Link to="/docs/4.3/utilities/flex/">flexbox utilities</Link>.</p>
                        <h6>left</h6>
                        <nav aria-label="Page navigation example">
                           <Pagination>
                              <Pagination.Item disabled>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                        <h6 className="text-center">Center</h6>
                        <nav aria-label="Page navigation example">
                           <Pagination className="justify-content-center">
                              <Pagination.Item disabled>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                        <h6 className="text-right">Right</h6>
                        <nav aria-label="Page navigation example">
                           <Pagination className="justify-content-end">
                              <Pagination.Item disabled>Previous</Pagination.Item>
                              <Pagination.Item>1</Pagination.Item>
                              <Pagination.Item>2</Pagination.Item>
                              <Pagination.Item>3</Pagination.Item>
                              <Pagination.Item>Next</Pagination.Item>
                           </Pagination>
                        </nav>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiPaginations;