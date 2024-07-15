import React,{useState} from 'react'
import { Container, Row, Col, Breadcrumb, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// //img
import aboutus1 from '../../../../assets/images/about-us/01.jpg'

const right = <i className="fa fa-check-circle-o"></i>
const wrong=<i className="fa fa-times-circle"></i>

const PricingPlan2 = () => {
    const [pricing1, setPricing1]=useState('pricing1') 
    const [pricing2, setPricing2]=useState('pricing2') 
    const pricingLists = [
    {
        title: 'Ad Free Entertainment',
        icon:  wrong,
        icon1: right,
        icon2: wrong
    },
    {
       title: 'American Tv Shows',
       icon: wrong, 
       icon1: right,
       icon2: right
    },
    {
        title: 'Hollywood Movies',
        icon: wrong,
        icon1: right,
        icon2: right
    },
    {
        title: 'New Movies',
        icon: wrong,
        icon1: right,
        icon2: right
    },
    {
        title: 'Streamit Special',
        icon: wrong,
        icon1: right,
        icon2: wrong
    },
    {
        title: 'Video Quality',
        icon: 'SD(480p)',
        icon1: 'FHD(1080p)',
        icon2: 'HD(720p)'
    }
]
    return (
        <>
            <div className="iq-breadcrumb-one  iq-bg-over iq-over-dark-50" style={{backgroundImage: `url(${aboutus1})`}}>  
                <Container fluid> 
                    <Row className="align-items-center">
                        <Col sm="12">
                            <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                <h2 className="title">Pricing Plan 2</h2>
                                <Breadcrumb className="main-bg">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>  
                                    <Breadcrumb.Item active>Pricing Plan 2</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <div className="site-content-contain"> 
                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main">
                            <Container>
                                <Row>
                                    <Col lg="12" sm="12">
                                        <div className="iq-pricing-card-two">
                                            <div className="table-responsive iq-pricing pt-2">
                                                <Table id="my-table" className="table" data-active="premium">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center iq-price-head"></th>
                                                                <th className="text-center iq-price-head free">
                                                                    <div className={`iq-price-box ${pricing1 === 'Basic' ? 'active' : ''} `} onClick={() =>setPricing1('Basic')}>
                                                                        <span className="">Free</span>
                                                                    </div>
                                                                </th>
                                                                <th className="text-center iq-price-head premium">
                                                                    <div className={`iq-price-box  ${pricing1 === 'pricing' ? 'active' : ''}`} onClick={() =>setPricing1('pricing')}>
                                                                        <span className="">Premium</span>
                                                                    </div>
                                                                </th>
                                                                <th className="text-center iq-price-head basic">
                                                                    <div className={`iq-price-box ${pricing1 === 'Platinum' ? 'active' : ''}`} onClick={() =>setPricing1('Platinum')}>
                                                                        <span className="">Basic</span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    <tbody>
                                                    {pricingLists.map((item) => (               
                                                    <tr key={item.title}>
                                                        <th className="text-left" scope="row"> {item.title}</th>
                                                        <td className={`text-center iq-child-cell ${pricing1 === 'Basic' ? 'active' : ''}`}>
                                                            {item.icon}
                                                        </td>
                                                        <td className={`text-center iq-child-cell ${pricing1 === 'pricing' ? 'active' : ''}`}>
                                                            {item.icon1}
                                                        </td>
                                                        <td className={`text-center iq-child-cell ${pricing1 === 'Platinum' ? 'active' : ''}`}>
                                                            {item.icon2}
                                                        </td>
                                                    </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="iq-price-bottom">
                                            <Row className="iq-select-price">
                                                <Col lg="4" md="6" sm="12" className="free">
                                                    <div  className={`iq-price-rate-wrap ${pricing2 === 'free' ? 'active' : '' }`} onClick={() =>setPricing2('free')}>
                                                        <i className="fa fa-check-square"></i>
                                                        <div className="iq-price-label">
                                                            <span className="type1">Free</span>
                                                            <h3 className="iq-price-rate">$0<small> / Month</small></h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="4" md="6" sm="12">
                                                    <div className={`iq-price-rate-wrap  ${pricing2 === 'basic' || pricing2 === 'free' ? '' : 'active' }`} onClick={() =>setPricing2('premium')}>
                                                        <i className="fa fa-check-square"></i>
                                                        <div className="iq-price-label">
                                                            <span className="type1">Premium</span>
                                                            <h3 className="iq-price-rate">$39<small> / 3 Months</small></h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg="4" md="6" sm="12">
                                                    <div className={`iq-price-rate-wrap ${pricing2 === 'basic' ? 'active' : ''}`} onClick={() =>setPricing2('basic')}>
                                                        <i className="fa fa-check-square"></i>
                                                        <div className="iq-price-label">
                                                            <span className="type1">Basic</span>
                                                            <h3 className="iq-price-rate">$19<small> / Month</small></h3>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className="align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.3">
                                                <Link to="#" className="btn btn-hover iq-button">Subscribe</Link>
                                            </div>
                                        </div>
                                    </div>                        
                                </Col>
                            </Row>   
                        </Container>
                    </main>
                </div>
            </div>
        </div>
    </>
)
    }
export default PricingPlan2;