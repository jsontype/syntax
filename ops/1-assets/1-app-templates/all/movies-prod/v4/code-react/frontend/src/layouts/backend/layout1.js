import React from 'react';
import {Link} from 'react-router-dom'
// Partials
import HeaderStyle1 from '../../components/partials/backend/headerstyle/headerstyle1';
import FooterStyle from '../../components/partials/backend/footerstyle/footerstyle'

// Router Component
import Layout1Route from '../../router/layout1-route'

const Layout1 = () => {



const backToTop = document.getElementById("back-to-top")
// console.log(backToTop)
if( backToTop !== null && backToTop !== undefined ) {
  document.getElementById("back-to-top").classList.add('animated','fadeOut')
  window.addEventListener('scroll', (e) => {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("back-to-top").classList.remove("fadeOut")
    document.getElementById("back-to-top").classList.add("fadeIn")
  }else {
    document.getElementById("back-to-top").classList.remove("fadeIn")
    document.getElementById("back-to-top").classList.add("fadeOut")
  }
})
// scroll body to 0px on click
document.querySelector('#top').addEventListener('click', (e) => {
  e.preventDefault()
  window.scrollTo({top: 0, behavior: 'smooth'});
})
}



    return(
        <>
           
             <div id="back-to-top">
            <Link className="top"   to="#" id="top"> <i className="fa fa-angle-up"></i> </Link>
            </div>
            <div className="wraper">
                <HeaderStyle1 />
                <div className="content-page" id="content-page">
                    <Layout1Route />
                </div>
            </div>
            <FooterStyle />
        </>
    )
}


export default Layout1;