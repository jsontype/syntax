import React , { useState } from 'react'
import { Container, Row, Col, Collapse, Button, Modal } from 'react-bootstrap'
import  Card from '../../../components/Card'

const UiModals = () =>{

   //Collapse state
   const[open,setOpen]=useState(false)
   const[open1,setOpen1]=useState(false)
   const[open2,setOpen2]=useState(false)
   const[open3,setOpen3]=useState(false)
   const[open4,setOpen4]=useState(false)
   const[open5,setOpen5]=useState(false)

   //modal state
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [show1, setShow1] = useState(false);
   const handleClose1 = () => setShow1(false);
   const handleShow1 = () => setShow1(true);
   const [show2, setShow2] = useState(false);
   const handleClose2 = () => setShow2(false);
   const handleShow2 = () => setShow2(true);
   const [show3, setShow3] = useState(false);
   const handleClose3 = () => setShow3(false);
   const handleShow3 = () => setShow3(true);
   const [show4, setShow4] = useState(false);
   const handleClose4 = () => setShow4(false);
   const handleShow4 = () => setShow4(true);
   const [show5, setShow5] = useState(false);
   const handleClose5 = () => setShow5(false);
   const handleShow5 = () => setShow5(true);
   const [show6, setShow6] = useState(false);
   const handleClose6 = () => setShow6(false);
   const handleShow6 = () => setShow6(true);
   const [show7, setShow7] = useState(false);
   const handleClose7 = () => setShow7(false);
   const handleShow7 = () => setShow7(true);
   const [show8, setShow8] = useState(false);
   const handleClose8 = () => setShow8(false);
   const handleShow8 = () => setShow8(true);
   
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Modal components</h4>
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
{`<Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
            <Modal.Title as="h5">Modal title</Modal.Title>
   </Modal.Header>
   <Modal.Body>
      ...
   </Modal.Body>
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Button variant="primary" onClick={handleClose}>Save changes</Button>
   </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
                        <Button  variant="primary mt-2" onClick={handleShow}>
                        Launch demo modal
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                           <Modal.Header closeButton>
                                    <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              ...
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>Close</Button>
                              <Button variant="primary" onClick={handleClose}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Modal Scrolling </h4>
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
{`<Modal show={show1} scrollable={true} onHide={handleClose1}>
   <Modal.Header closeButton>
      <Modal.Title as="h5">Modal title</Modal.Title>
   </Modal.Header>
   <Modal.Body >
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
   </Modal.Body>
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose1}>Close</Button>
      <Button variant="primary" onClick={handleClose1}>Save changes</Button>
   </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                        <Button variant="primary mt-2" onClick={handleShow1}>
                           Launch demo modal
                        </Button>
                        <Modal show={show1} scrollable={true} onHide={handleClose1}>
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body >
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose1}>Close</Button>
                              <Button variant="primary" onClick={handleClose1}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Optional sizes</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() =>setOpen2(!open2)}>
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
{`<Modal show={show2} onHide={handleClose2} size="xl">
   <Modal.Header closeButton>
      <Modal.Title as="h5">Modal title</Modal.Title>
   </Modal.Header>
   <Modal.Body>
      <p>Modal body text goes here.</p>
   </Modal.Body>
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose2}>Close</Button>
      <Button variant="primary" onClick={handleClose2}>Save changes</Button>
   </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
                        <Button  variant="primary mt-2 mr-2" onClick={handleShow2}>Extra large modal</Button>
                        <Modal show={show2} onHide={handleClose2} size="xl">
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <p>Modal body text goes here.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose2}>Close</Button>
                              <Button variant="primary" onClick={handleClose2}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                        <Button  variant="primary mt-2 mr-2" onClick={handleShow3}>Large modal</Button>
                        <Modal size="lg" show={show3}  onHide={handleClose3}>
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <p>Modal body text goes here.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose3}>Close</Button>
                              <Button variant="primary" onClick={handleClose3}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                        <Button variant="primary mt-2" onClick={handleShow4}>Small modal</Button>
                        <Modal size="sm" show={show4} onHide={handleClose4}>
                           <Modal.Header closeButton>
                              <Modal.Title>Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <p>Modal body text goes here.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose4} >Close</Button>
                              <Button variant="primary" onClick={handleClose4}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Scrolling long content</h4>
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
{`<Modal show={show5} onHide={handleClose5}>
   <Modal.Header closeButton>
      <Modal.Title as="h5">Modal title</Modal.Title>
   </Modal.Header>
   <Modal.Body>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
   </Modal.Body>
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose5}>Close</Button>
      <Button variant="primary" onClick={handleClose5}>Save changes</Button>
   </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                        <Button variant="primary mt-2" onClick={handleShow5}>
                        Launch demo modal
                        </Button>
                        <Modal show={show5} onHide={handleClose5}>
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose5}>Close</Button>
                              <Button variant="primary" onClick={handleClose5}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Vertically centered</h4>
                        </Card.Header.Title>
                        <Card.Header.Action>
                           <i type="button" onClick={() =>setOpen4(!open4)}>
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
{`<Modal show={show6}  onHide={handleClose6} centered={true}>
      <Modal.Header closeButton>
         <Modal.Title as="h5">Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         ...
      </Modal.Body>
      <Modal.Footer>
         <Button variant="secondary" onClick={handleClose6}>Close</Button>
         <Button variant="primary" onClick={handleClose6}>Save changes</Button>
      </Modal.Footer>
   </Modal>
   <Modal scrollable={true} show={show7} onHide={handleClose7}>
      <Modal.Header closeButton>
         <Modal.Title as="h5">Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
         <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
         <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      </Modal.Body>
      <Modal.Footer>
         <Button variant="secondary" onClick={handleClose7}>Close</Button>
         <Button variant="primary" onClick={handleClose7}>Save changes</Button>
      </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">Add <code className="highlighter-rouge">.modal-dialog-centered</code> to <code className="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
                        <Button variant="primary mt-2 mr-2" onClick={handleShow6}>
                           Launch demo modal
                        </Button>
                        <Button  variant="primary mt-2" onClick={handleShow7}>
                           Vertically centered scrollable modal
                        </Button>
                        <Modal show={show6}  onHide={handleClose6} centered={true}>
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              ...
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose6}>Close</Button>
                              <Button variant="primary" onClick={handleClose6}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                        <Modal scrollable={true} show={show7} onHide={handleClose7}>
                           <Modal.Header closeButton>
                              <Modal.Title as="h5">Modal title</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                              <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose7}>Close</Button>
                              <Button variant="primary" onClick={handleClose7}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Using the grid</h4>
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
{`<Modal show={show8} onHide={handleClose8}>
   <Modal.Header closeButton>
      <Modal.Title>Grids in modals</Modal.Title>
   </Modal.Header>
   <Modal.Body>
      <div className="iq-example-row">
         <Container fluid>
            <Row className="mb-3">
               <Col md="4">.col-md-4</Col>
               <Col md="4" className="ml-auto">.col-md-4 .ml-auto</Col>
            </Row>
            <Row className="mb-3">
               <Col md="3" className="ml-auto">.col-md-3 .ml-auto</Col>
               <Col md="2" className="ml-auto">.col-md-2 .ml-auto</Col>
            </Row>
            <Row className="mb-3">
               <Col md="6" className="ml-auto">.col-md-6 .ml-auto</Col>
            </Row>
            <Row>
               <Col sm="9">
                  Level 1: .col-sm-9
                  <Row>
                     <Col sm="6" className="col-8">
                        Level 2: .col-8 .col-sm-6
                     </Col>
                     <Col sm="6" className="col-4">
                        Level 2: .col-4 .col-sm-6
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   </Modal.Body>
   <Modal.Footer>
      <Button variant="secondary" onClick={handleClose8}>Close</Button>
      <Button variant="primary" onClick={handleClose8}>Save changes</Button>
   </Modal.Footer>
</Modal>
                              `}
                                    </code></pre></kbd>
                                 </Card>
                           </div>
                        </Collapse>
                        <p className="mb-1">Utilize the Bootstrap grid system within a modal by nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>
                        <Button  variant="primary mt-2" onClick={handleShow8}>
                           Launch demo modal
                        </Button>
                        <Modal show={show8} onHide={handleClose8}>
                           <Modal.Header closeButton>
                              <Modal.Title>Grids in modals</Modal.Title>
                           </Modal.Header>
                           <Modal.Body>
                              <div className="iq-example-row">
                                 <Container fluid>
                                    <Row className="mb-3">
                                       <Col md="4">.col-md-4</Col>
                                       <Col md="4" className="ml-auto">.col-md-4 .ml-auto</Col>
                                    </Row>
                                    <Row className="mb-3">
                                       <Col md="3" className="ml-auto">.col-md-3 .ml-auto</Col>
                                       <Col md="2" className="ml-auto">.col-md-2 .ml-auto</Col>
                                    </Row>
                                    <Row className="mb-3">
                                       <Col md="6" className="ml-auto">.col-md-6 .ml-auto</Col>
                                    </Row>
                                    <Row>
                                       <Col sm="9">
                                          Level 1: .col-sm-9
                                          <Row>
                                             <Col sm="6" className="col-8">
                                                Level 2: .col-8 .col-sm-6
                                             </Col>
                                             <Col sm="6" className="col-4">
                                                Level 2: .col-4 .col-sm-6
                                             </Col>
                                          </Row>
                                       </Col>
                                    </Row>
                                 </Container>
                              </div>
                           </Modal.Body>
                           <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose8}>Close</Button>
                              <Button variant="primary" onClick={handleClose8}>Save changes</Button>
                           </Modal.Footer>
                        </Modal>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiModals;