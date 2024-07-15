import React,{ useState} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import  Card from '../../../components/Card'
const FAQ = () => {
      const [faq, setfaq] = useState('1') 


   return (
      <>
   <Container fluid>
         <Row>
            <Col lg="6">
               <div className="iq-accordion career-style faq-style  ">
                  <Card className={`iq-accordion-block  1 ${ faq === '1' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('1')}}><span  className="accordion-title"><span > It is a long established reader will be? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '1'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  2 ${ faq === '2' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('2')}}><span className="accordion-title"><span> Distracted by the readable page whent? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '2'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  3 ${ faq === '3' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('3')}}><span className="accordion-title"><span>What is user interface kit? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '3'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  4 ${ faq === '4' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('4')}}><span className="accordion-title"><span> The readable content layout? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '4'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  5 ${ faq === '5' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('5')}}><span className="accordion-title"><span> The readable content of a page at its layout? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '5'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  6 ${ faq === '6' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('6')}}><span className="accordion-title"><span> What is user interface kit? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '6'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
               </div>
            </Col>
            <Col lg="6">
               <div className="iq-accordion career-style faq-style  ">
                  <Card className={`iq-accordion-block  7 ${ faq === '7' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('7')}}><span className="accordion-title"><span> It is a long established fact reader will be? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '7'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  8 ${ faq === '8' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('8')}}><span className="accordion-title"><span> Distracted by readable content of a page? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '8'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  9 ${ faq === '9' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('9')}}><span className="accordion-title"><span>What is user interface kit? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '9'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  10 ${ faq === '10' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('10')}}><span className="accordion-title"><span> The readable content and survived? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '10'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  11 ${ faq === '11' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('11')}}><span className="accordion-title"><span> The readable content of a page layout? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '11'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  12 ${ faq === '12' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('12')}}><span className="accordion-title"><span> What is user interface kit? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '12'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
                  <Card className={`iq-accordion-block  13 ${ faq === '13' ? 'accordion-active' : ''}`}>
                     <div className="active-faq clearfix">
                        <Container fluid>
                           <Row>
                              <Col sm="12" onClick={ () =>{ setfaq('13')}}><span className="accordion-title"><span> The content of a page abd layout? </span> </span></Col>
                           </Row>
                        </Container>
                     </div>
                     <div className={`accordion-details ${ faq === '13'  ? 'd-block' : 'd-none' }`}>
                        <p className="mb-0">It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                     </div>
                  </Card>
               </div>
            </Col>
         </Row>
      </Container>
      </>
   )
}

export default FAQ;