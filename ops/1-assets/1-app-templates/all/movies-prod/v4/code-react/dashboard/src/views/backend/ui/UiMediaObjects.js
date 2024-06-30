import React , { useState } from 'react'
import { Container, Row, Col, Collapse, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

//img
import pageimg9  from '../../../assets/images/page-img/21.jpg'
import pageimg10 from '../../../assets/images/page-img/22.jpg'
import pageimg11 from '../../../assets/images/page-img/23.jpg'
import pageimg12 from '../../../assets/images/page-img/17.jpg'
import pageimg13 from '../../../assets/images/page-img/16.jpg'
import pageimg14 from '../../../assets/images/page-img/15.jpg'
import pageimg15 from '../../../assets/images/page-img/18.jpg'
import pageimg16 from '../../../assets/images/page-img/19.jpg'
import pageimg17 from '../../../assets/images/page-img/20.jpg'
import pageimg18 from '../../../assets/images/page-img/24.jpg'
import pageimg19 from '../../../assets/images/page-img/15.jpg'
import pageimg20 from '../../../assets/images/page-img/16.jpg'

const UiMediaObjects = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Equal-width multi-row</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() =>setOpen(!open)}>
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
{`<Media>
   <img src={pageimg14} className="mr-3 avatar-80 img-fluid rounded" alt="#" />
   <Media.Body>
      <h5 className="mb-1">Media heading</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media>
   <img src={pageimg13} className="mr-3 avatar-80 img-fluid rounded" alt="#" />
   <Media.Body>
      <h5 className="mb-1">Media heading</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      <Media className="mt-3">
         <Link className="mr-3" to="/" onClick={e => e.preventDefault()}>
         <img src={pageimg12} alt="#" className="avatar-80 img-fluid rounded" />
         </Link>
         <Media.Body>
            <h5 className="mb-1">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
         </Media.Body>
      </Media>
   </Media.Body>
</Media>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <Link to="/docs/4.3/utilities/display/">responsive display utilities</Link>.</p>
                        <Media>
                           <img src={pageimg14} className="mr-3 avatar-80 img-fluid" alt="#" />
                           <Media.Body>
                              <h5 className="mb-1">Media heading</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media>
                           <img src={pageimg13} className="mr-3 avatar-80 img-fluid" alt="#" />
                           <Media.Body>
                              <h5 className="mb-1">Media heading</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              <Media className="mt-3">
                                 <Link className="mr-3" to="/" onClick={e => e.preventDefault()}>
                                 <img src={pageimg12} alt="#" className="avatar-80 img-fluid" />
                                 </Link>
                                 <Media.Body>
                                    <h5 className="mb-1">Media heading</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                 </Media.Body>
                              </Media>
                           </Media.Body>
                        </Media>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Order</h4>
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
{`<Media className="mb-5">
   <Media.Body>
      <h5 className="mt-0 mb-1">Media object</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   </Media.Body>
   <img src={pageimg14} className="ml-3 avatar-80 img-fluid" alt="#" />
</Media>
<Media className="mb-5">
   <Media.Body>
      <h5 className="mt-0 mb-1">Center-aligned media</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   </Media.Body>
   <img src={pageimg12} className="align-self-center mr-3 avatar-80 img-fluid" alt="#" />
</Media>
<Media>
   <Media.Body>
      <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
   </Media.Body>
   <img src={pageimg11} className="align-self-end mr-3 avatar-80 img-fluid" alt="#" />
</Media>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>
                        <Media className="mb-5">
                           <Media.Body>
                              <h5 className="mt-0 mb-1">Media object</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </Media.Body>
                           <img src={pageimg15} className="ml-3 avatar-80 img-fluid" alt="#" />
                        </Media>
                        <Media className="mb-5">
                           <Media.Body>
                              <h5 className="mt-0 mb-1">Center-aligned media</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </Media.Body>
                           <img src={pageimg16} className="align-self-center mr-3 avatar-80 img-fluid" alt="#" />
                        </Media>
                        <Media>
                           <Media.Body>
                              <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </Media.Body>
                           <img src={pageimg17} className="align-self-end mr-3 avatar-80 img-fluid" alt="#" />
                        </Media>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Media object</h4>
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
{`<Media className="mb-4">
   <img src={pageimg9} className="align-self-start mr-3 avatar-80 img-fluid" alt="#" />
   <Media.Body>
      <h5 className="mb-1">Top-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media className="mb-4">
   <img src={pageimg10} className="align-self-center rounded mr-3 avatar-80" alt="#" />
   <Media.Body>
      <h5 className="mb-1">Center-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media>
   <img src={pageimg11} className="align-self-end rounded mr-3 avatar-80" alt="#" />
   <Media.Body>
      <h5 className="mb-1">Bottom-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>The images or other media can be aligned top, middle, or bottom. The default is top aligned.</p>
                        <Media className="mb-4">
                           <img src={pageimg9} className="align-self-start mr-3 avatar-80 img-fluid" alt="#" />
                           <Media.Body>
                              <h5 className="mb-1">Top-aligned media</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media className="mb-4">
                           <img src={pageimg10} className="align-self-center mr-3 avatar-80" alt="#" />
                           <Media.Body>
                              <h5 className="mb-1">Center-aligned media</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media>
                           <img src={pageimg11} className="align-self-end mr-3 avatar-80" alt="#" />
                           <Media.Body>
                              <h5 className="mb-1">Bottom-aligned media</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Media list</h4>
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
{`<ul className="list-unstyled">
   <Media as="li">
      <img src={pageimg12} className="mr-3 avatar-80 img-fluid rounded" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
   <Media className="my-4" as="li">
      <img src={pageimg14} className="mr-3 avatar-80 img-fluid rounded" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
   <Media as="li">
      <img src={pageimg13} className="mr-3 avatar-80 img-fluid rounded" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
</ul>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>
                        <ul className="list-unstyled">
                           <Media as="li">
                              <img src={pageimg18} className="mr-3 avatar-80 img-fluid" alt="#" />
                              <Media.Body>
                                 <h5 className="mt-0 mb-1">List-based media object</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </Media.Body>
                           </Media>
                           <Media className="my-4" as="li">
                              <img src={pageimg19} className="mr-3 avatar-80 img-fluid" alt="#" />
                              <Media.Body>
                                 <h5 className="mt-0 mb-1">List-based media object</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </Media.Body>
                           </Media>
                           <Media as="li">
                              <img src={pageimg20} className="mr-3 avatar-80 img-fluid" alt="#" />
                              <Media.Body>
                                 <h5 className="mt-0 mb-1">List-based media object</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </Media.Body>
                           </Media>
                        </ul>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiMediaObjects;