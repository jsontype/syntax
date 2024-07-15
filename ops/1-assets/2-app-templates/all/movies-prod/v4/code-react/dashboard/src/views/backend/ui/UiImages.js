import React , { useState } from 'react'
import { Container, Row, Col, Collapse, Image, Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

//img
import small1 from '../../../assets/images/small/img-1.jpg'
import user1 from '../../../assets/images/page-img/15.jpg'
import user2 from '../../../assets/images/page-img/16.jpg'
import user3 from '../../../assets/images/page-img/17.jpg'
import pageimg9 from '../../../assets/images/page-img/21.jpg'
import pageimg10 from '../../../assets/images/page-img/22.jpg'
import pageimg11 from '../../../assets/images/page-img/23.jpg'
import pageimg13  from '../../../assets/images/page-img/13.jpg'
import pageimg14 from '../../../assets/images/page-img/14.jpg'
import pageimg15 from '../../../assets/images/page-img/18.jpg'
import pageimg16 from '../../../assets/images/page-img/19.jpg'
import pageimg17 from '../../../assets/images/page-img/20.jpg'
import pageimg18 from '../../../assets/images/page-img/24.jpg'
import pageimg19 from '../../../assets/images/page-img/15.jpg'
import pageimg20 from '../../../assets/images/page-img/16.jpg'
import pageimg21 from '../../../assets/images/page-img/10.jpg'
import pageimg22 from '../../../assets/images/page-img/11.jpg'
import pageimg23 from '../../../assets/images/page-img/12.jpg'

const UiImages = () =>{ 

   //Collapse state
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
               <Col sm="12" lg="6" md="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Responsive images</h4>
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
{`<p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
<Image src={small1} fluid  alt="Responsiveimage" />
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
                        <Image src={small1} fluid  alt="Responsiveimage" />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Equal-width multi-row</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                              <i type="button" onClick={()=>setOpen1(!open1)}>
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
{`<Media>
   <Image rounded fluid src={user1} className="mr-3 avatar-70 " alt="#" />
   <Media.Body>
      <h5 className="mt-0">Media heading</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media>
   <Image src={user2} rounded fluid className="mr-3 avatar-70" alt="#" />
   <Media.Body>
      <h5 className="mt-0">Media heading</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      <div className="media mt-3">
         <Link className="mr-3" to="/" onClick={e => e.preventDefault()}>
         <Image src={user3} alt="#" fluid className="avatar-70" />
         </Link>
         <Media.Body>
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
         </Media.Body>
      </div>
   </Media.Body>
</Media>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <Link to="/docs/4.3/utilities/display/">responsive display utilities</Link>.</p>
                        <Media>
                           <Image fluid src={user1} className="mr-3 avatar-70 " alt="#" />
                           <Media.Body>
                              <h5 className="mt-0">Media heading</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media>
                           <Image src={user2} fluid className="mr-3 avatar-70" alt="#" />
                           <Media.Body>
                              <h5 className="mt-0">Media heading</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              <div className="media mt-3">
                                 <Link className="mr-3" to="/" onClick={e => e.preventDefault()}>
                                 <Image src={user3} alt="#" fluid className="avatar-70" />
                                 </Link>
                                 <Media.Body>
                                    <h5 className="mt-0">Media heading</h5>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                 </Media.Body>
                              </div>
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
{`<Media className="mb-5">
      <Media.Body>
         <h5 className="mt-0 mb-1">Media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
      <Image src={pageimg9} fluid className="ml-3 avatar-70" alt="#" />
   </Media>
   <Media className="mb-5">
      <Media.Body>
         <h5 className="mt-0 mb-1">Center-aligned media</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
      <Image src={pageimg10} fluid className="align-self-center mr-3 avatar-70" alt="#" />
   </Media>
   <Media>
      <Media.Body>
         <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
      <Image src={pageimg11}  fluid className="align-self-end mr-3 avatar-70" alt="#" />
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
                           <Image src={pageimg15} fluid className="ml-3 avatar-70" alt="#" />
                        </Media>
                        <Media className="mb-5">
                           <Media.Body>
                              <h5 className="mt-0 mb-1">Center-aligned media</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </Media.Body>
                           <Image src={pageimg16} fluid className="align-self-center mr-3 avatar-70" alt="#" />
                        </Media>
                        <Media>
                           <Media.Body>
                              <h5 className="mt-0 mb-1">Bottom-aligned media</h5>
                              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </Media.Body>
                           <Image src={pageimg17}  fluid className="align-self-end mr-3 avatar-70" alt="#" />
                        </Media>
                     </Card.Body>
                  </Card>
               </Col>
               <Col md="6" lg="6" sm="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Image thumbnails</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={()=> setOpen3(!open3)}>
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
{`<ul className="list-unstyled p-0 m-0 row">
   <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg10} className="img-thumbnail w-100" alt="Responsiveimage" /></li>
   <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg11} className="rounded w-100" alt="Responsiveimage" /></li>
   <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg12} className="rounded w-100" alt="Responsiveimage" /></li>
</ul>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>In addition to our <Link to="/docs/4.3/utilities/borders/">border-radius utilities</Link>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                        <ul className="list-unstyled p-0 m-0 row">
                           <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg21} className="img-thumbnail w-100" alt="Responsiveimage" /></li>
                           <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg22} className="rounded w-100" alt="Responsiveimage" /></li>
                           <li className="col-lg-4 col-md-6 col-sm-6 mt-2"><Image fluid src={pageimg23} className="rounded w-100" alt="Responsiveimage" /></li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Image thumbnails</h4>
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
{`<Image src={pageimg13} fluid className=" mt-2" alt="Responsiveimage" />
<Image src={pageimg14} fluid className=" mt-2 float-right" alt="Responsiveimage" />`}
                                       </code></pre></kbd>
                                    </Card>
                           </div>
                        </Collapse>
                        <p>In addition to our <Link to="/docs/4.3/utilities/borders/">border-radius utilities</Link>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>
                        <Image src={pageimg13} fluid className=" mt-2" alt="Responsiveimage" />
                        <Image src={pageimg14} fluid className=" mt-2 float-right" alt="Responsiveimage" />
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Media object</h4>
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
{`<Media className="mb-4">
   <Image src={pageimg9} fluid  className="align-self-start mr-3 avatar-70" alt="#" />
   <Media.Body>
      <h5 className="mt-0">Top-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media className="mb-4">
   <Image src={pageimg10} fluid  className="align-self-center mr-3 avatar-70" alt="#" />
   <Media.Body>
      <h5 className="mt-0">Center-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
   </Media.Body>
</Media>
<Media>
   <Image src={pageimg11} fluid  className="align-self-end mr-3 avatar-70" alt="#" />
   <Media.Body>
      <h5 className="mt-0">Bottom-aligned media</h5>
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
                           <Image src={pageimg9} fluid  className="align-self-start mr-3 avatar-70" alt="#" />
                           <Media.Body>
                              <h5 className="mt-0">Top-aligned media</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media className="mb-4">
                           <Image src={pageimg10} fluid  className="align-self-center mr-3 avatar-70" alt="#" />
                           <Media.Body>
                              <h5 className="mt-0">Center-aligned media</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                           </Media.Body>
                        </Media>
                        <Media>
                           <Image src={pageimg11} fluid  className="align-self-end mr-3 avatar-70" alt="#" />
                           <Media.Body>
                              <h5 className="mt-0">Bottom-aligned media</h5>
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
{`<ul className="list-unstyled">
   <Media as="li">
      <Image src={pageimg12}  fluid  className="mr-3 avatar-70" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
   <Media as="li" className="my-4">
      <Image src={pageimg13}  fluid  className="mr-3 avatar-70" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
   <Media as="li">
      <Image src={pageimg14}  fluid  className="mr-3 avatar-70" alt="#" />
      <Media.Body>
         <h5 className="mt-0 mb-1">List-based media object</h5>
         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media.Body>
   </Media>
</ul>`}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>
                        <ul className="list-unstyled">
                           <Media as="li">
                              <Image src={pageimg18}  fluid  className="mr-3 avatar-70" alt="#" />
                              <Media.Body>
                                 <h5 className="mt-0 mb-1">List-based media object</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </Media.Body>
                           </Media>
                           <Media as="li" className="my-4">
                              <Image src={pageimg19}  fluid  className="mr-3 avatar-70" alt="#" />
                              <Media.Body>
                                 <h5 className="mt-0 mb-1">List-based media object</h5>
                                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                              </Media.Body>
                           </Media>
                           <Media as="li">
                              <Image src={pageimg20}  fluid  className="mr-3 avatar-70" alt="#" />
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

export default UiImages;