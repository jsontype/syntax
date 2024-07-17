import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const UiGrids = () =>{
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12">
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Grid options</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table..</p>
                        <table className="table table-bordered table-striped">
                           <thead>
                              <tr>
                                 <th></th>
                                 <th className="text-center">
                                    Extra small<br />
                                    <small>&lt;576px</small>
                                 </th>
                                 <th className="text-center">
                                    Small<br />
                                    <small>≥576px</small>
                                 </th>
                                 <th className="text-center">
                                    Medium<br />
                                    <small>≥768px</small>
                                 </th>
                                 <th className="text-center">
                                    Large<br />
                                    <small>≥992px</small>
                                 </th>
                                 <th className="text-center">
                                    Extra large<br />
                                    <small>≥1200px</small>
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row">Max container width</th>
                                 <td>None (auto)</td>
                                 <td>540px</td>
                                 <td>720px</td>
                                 <td>960px</td>
                                 <td>1140px</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row">Class prefix</th>
                                 <td><code>.col-</code></td>
                                 <td><code>.col-sm-</code></td>
                                 <td><code>.col-md-</code></td>
                                 <td><code>.col-lg-</code></td>
                                 <td><code>.col-xl-</code></td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row"># of columns</th>
                                 <td colSpan="5" className="text-left" >12</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row">Gutter width</th>
                                 <td colSpan="5" className="text-left">30px (15px on each side of a column)</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row">Nestable</th>
                                 <td colSpan="5" className="text-left">Yes</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap text-left" scope="row">Column ordering</th>
                                 <td colSpan="5" className="text-left">Yes</td>
                              </tr>
                           </tbody>
                        </table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Equal-width</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
                        <div className="iq-example-row">
                           <div className="container-fluid">
                              <Row className="mb-3">
                                 <Col className="col-12" md="8">.col-12 .col-md-8</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                              </Row>
                              <Row className="mb-3">
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                              </Row>
                              <Row>
                                 <Col className="col-6">.col-6</Col>
                                 <Col className="col-6">.col-6</Col>
                              </Row>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Setting one column width</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
                        <div className="iq-example-row">
                           <div className="container-fluid">
                              <Row className=" mb-3">
                                 <Col>
                                    1 of 3
                                 </Col>
                                 <div className="col-6">
                                    2 of 3 (wider)
                                 </div>
                                 <Col>
                                    3 of 3
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    1 of 3
                                 </Col>
                                 <div className="col-5">
                                    2 of 3 (wider)
                                 </div>
                                 <Col>
                                    3 of 3
                                 </Col>
                              </Row>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Variable width content</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Use <code>col-auto</code> classes to size columns based on the natural width of their content.</p>
                        <div className="iq-example-row">
                           <div className="container-fluid">
                              <Row className="justify-content-md-center mb-3">
                                 <Col lg="2" className="col">
                                    1 of 3
                                 </Col>
                                 <Col md="auto">
                                    Variable width content
                                 </Col>
                                 <Col lg="2" className="col">
                                    3 of 3
                                 </Col>
                              </Row>
                              <Row>
                                 <Col>
                                    1 of 3
                                 </Col>
                                 <Col md="auto">
                                    Variable width content
                                 </Col>
                                 <Col lg="2" className="col">
                                    3 of 3
                                 </Col>
                              </Row>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Equal-width multi-row</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <Link to="https://getbootstrap.com/" target="_blank">responsive display utilities</Link>.</p>
                        <div className="iq-example-row">
                           <Container fluid>
                              <Row>
                                 <Col>col</Col>
                                 <Col>col</Col>
                                 <div className="w-100"></div>
                                 <Col>col</Col>
                                 <Col>col</Col>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Responsive classes</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.</p>
                        <h4 className="card-title">All breakpoints</h4>
                        <p>For grids that are the same from the smallest of devices to the largest, use the <code>.col</code> and <code>.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <code>.col</code>.</p>
                        <div className="iq-example-row">
                           <Container fluid>
                              <Row className="mb-3">
                                 <Col>col</Col>
                                 <Col>col</Col>
                                 <Col>col</Col>
                                 <Col>col</Col>
                              </Row>
                              <Row>
                                 <div className="col-8">col-8</div>
                                 <div className="col-4">col-4</div>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Stacked to horizontal</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>).</p>
                        <div className="iq-example-row">
                           <Container fluid>
                              <Row className="mb-3">
                                 <Col sm="8">col-sm-8</Col>
                                 <Col sm="4">col-sm-4</Col>
                              </Row>
                              <Row>
                                 <Col sm>col-sm</Col>
                                 <Col sm>col-sm</Col>
                                 <Col sm>col-sm</Col>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Mix and match</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
                        <div className="iq-example-row">
                           <Container fluid>
                              <Row className="mb-3">
                                 <Col md="8" className="col-12">.col-12 .col-md-8</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                              </Row>
                              <Row className="mb-3">
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                                 <Col md="4" className="col-6">.col-6 .col-md-4</Col>
                              </Row>
                              <Row>
                                 <div className="col-6">.col-6</div>
                                 <div className="col-6">.col-6</div>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Gutters</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the <code>.row</code> and matching padding utilities on the <code>.col</code>s. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</p>
                        <p>Here’s an example of customizing the Bootstrap grid at the large (<code>lg</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-lg-5</code>, counteracted that with <code>.mx-lg-n5</code> on the parent <code>.row</code> and then adjusted the <code>.container</code> wrapper with <code>.px-lg-5</code>.</p>
                        <div className="iq-example-row">
                           <div className="container-fluid px-lg-5">
                              <Row className="mx-lg-n5">
                                 <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                                 <div className="col py-3 px-lg-5 border bg-light">Custom column padding</div>
                              </Row>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Alignment</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Use flexbox alignment utilities to vertically and horizontally align columns. <strong>Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a <code>min-height</code> as shown below.</strong> <Link to="https://github.com/philipwalton/flexbugs#flexbug-3">See Flexbugs #3 for more details.</Link></p>
                        <h4 className="mb-3">Vertical alignment</h4>
                        <div className="iq-example-row iq-example-row-flex-cols">
                           <Container fluid>
                              <Row className="align-items-start">
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                              </Row>
                              <Row className="align-items-center">
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                              </Row>
                              <Row className="align-items-end">
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                                 <Col>
                                    One of three columns
                                 </Col>
                              </Row>
                           </Container>
                           <Container fluid>
                              <Row>
                                 <Col className="align-self-start">
                                    One of three columns
                                 </Col>
                                 <Col className="align-self-center">
                                    One of three columns
                                 </Col>
                                 <Col className="align-self-end">
                                    One of three columns
                                 </Col>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header>
                        <Card.Header.Title>
                           <h4 className="card-title">Horizontal alignment</h4>
                        </Card.Header.Title>
                     </Card.Header>
                     <Card.Body>
                        <p>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <Link to="/docs/4.3/utilities/display/">responsive display utilities</Link>.</p>
                        <div className="iq-example-row">
                           <Container fluid>
                              <Row className="justify-content-start mb-3">
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                              </Row>
                              <Row className=" justify-content-center mb-3">
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                              </Row>
                              <Row className="justify-content-end mb-3">
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                              </Row>
                              <Row className="justify-content-around mb-3">
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                              </Row>
                              <Row className=" justify-content-between">
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                                 <div className="col-4">
                                    One of two columns
                                 </div>
                              </Row>
                           </Container>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}

export default UiGrids;