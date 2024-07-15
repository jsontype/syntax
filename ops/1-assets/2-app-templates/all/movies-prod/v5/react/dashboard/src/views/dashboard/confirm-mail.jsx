import { memo, Fragment } from 'react'

//react-bootstrap
import { Row, Col, Image } from 'react-bootstrap'

//router
import { Link } from 'react-router-dom'

//component
import Card from '../../../components/bootstrap/card'

//img
import mail from '/assets/images/auth/01.png'

// Import selectors & action from setting store
import * as SettingSelector from '../../../store/setting/selectors'

// Redux Selector / Action
import { useSelector } from 'react-redux';


const ConfirmMail = memo(() => {
   const appName = useSelector(SettingSelector.app_name)
   return (
      <Fragment>
         <section className="login-content">
            <Row className=" m-0 align-items-center bg-white vh-100">
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
                  <Row className="justify-content-center">
                     <Col md="12">
                        <Card className="d-flex justify-content-center mb-0 p-3">
                           <Card.Body>
                              <h2 className="mt-3 mb-4">Success !</h2>
                              <p className="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an
                                 email from company and click
                                 on the included link to reset your password.</p>
                              <div className="d-inline-block w-100">
                                 <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col md="6" className="d-lg-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
                  <Image src={mail} className="img-fluid gradient-main" alt="images" />
               </Col>
            </Row>
         </section>
      </Fragment>
   )
}
)

ConfirmMail.displayName = "ConfirmMail"
export default ConfirmMail;
