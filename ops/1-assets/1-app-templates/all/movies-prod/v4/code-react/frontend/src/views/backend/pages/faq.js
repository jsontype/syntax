import React,{ useState} from 'react'
import { Container, Row, Col, Breadcrumb, } from 'react-bootstrap'
// import CustomToggle from '../../../components/dropdowns' 

//img
import aboutus1 from '../../../assets/images/about-us/01.jpg'

const FAQ = () => {
   const [faq, setfaq] = useState('1') 

   return (
      <>
         <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(${aboutus1})`}}>  
            <Container fluid> 
               <Row className="align-items-center">
                  <Col sm="12">
                        <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                           <h2 className="title">FAQ</h2>
                           <Breadcrumb className="main-bg">
                              <Breadcrumb.Item>Home</Breadcrumb.Item>  
                              <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
                           </Breadcrumb>
                        </nav>
                  </Col>
               </Row> 
            </Container>
         </div>
         <main id="main" className="site-main">
            <Container>
               <Row>
                  <Col lg="12" sm="12">
                     <div className="iq-accordion iq-accordion-square">
                        <div className={`iq-accordion-block  1 ${ faq === '1' ? 'iq-active' : ''}`} onClick={ () =>{ setfaq('1')}}>
                           <div className="iq-accordion-title">
                              <div className="iq-icon-right">
                                 <i aria-hidden="true" className="fa fa-minus active"></i>
                                 <i aria-hidden="true" className="fa fa-plus inactive"></i>
                              </div>
                              <h4 className="mb-0 accordion-title iq-heading-title">         
                                 What is streamit?     
                              </h4>
                           </div>                   
                           <div className={`iq-accordion-details ${ faq === '1'  ? 'd-block' : 'd-none' }`}>                         
                              <p className="iq-content-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>
                           </div>
                        </div>
                        
                        <div className={`iq-accordion-block 2  ${faq === '2'   ? 'iq-active' : ''}`} onClick={()=> {setfaq('2')} } >
                           <div className="iq-accordion-title">
                              <div className="iq-icon-right">
                                 <i aria-hidden="true" className="fa fa-minus active"></i>
                                 <i aria-hidden="true" className="fa fa-plus inactive"></i>
                              </div>
                              <h4 className="mb-0 accordion-title iq-heading-title">         
                                 Will my account work outside my country?                           
                              </h4>                 
                           </div>
                           <div className={`iq-accordion-details ${faq === '2' ? 'd-block' : 'd-none'}`}>                       
                             <p className="iq-content-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>
                              </div>
                           </div>
                           

                           <div className={`iq-accordion-block 3  ${faq === '3'   ? 'iq-active' : ''}`} onClick={()=> {setfaq('3')} } >
                           <div className="iq-accordion-title">
                              <div className="iq-icon-right">
                                 <i aria-hidden="true" className="fa fa-minus active"></i>
                                 <i aria-hidden="true" className="fa fa-plus inactive"></i>
                              </div>
                              <h4 className="mb-0 accordion-title iq-heading-title">         
                              I am facing video playback issues. What do I do?                           
                              </h4>                 
                           </div>
                           <div className={`iq-accordion-details ${faq === '3' ? 'd-block' : 'd-none'}`}>                       
                             <p className="iq-content-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>
                              </div>
                           </div>

                           <div className={`iq-accordion-block 4 ${faq === '4'   ? 'iq-active' : ''}`} onClick={()=> {setfaq('4')} } >
                           <div className="iq-accordion-title">
                              <div className="iq-icon-right">
                                 <i aria-hidden="true" className="fa fa-minus active"></i>
                                 <i aria-hidden="true" className="fa fa-plus inactive"></i>
                              </div>
                              <h4 className="mb-0 accordion-title iq-heading-title">         
                              How can I manage notifications?                           
                              </h4>                 
                           </div>
                           <div className={`iq-accordion-details ${faq === '4' ? 'd-block' : 'd-none'}`}>                       
                             <p className="iq-content-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>
                              </div>
                           </div>

                           <div className={`iq-accordion-block 5 ${faq === '5'   ? 'iq-active' : ''}`} onClick={()=> {setfaq('5')} } >
                           <div className="iq-accordion-title">
                              <div className="iq-icon-right">
                                 <i aria-hidden="true" className="fa fa-minus active"></i>
                                 <i aria-hidden="true" className="fa fa-plus inactive"></i>
                              </div>
                              <h4 className="mb-0 accordion-title iq-heading-title">         
                              What benefits do I get with the packs?                          
                              </h4>                 
                           </div>
                           <div className={`iq-accordion-details ${faq === '5' ? 'd-block' : 'd-none'}`}>                       
                             <p className="iq-content-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. </p>
                              </div>
                           </div>
                        </div>

                  </Col>
               </Row>
            </Container>   
         </main>
      </>
   )
}

export default FAQ;