import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
// import {Container,Col,Row }from 'react-bootstrap'
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

    // const rtlBox =()=>{document.body.parentElement.setAttribute('dir','ltr')
    //                     document.querySelector('[data-value="ltr"]').classList.add('active')
    //                     document.querySelector('[data-value="rtl"]').classList.remove('active')
    //                 }
    // const ltlBox = () =>{document.body.parentElement.setAttribute('dir','rtl')
    //                     document.querySelector('[data-value="rtl"]').classList.add('active')
    //                     document.querySelector('[data-value="ltr"]').classList.remove('active')  }
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
            <footer className="iq-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item"><Link to="/user-privacy-setting">Privacy Policy</Link></li>
                            <li className="list-inline-item"><Link to="/user-account-setting">Terms of Use</Link></li>
                        </ul>
                        </div>
                        <div className="col-lg-6 text-right">
                        Copyright 2020 <Link to="#">Streamit</Link> All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>   
        </>
    )
}

export default  connect(mapStateToProps, mapDispatchToProps)(FooterStyle)