import React,{useState} from 'react'
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import aboutus1 from '../../../assets/images/about-us/01.jpg'
import {Link} from 'react-router-dom'
const Pricing = () => { 
    const [pricing, setPricing]=useState('pricing') 
    const pricingLists = [
    {
        title: 'Ad Free Entertainment',
        icon:  'fa fa-times-circle',
        icon1: 'fa fa-check-circle',
        icon2: 'fa fa-times-circle'
    },
    {
       title: 'American Tv Shows',
       icon: 'fa fa-times-circle', 
       icon1: 'fa fa-check-circle',
       icon2: 'fa fa-check-circle'
    },
    {
        title: 'Hollywood Movies',
        icon: 'fa fa-times-circle',
        icon1: 'fa fa-check-circle',
        icon2: 'fa fa-check-circle'
    },
    {
       title: 'New Movies',
       icon: 'fa fa-times-circle',
        icon1: 'fa fa-check-circle',
        icon2: 'fa fa-check-circle'
    },
    {
       title: 'Streamit Special',
       icon:  'fa fa-times-circle',
       icon1: 'fa fa-check-circle',
       icon2: 'fa fa-times-circle'
    }
]

    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(${aboutus1})`}}>  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                <h2 className="title">Pricing Plan 1</h2>
                                <Breadcrumb className="main-bg">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item> 
                                    <Breadcrumb.Item active>Pricing Plan 1</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <main id="main" className="site-main">
                <Container>
                    <Row>
                        <Col lg="12" sm="12">
                            <div className="iq-pricing-card">
                                <div className="table-responsive iq-pricing pt-2">
                                    <Table id="my-table" className="table" data-active="premium">
                                        <thead>
                                            <tr>
                                                <th className="text-center iq-price-head"></th>
                                                <th className="text-center iq-price-head free">
                                                    <div className={`iq-price-box ${pricing === 'Basic' ? 'active' : ''} `} onClick={() =>setPricing('Basic')}>
                                                        <h3 className="iq-price-rate text-white">$0<small> / Month</small></h3>
                                                        <span className="type">Free</span>
                                                    </div>
                                                </th>
                                                <th className="text-center iq-price-head premium">
                                                    <div className={`iq-price-box  ${pricing === 'pricing' ? 'active' : ''}`} onClick={() =>setPricing('pricing')}>
                                                        <h3 className="iq-price-rate text-white" >$39<small> / 3 Months</small></h3>
                                                        <span className="type">Premium</span>
                                                    </div>
                                                </th>
                                                <th className="text-center iq-price-head basic">
                                                    <div className={`iq-price-box ${pricing === 'Platinum' ? 'active' : ''}`} onClick={() =>setPricing('Platinum')}>
                                                        <h3 className="iq-price-rate text-white" >$19<small> / Month</small></h3>
                                                        <span className="type">Basic</span>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            {pricingLists.map((item) => (               
                                                <tr key={item.title}>
                                                    <th className="text-center" scope="row"> {item.title}</th>
                                                    <td className={`text-center iq-child-cell ${pricing === 'Basic' ? 'active' : ''}`}>
                                                        <i className={`${item.icon}`}></i>
                                                    </td>
                                                    <td className={`text-center iq-child-cell ${pricing === 'pricing' ? 'active' : ''}`}>
                                                        <i className={`${item.icon1}`}></i>
                                                    </td>
                                                    <td className={`text-center iq-child-cell ${pricing === 'Platinum' ? 'active' : ''}`}>
                                                        <i className={`${item.icon2}`}></i>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                 <th className="text-center iq-price-footer"></th>
                                 <td className="text-center iq-price-footer">
                                    <div className="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <Link to="/extra-pages/sign-up" className="btn btn-hover iq-button">Subscribe</Link>
                                    </div>
                                 </td>
                                 <td className="text-center iq-price-footer active">
                                    <div className="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <Link to="/extra-pages/sign-up" className="btn btn-hover iq-button">Subscribe</Link>
                                    </div>
                                 </td>
                                 <td className="text-center iq-price-footer">
                                    <div className="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                       <Link to="/extra-pages/sign-up" className="btn btn-hover iq-button">Subscribe</Link>
                                    </div>
                                 </td>
                              </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>   
                </Container>
            </main>
        </>
    )
}
export default Pricing;