import CustomButton from '@/components/CustomButton'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Form, Nav, Row, Tab, Table } from 'react-bootstrap'

// custom Hook
import { useBreadcrumb } from "@/utilities/usePage";

const Dashboard = () => {
    useBreadcrumb('My account')
  return (
    <>
            <div className="section-padding service-details">
            <Container>
                        <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col md="4" lg="3">
                        <div className="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
                        <div className="product-menu">
                            <Nav as="ul" variant="tabs" className="list-inline m-0 nav-tabs flex-column bg-transparent border-0" id="nav-tab" role="tablist">
                                <Nav.Item as="li" className="pb-3">
                                    <Nav.Link eventKey="first" className="p-0 bg-transparent">
                                        <i className="fas fa-tachometer-alt"></i><span className="ms-2">Dashboard</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="py-3">
                                    <Nav.Link eventKey="second" className="p-0 bg-transparent">
                                        <i className="fas fa-list"></i><span className="ms-2">Orders</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="py-3">
                                    <Nav.Link eventKey="third" className="p-0 bg-transparent">
                                    <i className="fas fa-download"></i><span className="ms-2">Downloads</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="py-3">
                                    <Nav.Link eventKey="fourth" className="p-0 bg-transparent">
                                        <i className="fas fa-map-marker-alt"></i><span className="ms-2">Address</span>
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="py-3">
                                    <Nav.Link eventKey="five" className="p-0 bg-transparent">
                                        <i className="fas fa-user"></i><span className="ms-2">Account details</span>
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="pt-3">
                                    <Nav.Link eventKey="sixth" className="p-0 bg-transparent">
                                        <i className="fas fa-sign-out-alt"></i><span className="ms-2">Logout</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        </div>
                    </Col>
                    <Col lg="9" md="8">
                        <Tab.Content>
                            <Tab.Pane className="fade" eventKey="first">
                                <div className="myaccount-content text-body p-4">
                                    <p>Hello Jenny (not Jenny? <Link href="#">Log out</Link>)</p>
                                    <p>From your account dashboard you can view your <Link href="#">recent orders</Link>,
                                        manage your <Link href="#">shipping and billing addresses</Link>, and <Link href="#">edit your password and account details</Link>.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane className="fade" eventKey="second">
                            <div className="orders-table text-body p-4">
                                <Table responsive>
                                    <thead>
                                        <tr className="border-bottom">
                                            <th className="fw-bolder p-3">Order</th>
                                            <th className="fw-bolder p-3">Date</th>
                                            <th className="fw-bolder p-3">Status</th>
                                            <th className="fw-bolder p-3">Total</th>
                                            <th className="fw-bolder p-3">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom">
                                            <td className="text-primary fs-6">#32604</td>
                                            <td>October 28, 2022</td>
                                            <td>Cancelled</td>
                                            <td>$215.00 For 0 Items</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <CustomButton buttonTitle="pay" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="view" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="cancel" link="#" linkButton="false"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="text-primary fs-6">#32584</td>
                                            <td>October 27, 2022</td>
                                            <td>On Hold</td>
                                            <td>$522.00 For 0 Items</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <CustomButton buttonTitle="pay" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="view" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="cancel" link="#" linkButton="false"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="text-primary fs-6">#31756</td>
                                            <td>October 19, 2022</td>
                                            <td>Processing</td>
                                            <td>$243.00 For 0 Items</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <CustomButton buttonTitle="pay" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="view" link="#" linkButton="false"/>
                                                    <CustomButton buttonTitle="cancel" link="#" linkButton="false"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="text-primary fs-6">#23663</td>
                                            <td>October 7, 2022</td>
                                            <td>Completed</td>
                                            <td>$123.00 For 0 Items</td>
                                            <td className="fs-6">
                                                <div className="d-flex align-items-center gap-2">
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td className="text-primary fs-6">#23612</td>
                                            <td>October 7, 2022</td>
                                            <td>Completed</td>
                                            <td>$64.00 For 0 Items</td>
                                            <td className="fs-6">
                                                <div className="d-flex align-items-center gap-2">
                                                <CustomButton buttonTitle="view" link="#" linkButton="false"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-primary fs-6">#19243</td>
                                            <td>April 1, 2022</td>
                                            <td>Completed</td>
                                            <td>$159.00 For 0 Items</td>
                                            <td className="fs-6">
                                                <div className="d-flex align-items-center gap-2">
                                                <CustomButton buttonTitle="view" link="#" linkButton="false"/>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </div>
                            </Tab.Pane>
                            <Tab.Pane className=" fade" eventKey="third">
                            <div className="orders-table text-body p-4">
                                <Table responsive>
                                    <thead>
                                        <tr className="border-bottom">
                                            <th className="fw-bolder p-3">Product</th>
                                            <th className="fw-bolder p-3">Downloads Remaining</th>
                                            <th className="fw-bolder p-3">Expires</th>
                                            <th className="fw-bolder p-3">Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3 fs-6">Electric Toothbrush</td>
                                            <td className="p-3">∞</td>
                                            <td className="p-3 fs-6">Never</td>
                                            <td className="p-3"><Link href="#" className="p-2 bg-primary text-white fs-6"
                                                    download>Product
                                                    Demo</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </div>
                            </Tab.Pane>
                            <Tab.Pane className=" fade" eventKey="fourth">
                            <div className="text-body p-4">
                            <p className="my-3">The following addresses will be used on the checkout page by default.</p>
                            <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                                <h4 className="mb-0">Billing Address.</h4>
                                <div className="iq-button">
                                    <Link href="#" className="btn text-uppercase position-relative" data-bs-toggle="collapse"
                                    data-bs-target="#edit-address-1" aria-expanded="false">
                                        <span className="button-text">Edit</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>                                
                            </div>
                            <div id="edit-address-1" className="collapse">
                                <div className="text-body mb-4">
                                    <Form>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">First name&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="first-name" defaultValue="John" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Last name&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="last-name" defaultValue="deo" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Company name (optional)</label>
                                            <input type="text" name="last-name" defaultValue="Iqonic Design" className="form-control" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Country / Region &nbsp; <span className="text-danger">*</span></label>
                                            <div className="mb-5">
                                                <select className="select2-basic-single js-states form-control" aria-label="select country"
                                                    required>
                                                    <option defaultValue="">Choose a country</option>
                                                    <option value="1">India</option>
                                                    <option value="2">United Kingdom</option>
                                                    <option value="3">United States</option>
                                                    <option value="4">Australia</option>
                                                    <option value="5">North Corea</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Street address&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="address" placeholder="House number and street name" defaultValue="4517 Kentucky" className="form-control mb-3 rounded-0" required />
                                            <input type="text" name="address" placeholder="Apartment, suite, unit, etc. (optional)" className="form-control" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Town / City&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="city" defaultValue="Navsari" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">State&nbsp; <span className="text-danger">*</span></label>
                                            <div className="mb-5">
                                                <select className="select2-basic-single js-states form-control" aria-label="select state">
                                                    <option defaultValue="">Choose a State</option>
                                                    <option value="1">Gujarat</option>
                                                    <option value="2">Delhi</option>
                                                    <option value="3">Goa</option>
                                                    <option value="4">Haryana</option>
                                                    <option value="5">Ladakh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">PIN code&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="pin code" defaultValue="396321" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Phone&nbsp; <span className="text-danger">*</span></label>
                                            <input type="tel" name="number" defaultValue="1234567890" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Email address&nbsp; <span className="text-danger">*</span></label>
                                            <input type="email" name="email" defaultValue="johndeo@gmail.com" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                        <CustomButton buttonTitle="Save Address" link="#" linkButton="false"/>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                                <Table className="edit-address w-100" responsive>
                                    <tbody>
                                        <tr>
                                            <td className="label-name p-2">Name</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">john deo</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Company</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">Iqonic Design</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Country</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">India</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Address</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">4517 Washington Ave, Manchester.</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">E-mail</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">johndeo@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Phone</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">1234567890</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                                <h4 className="mb-0">Shipping Address</h4>
                                <div className="iq-button">
                                    <Link href="#" className="btn text-uppercase position-relative" data-bs-toggle="collapse"
                                    data-bs-target="#edit-address-2" aria-expanded="false">
                                        <span className="button-text">Edit</span>
                                        <i className="fa-solid fa-play"></i>
                                    </Link>
                                </div>                               
                            </div>
                            <div id="edit-address-2" className="collapse">
                                <div className="text-body mb-4">
                                    <Form>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">First name&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="first-name" defaultValue="John" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Last name&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="last-name" defaultValue="deo" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Company name (optional)</label>
                                            <input type="text" name="last-name" defaultValue="Iqonic Design" className="form-control" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Country / Region &nbsp; <span className="text-danger">*</span></label>
                                            <div className="mb-5">
                                                <select className="select2-basic-single js-states" aria-label="select country"
                                                    required>
                                                    <option defaultValue="">Choose a country</option>
                                                    <option value="1">India</option>
                                                    <option value="2">United Kingdom</option>
                                                    <option value="3">United States</option>
                                                    <option value="4">Australia</option>
                                                    <option value="5">North Corea</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Street address&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="address" placeholder="House number and street name"
                                                defaultValue="4517 Kentucky" className="form-control mb-3 rounded-0" required />
                                            <input type="text" name="address" placeholder="Apartment, suite, unit, etc. (optional)"
                                                className="form-control mb-5 rounded-0" />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Town / City&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="city" defaultValue="Navsari" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">State&nbsp; <span className="text-danger">*</span></label>
                                            <div className="mb-5">
                                                <select className="select2-basic-single js-states" aria-label="select state">
                                                    <option defaultValue="">Choose a State</option>
                                                    <option value="1">Gujarat</option>
                                                    <option value="2">Delhi</option>
                                                    <option value="3">Goa</option>
                                                    <option value="4">Haryana</option>
                                                    <option value="5">Ladakh</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">PIN code&nbsp; <span className="text-danger">*</span></label>
                                            <input type="text" name="pin code" defaultValue="396321" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Phone&nbsp; <span className="text-danger">*</span></label>
                                            <input type="tel" name="number" defaultValue="1234567890" className="form-control" required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <label className="mb-2">Email address&nbsp; <span
                                                className="text-danger">*</span></label>
                                            <input type="email" name="email" defaultValue="johndeo@gmail.com" className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                        <CustomButton buttonTitle="Save Address" link="#" linkButton="false"/>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                                <Table className="edit-address w-100" responsive>
                                    <tbody>
                                        <tr>
                                            <td className="label-name p-2">Name</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">john deo</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Company</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">Iqonic Design</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Country</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">India</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Address</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">4517 Washington Ave, Manchester.</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">E-mail</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">johndeo@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="label-name p-2">Phone</td>
                                            <td className="seprator p-2"><span>:</span></td>
                                            <td className="p-2">1234567890</td>
                                        </tr>
                                    </tbody>
                                </Table>
                        </div>
                            </Tab.Pane>
                            <Tab.Pane className=" fade" eventKey="five">
                            <form>
                                <div className="form-group mb-5">
                                    <label className="mb-2">First name&nbsp; <span className="text-danger">*</span></label>
                                    <input type="text" name="first-name" defaultValue="John" className="form-control" required />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="mb-2">Last name&nbsp; <span className="text-danger">*</span></label>
                                    <input type="text" name="last-name" defaultValue="deo" className="form-control" required />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="mb-2">Display name&nbsp; <span className="text-danger">*</span></label>
                                    <input type="text" name="display-name" defaultValue="John" className="form-control" required />
                                </div>
                                 <em className="d-block mb-5">This will be how your name will be displayed in the account
                                    section and in reviews</em>
                                <div className="form-group mb-5">
                                    <label className="mb-2">Email address&nbsp; <span className="text-danger">*</span></label>
                                    <input type="email" name="email" defaultValue="johndeo@gmail.com" className="form-control" required />
                                </div>
                                <h4 className="fw-normal mb-5">Password change</h4>
                                <div className="form-group mb-5">
                                    <label className="mb-2">Current password (leave blank to leave unchanged)</label>
                                    <input type="password" name="password" className="form-control" />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="mb-2">New password (leave blank to leave unchanged)</label>
                                    <input type="password" name="password" className="form-control" />
                                </div>
                                <div className="form-group mb-5">
                                    <label className="mb-2">Confirm new password</label>
                                    <input type="password" name="password" className="form-control" />  
                                </div>
                                <div className="form-group">
                                <CustomButton buttonTitle="save changes" link="#" linkButton="false"/>
                                </div>
                            </form>
                            </Tab.Pane>
                            <Tab.Pane className=" fade" eventKey="sixth">
                            <div className="p-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-5 text-primary">Login</h4>
                                    <Form method="post">
                                        <div className="mb-4">
                                            <input type="text" name="user-name" className="form-control" placeholder="Username or email address *" required />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" name="pwd" className="form-control" placeholder="Password" required />
                                        </div>                                  
                                        <label className="custom-form-field mb-5">
                                            <input type="checkbox" required className="mr-2" />
                                            <span className="checkmark"></span>
                                            <span>Remember me</span>
                                        </label>
                                        <CustomButton buttonTitle="Login" link="#" linkButton="false"/>
                                    </Form>
                                    <div className="mt-3">
                                    <CustomButton buttonTitle="Lost your password?" link="#" linkButton="true"/>
                                    </div>                           
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">Register</h4>
                                    <form method="post">
                                        <div className="mb-4">
                                            <input type="text" name="user-name" placeholder="Username *" className="form-control" required />
                                        </div>
                                        <div className="mb-4">
                                            <input type="email" name="email-address" placeholder="Email address *" className="form-control" required />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" name="password" placeholder="Password *" className="form-control" required />
                                        </div>                                                                    
                                        <p className="mb-5"> Your personal data will be used to support your experience
                                            throughout this
                                            website, to manage access to your account, and for other purposes described in
                                            our <Link href="/privacy-policy"> privacy policy</Link>.
                                        </p>
                                        <CustomButton buttonTitle="register" link="#" linkButton="false"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                        </Tab.Container>
            </Container>
        </div>
    </>
  )
}


export default Dashboard
