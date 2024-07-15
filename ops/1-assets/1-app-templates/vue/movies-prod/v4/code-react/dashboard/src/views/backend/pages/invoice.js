import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../../components/Card'

const Invoice = () => {
   return (
      <>
         <Container fluid>
            <Row>
               <Col sm="12">
                  <Card>
                     <Card.Body>
                        <Row>
                           <Col lg="6">
                              <img src="../assets/images/logo.png" className="img-fluid" alt=""/>
                           </Col>
                           <Col lg="6" className="align-self-center">
                              <h4 className="mb-0 float-right">Invoice</h4>
                           </Col>
                           <Col sm="12">
                              <hr className="mt-3"/>
                              <h5 className="mb-0">Hello, Barry Techs</h5>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                           </Col>
                        </Row>
                        <Row>
                           <Col lg="12">
                              <div className="table-responsive-sm">
                                 <table className="table">
                                    <thead>
                                       <tr>
                                          <th scope="col">Order Date</th>
                                          <th scope="col">Order Status</th>
                                          <th scope="col">Order ID</th>
                                          <th scope="col">Billing Address</th>
                                          <th scope="col">Shipping Address</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>Jan 17, 2016</td>
                                          <td><span className="badge badge-danger">Unpaid</span></td>
                                          <td>250028</td>
                                          <td>
                                             <p className="mb-0">PO Box 16122 Collins Street West<br/>Victoria 8007 Australia<br/>
                                                Phone: +123 456 7890<br/>
                                                Email: demo@Streamit .com<br/>
                                                Web: www.Streamit .com
                                             </p>
                                          </td>
                                          <td>
                                             <p className="mb-0">PO Box 16122 Collins Street West<br/>Victoria 8007 Australia<br/>
                                                Phone: +123 456 7890<br/>
                                                Email: demo@Streamit .com<br/>
                                                Web: www.Streamit .com
                                             </p>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </Col>
                        </Row>
                        <Row>
                           <Col sm="12">
                              <h5>Order Summary</h5>
                              <div className="table-responsive-sm">
                                 <table className="table table-striped">
                                    <thead>
                                       <tr>
                                          <th className="text-center" scope="col">#</th>
                                          <th scope="col">Item</th>
                                          <th className="text-center" scope="col">Quantity</th>
                                          <th className="text-center" scope="col">Price</th>
                                          <th className="text-center" scope="col">Totals</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <th className="text-center" scope="row">1</th>
                                          <td>
                                             <h6 className="mb-0">Web Design</h6>
                                             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          </td>
                                          <td className="text-center">5</td>
                                          <td className="text-center">$120.00</td>
                                          <td className="text-center"><b>$2,880.00</b></td>
                                       </tr>
                                       <tr>
                                          <th className="text-center" scope="row">2</th>
                                          <td>
                                             <h6 className="mb-0">Web Design</h6>
                                             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          </td>
                                          <td className="text-center">5</td>
                                          <td className="text-center">$120.00</td>
                                          <td className="text-center"><b>$2,880.00</b></td>
                                       </tr>
                                       <tr>
                                          <th className="text-center" scope="row">3</th>
                                          <td>
                                             <h6 className="mb-0">Web Design</h6>
                                             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          </td>
                                          <td className="text-center">5</td>
                                          <td className="text-center">$120.00</td>
                                          <td className="text-center"><b>$2,880.00</b></td>
                                       </tr>
                                       <tr>
                                          <th className="text-center" scope="row">4</th>
                                          <td>
                                             <h6 className="mb-0">Web Design</h6>
                                             <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                          </td>
                                          <td className="text-center">5</td>
                                          <td className="text-center">$120.00</td>
                                          <td className="text-center"><b>$2,880.00</b></td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <h5 className="mt-5">Order Details</h5>
                              <div className="table-responsive-sm">
                                 <table className="table table-striped">
                                    <thead>
                                       <tr>
                                          <th scope="col">Bank</th>
                                          <th scope="col">.Acc.No</th>
                                          <th scope="col">Due Date</th>
                                          <th scope="col">Sub-total</th>
                                          <th scope="col">Discount</th>
                                          <th scope="col">Total</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <th scope="row">Threadneedle St</th>
                                          <td>12333456789</td>
                                          <td>12 November 2019</td>
                                          <td>$4597.50</td>
                                          <td>10%</td>
                                          <td><b>$4137.75 USD</b></td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </Col>
                           <Col sm="6"></Col>
                           <Col sm="6" className="text-right">
                              <button type="button" className="btn text-primary btn-link mr-3"><i className="ri-printer-line"></i> Download Print</button>
                              <button type="button" className="btn btn-primary">Submit</button>
                           </Col>
                           <Col sm="12" className="mt-5">
                              <b className="text-danger">Notes:</b>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default Invoice;