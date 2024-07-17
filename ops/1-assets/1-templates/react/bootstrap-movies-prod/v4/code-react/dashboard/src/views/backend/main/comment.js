import React from 'react'
import { Link } from 'react-router-dom'
import {Col,Row,Container,OverlayTrigger,Tooltip} from 'react-bootstrap'
import  Card  from '../../../components/Card'

const Comment = () => {
    return (
        <>
            <Container fluid>
               <Row>
                  <Col sm="12">
                     <Card>
                        <Card.Header className="d-flex justify-content-between">
                           <Card.Header.Title className="">
                              <h4 className="card-title">Comment Lists</h4>
                           </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                           <div className="table-responsive">
                              <table className="data-tables table movie_table" style={{width:"100%"}}>
                                 <thead>
                                    <tr>
                                       <th style={{width: "10%"}}>No</th>
                                       <th style={{width: "20%"}}>Title</th>
                                       <th style={{width: "10%"}}>Author</th>
                                       <th style={{width: "25%"}}>Description</th>
                                       <th style={{width: "15%"}}>Created Date</th>
                                       <th style={{width: "10%"}}>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>1</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Nick Allen</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          21 Jul, 2020
                                       </td>                                       
                                       <td>
                                          <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>2</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Hans Olo</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          12 Jun, 2020
                                       </td>                                       
                                       <td>
                                          <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>3</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Lynn Guini</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          01 Jan, 2020
                                       </td>                                       
                                       <td>
                                            <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>4</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>aaronottix</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          19 Mar, 2020
                                       </td>                                       
                                       <td>
                                          <div className="flex align-items-center list-user-action">
                                             <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                             data-original-title="View" to="#"><i className="lar la-eye"></i></Link>
                                             <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" to="#"><i
                                                   className="ri-pencil-line"></i></Link>
                                             <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" to="#"><i
                                                   className="ri-delete-bin-line"></i></Link>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>5</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Marge Arita</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          21 Aug, 2020
                                       </td>                                       
                                       <td>
                                            <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>6</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Bill Dabear</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          15 May, 2020
                                       </td>                                       
                                       <td>
                                            <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                </OverlayTrigger>
                                            </div>
                                       </td>
                                    </tr>                                 
                                    <tr>
                                       <td>7</td>
                                       <td>
                                          Lorem ipsum dolor
                                       </td>
                                       <td>Brock Lee</td>
                                       <td>
                                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet</p>
                                       </td>
                                       <td>
                                          07 Jul, 2020
                                       </td>                                       
                                       <td>
                                            <div className="flex align-items-center list-user-action">
                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                </OverlayTrigger>
                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                    <Link onClick={(e)=>e.preventDefault()} className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
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
export default Comment;