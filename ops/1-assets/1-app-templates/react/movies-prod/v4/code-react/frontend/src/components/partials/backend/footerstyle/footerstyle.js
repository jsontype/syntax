import React,{useState, useEffect} from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import footer1 from '../../../../assets/images/footer/01.jpg'
import footer2 from '../../../../assets/images/footer/02.jpg'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {rtlModeAction, getRtlMode} from '../../../../store/mode/rtlmode'


const mapStateToProps = (state) => {
    return {
        rtlMode: getRtlMode(state)
    };


}
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
        {
            rtlModeAction
        },
        dispatch
    )
})

const FooterStyle = (props) =>{
        const [show, setShow] = useState(false);

            useEffect(() => {
        const rtlMode = sessionStorage.getItem('rtl-mode');
        if(rtlMode===null){
            props.rtlModeAction(props.rtlMode)
        }
        else{
            props.rtlModeAction(rtlMode);
        }
            })

    return(
        <>
             <div className={`rtl-box ${show===true?'show':''}`} >
                <button type="button" className="btn btn-light rtl-btn">
                        <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                </button>
                <div className="rtl-panel">
                    <ul className="modes">
                        <li className="dir-btn" data-mode="rtl" data-active="false" onClick={() => {props.rtlModeAction('ltl')}}   data-value="ltr"><Link to="#">LTR</Link></li>
                        <li className="dir-btn" data-mode="rtl" data-active="true" onClick={() => {props.rtlModeAction('rtl')}}  data-value="rtl"><Link to="#">RTL</Link></li>
                    </ul>
                </div>
            </div>
            <footer id="contact" className="footer-one iq-bg-dark">
                <div className="footer-top">
                    <Container fluid>
                        <Row className="footer-standard">
                            <Col lg="7">
                                <div className="widget text-left">
                                    <div className="menu-footer-link-1-container">
                                        <ul id="menu-footer-link-1" className="menu p-0">
                                            <li id="menu-item-7314" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314">
                                                <Link to="#">Terms Of Use</Link>
                                            </li>
                                            <li id="menu-item-7316" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316">
                                                <Link to="/privacy-policy">Privacy-Policy</Link>
                                            </li>
                                            <li id="menu-item-7118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                                                <Link to="/faq">FAQ</Link>
                                            </li>
                                            <li id="menu-item-7118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118">
                                                <Link to="/extra-pages/watch-video">Watch List</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget text-left">			
                                    <div className="textwidget">
                                        <p><small>© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</small></p>
                                    </div>
                                </div>                        
                            </Col>
                            <Col lg="2" md="6" className="mt-4 mt-lg-0">
                                <h6 className="footer-link-title">
                                    Follow Us :
                                </h6>
                                <ul className="info-share"> 
                                    <li><Link target="_blank" to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-google-plus"></i></Link></li>
                                    <li><Link target="_blank" to="#"><i className="fa fa-github"></i></Link></li>
                                </ul>

                            </Col>
                            <Col lg="3" md="6" className="mt-4 mt-lg-0">
                                <div className="widget text-left">
                                    <div className="textwidget">
                                        <h6 className="footer-link-title">Streamit App</h6>
                                        <div className="d-flex align-items-center">
                                            <Link className="app-image" to="#">
                                                <img src={footer1} alt="play-store"/>
                                            </Link><br/>
                                            <Link className="ml-3 app-image" to="#"><img src={footer2} alt="app-store"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default  connect(mapStateToProps, mapDispatchToProps)(FooterStyle)