import React from 'react';

// Partials
import HeaderStyle1 from '../../components/partials/backend/headerstyle/headerstyle1';
import SidebarStyle from '../../components/partials/backend/sidebarstyle/sidebarstyle'
import FooterStyle from '../../components/partials/backend/footerstyle/footerstyle'


// Router Component
import Layout1Route from '../../router/layout1-route'


const Layout1 = () => {
   
    
    return(
        <>
         <div className="wrapper">
            <SidebarStyle />
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