import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import  Card from '../../../components/Card'

const BasicTable = () => {
   return(
      <>
         <Container fluid>
            <Row>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Tables</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>The <code>.table </code> className adds basic styling to a table.</p>
                        <Table>
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Table Head Options</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Similar to tables and dark tables, use the modifier classNamees <code className="highlighter-rouge">.thead-light</code> or <code className="highlighter-rouge">.thead-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
                        <Table>
                           <thead className="thead-dark">
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </Table>
                        <Table>
                           <thead className="thead-light">
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Borderless table</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Add <code className="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
                        <table className="table table-borderless">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                        <p><code className="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
                        <table className="table table-borderless table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Small table</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Add <code className="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
                        <table className="table table-sm">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                        <table className="table table-sm table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Captions</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>A <code className="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
                        <Table>
                           <caption>List of users</caption>
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12" lg="6">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Table Dark</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>You can also invert the colors—with light text on dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>.</p>
                        <Table className="table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Striped Rows</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Use <code className="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                        <table className="table table-striped">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                        <table className="table table-striped table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td>Larry</td>
                                 <td>the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Hoverable rows</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Add <code className="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code className="highlighter-rouge">&lt;tbody&gt;</code>.</p>
                        <table className="table table-hover">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                        <table className="table table-hover table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">First</th>
                                 <th scope="col">Last</th>
                                 <th scope="col">Handle</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th scope="row">1</th>
                                 <td>Mark</td>
                                 <td>Otto</td>
                                 <td>@mdo</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Jacob</td>
                                 <td>Thornton</td>
                                 <td>@fat</td>
                              </tr>
                              <tr>
                                 <th scope="row">3</th>
                                 <td colSpan="2">Larry the Bird</td>
                                 <td>@twitter</td>
                              </tr>
                           </tbody>
                        </table>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Contextual classNamees</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Use contextual classNamees to color table rows or individual cells.</p>
                        <Table>
                           <thead>
                              <tr>
                                 <th scope="col">Class</th>
                                 <th scope="col">Heading</th>
                                 <th scope="col">Heading</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="table-active">
                                 <th scope="row">Active</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr>
                                 <th scope="row">Default</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-primary iq-color-primary">
                                 <th scope="row">Primary</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-secondary iq-color-primary">
                                 <th scope="row">Secondary</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-success iq-color-primary">
                                 <th scope="row">Success</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-danger iq-color-primary">
                                 <th scope="row">Danger</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-warning iq-color-primary">
                                 <th scope="row">Warning</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="table-info iq-color-primary">
                                 <th scope="row">Info</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                           </tbody>
                        </Table>
                        <p>Regular table background variants are not available with the dark table, however, you may use <Button className="bg-dark border-0" href="https://getbootstrap.com/"  target="_blank">text or background utilities</Button> to achieve similar styles.</p>
                        <Table className="table-dark">
                           <thead>
                              <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Heading</th>
                                 <th scope="col">Heading</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr className="bg-primary">
                                 <th scope="row">1</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr>
                                 <th scope="row">2</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="bg-success">
                                 <th scope="row">3</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr>
                                 <th scope="row">4</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="bg-info">
                                 <th scope="row">5</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr>
                                 <th scope="row">6</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="bg-warning">
                                 <th scope="row">7</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr>
                                 <th scope="row">8</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                              <tr className="bg-danger">
                                 <th scope="row">9</th>
                                 <td>Cell</td>
                                 <td>Cell</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Card.Body>
                  </Card>
               </Col>
               <Col sm="12">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <div className="iq-header-title">
                           <h4 className="card-title">Responsive tables</h4>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code className="highlighter-rouge">.table</code> with <code className="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code className="highlighter-rouge">.table-responsive{'-sm|-md|-lg|-xl'}</code>.</p>
                        <div className="table-responsive">
                           <Table>
                              <thead>
                                 <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                                 <tr>
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                 </tr>
                              </tbody>
                           </Table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}


export default BasicTable;