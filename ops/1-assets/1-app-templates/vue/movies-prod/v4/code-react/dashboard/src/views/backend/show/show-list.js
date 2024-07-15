import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import Card  from '../../../components/Card'

//img
import st01 from '../../../assets/images/show-thumb/01.jpg'
import st02 from '../../../assets/images/show-thumb/02.jpg'
import st03 from '../../../assets/images/show-thumb/03.jpg'
import st04 from '../../../assets/images/show-thumb/04.jpg'
import st05 from '../../../assets/images/show-thumb/05.jpg'
import st06 from '../../../assets/images/show-thumb/06.jpg'
import st07 from '../../../assets/images/show-thumb/07.jpg'
import st08 from '../../../assets/images/show-thumb/08.jpg'
import st09 from '../../../assets/images/show-thumb/09.jpg'
import st10 from '../../../assets/images/show-thumb/10.jpg'

const ShowList = () => { 
   return (
      <>
         <Container fluid>
            <Row>
               <Col sm="12">
                  <Card>
                     <Card.Header className="d-flex justify-content-between">
                        <Card.Header.Title>
                           <h4 className="card-title">Show Lists</h4>
                        </Card.Header.Title>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                           <Link to="/add-show" className="btn btn-primary">Add Show</Link>
                        </div>
                     </Card.Header>
                     <Card.Body>
                        <div className="table-view">
                           <table className="data-tables table movie_table " style={{width:"100%"}}>
                              <thead>
                                 <tr>
                                    <th>Show</th>
                                    <th>Quality</th>
                                    <th>Category</th>
                                    <th>Seasons</th>
                                    <th>Language</th>
                                    <th style={{width:"20%"}}>Description</th>
                                    <th>Action</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st08} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Day of Darkness</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Drama</td>
                                    <td>3 Seasons</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat luctus est,
                                          vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                            <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                            </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                        <div className="media align-items-center">
                                            <div className="iq-movie">
                                                <Link to="#"><img src={st10} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">My True Friends</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Action</td>
                                    <td>1 Season</td>
                                    <td>Hindi</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                            <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                            </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st07} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Arrival 1999</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Thriller</td>
                                    <td>2 Seasons</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                            <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                            </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st01} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Night Mare</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Thriller</td>
                                    <td>2 Seasons</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus est,
                                          vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                            <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                            </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st03} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">The Witcher</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>FUll HD</td>
                                    <td>Action</td>
                                    <td>3 Seasons</td>
                                    <td>Hindi</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st09} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Troll Hunters</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Horror</td>
                                    <td>1 Season</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st06} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Don Jon</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Action</td>
                                    <td>3 Seasons</td>
                                    <td>Hndi</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus est,
                                          vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st02} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Suffered</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Drama</td>
                                    <td>4 Seasons</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st04} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Megafun</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Horror</td>
                                    <td>3 Seasons</td>
                                    <td>English</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <div className="media align-items-center">
                                          <div className="iq-movie">
                                             <Link to="#"><img src={st05} className="img-border-radius avatar-40 img-fluid" alt=""/></Link>
                                          </div>
                                          <div className="media-body text-white text-left ml-3">
                                             <p className="mb-0">Portable</p>
                                          </div>
                                       </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Horror</td>
                                    <td>1 Season</td>
                                    <td>Hindi</td>
                                    <td>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                          a scelerisque. Etiam feugiat
                                          luctus
                                          est, vel commodo odio rhoncus sit amet
                                       </p>
                                    </td>
                                    <td>
                                       <div className="flex align-items-center list-user-action">
                                          <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                             <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                             <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                          </OverlayTrigger>
                                          <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                             <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                          </OverlayTrigger>
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </>
   )
}
export default ShowList; 