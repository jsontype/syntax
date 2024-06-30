import { memo, Fragment } from 'react'

//react-bootstrap
import { Row, Col, Image, Form, Button, ListGroup, } from 'react-bootstrap'

//router
import { Link, useNavigate } from 'react-router-dom'

//components
import Card from '../../../components/bootstrap/card'

// img
import facebook from '/assets/images/brands/fb.svg'
import google from '/assets/images/brands/gm.svg'
import instagram from '/assets/images/brands/im.svg'
import linkedin from '/assets/images/brands/li.svg'
import auth1 from '/assets/images/auth/01.png'

// Import selectors & action from setting store
import * as SettingSelector from '../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';
// the hook
import { useTranslation } from "react-i18next";

const SignIn = memo(() => {
   const { t } = useTranslation();
   const appName = useSelector(SettingSelector.app_name)
   let history = useNavigate()
   return (
      <Fragment>
         <section className="login-content">
            <Row className="row m-0 align-items-center bg-white">
               <Col md="12" lg="6" className='align-self-center'>
                  <Link to="/" className="navbar-brand d-flex align-items-center  justify-content-center text-primary">
                     <div className="logo-normal">
                        <svg className="text-primary" viewBox="0 0 32 32" width="80px" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" clipRule="evenodd" d="M7.25333 2H22.0444L29.7244 15.2103L22.0444 28.1333H7.25333L0 15.2103L7.25333 2ZM11.2356 9.32316H18.0622L21.3334 15.2103L18.0622 20.9539H11.2356L8.10669 15.2103L11.2356 9.32316Z" fill="currentColor" />
                           <path d="M23.751 30L13.2266 15.2103H21.4755L31.9999 30H23.751Z" fill="#3FF0B9" />
                        </svg>
                     </div>
                     <h2 className="logo-title ms-3">{appName}</h2>
                  </Link>
                  <Row className="justify-content-center pt-5">
                     <Col md="10">
                        <Card className="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                           <Card.Body>

                              <h2 className="mb-2 text-center">{t("authentication.sign_up")}</h2>
                              <p className="text-center">Login to stay connected.</p>
                              <Form>
                                 <Row>
                                    <Col lg="12">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="email" className="">{t("user_profile.email")}</Form.Label>
                                          <Form.Control type="email" className="" id="email" aria-describedby="email" placeholder=" " />
                                       </Form.Group >
                                    </Col>
                                    <Col lg="12" className="">
                                       <Form.Group className="form-group">
                                          <Form.Label htmlFor="password" className="">{t("authentication.password")}</Form.Label>
                                          <Form.Control type="password" className="" id="password" aria-describedby="password" placeholder=" " />
                                       </Form.Group>
                                    </Col>
                                    <Col lg="12" className="d-flex justify-content-between">
                                       <Form.Check className="form-check mb-3">
                                          <Form.Check.Input type="checkbox" id="customCheck1" />
                                          <Form.Check.Label htmlFor="customCheck1">{t("authentication.remember_me")}</Form.Check.Label>
                                       </Form.Check>
                                       <Link to="/auth/recoverpw">{t("authentication.forgot_your_password")}</Link>
                                    </Col>
                                 </Row>
                                 <div className="d-flex justify-content-center">
                                    <Button onClick={() => history('/')} type="button" variant="btn btn-primary">{t("authentication.sign_in")}</Button>
                                 </div>
                                 <p className="text-center my-3">{t("authentication.other_accounts")}?</p>
                                 <div className="d-flex justify-content-center">
                                    <ListGroup as="ul" className="list-group-horizontal list-group-flush">
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={google} alt="gm" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={facebook} alt="fb" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={instagram} alt="im" /></Link>
                                       </ListGroup.Item>
                                       <ListGroup.Item as="li" className="border-0 pb-0">
                                          <Link to="#"><Image src={linkedin} alt="li" /></Link>
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </div>
                                 <p className="mt-3 text-center">
                                    {t("authentication.dont_account")}? <Link to="/auth/sign-up" className="text-underline">{t("authentication.click_sign")}.</Link>
                                 </p>
                              </Form>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-md-block d-none bg-primary p-0 mt-n1  overflow-hidden">
                  <Image src={auth1} className="Image-fluid gradient-main" alt="images" />
               </Col>
            </Row>
         </section>
      </Fragment>
   )
}
)

SignIn.displayName = "SignIn"
export default SignIn
