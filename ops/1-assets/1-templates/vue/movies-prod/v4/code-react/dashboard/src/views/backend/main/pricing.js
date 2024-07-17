import React,{useState} from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import Card  from '../../../components/Card'

const check=<i className='ri-check-line ri-2x'></i>
const close=<i className='ri-close-line i_close'></i>
const Pricing = () => { 
    const [pricing, setPricing]=useState('pricing') 
    const pricingLists = [
     {
       title: 'New Movies',
       icon: check,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Streamit Special',
       icon: close,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'American Tv Shows',
       icon: close,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Hollywood Movies',
       icon: check,
       icon1: check,
       icon2: check,
       icon3: check,
     },
     {
       title: 'Video Quality',
       icon: 'SD(480p)',
       icon1: 'HD(720p)', 
       icon2: 'FHD(1080p)',
       icon3: 'FHD(1080p)'
     },
     {
        title: 'Ad Free Entertainment	',
        icon: close,
        icon1: close,
        icon2: check,
        icon3: check,
      }
   ]
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Body>
                                <div className="table-responsive pricing pt-2">
                                    <table id="my-table" className="table">
                                        <thead>
                                        <tr>
                                            <th className="text-center prc-wrap"></th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Basic' ? 'active' : ''} `} onClick={() =>setPricing('Basic')}>
                                                    <div className="h3 pt-4 text-white">$19<small> / Per month</small></div>
                                                    <span className="type">Basic</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box  ${pricing === 'pricing' ? 'active' : ''}`} onClick={() =>setPricing('pricing')}>
                                                    <div className="h3 pt-4 text-white">$39<small> / Per month</small></div>
                                                    <span className="type">Standard</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Platinum' ? 'active' : ''}`} onClick={() =>setPricing('Platinum')}>
                                                    <div className="h3 pt-4 text-white">$119<small> / Per month</small></div>
                                                    <span className="type">Platinum</span>
                                                </div>
                                            </th>
                                            <th className="text-center prc-wrap">
                                                <div className={`prc-box ${pricing === 'Premium' ? 'active' : ''} `} onClick={() =>setPricing('Premium')}>
                                                    <div className="h3 pt-4 text-white">$219<small> / Per month</small></div>
                                                    <span className="type">Premium</span>
                                                </div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {pricingLists.map((item) => (
                                                <tr key={item.title}>
                                                    <th className="text-center" scope="row">{item.title}</th>
                                                    <td className={`text-center child-cell ${pricing === 'Basic' ? 'active' : ''}`}>{item.icon}</td>
                                                    <td className={`text-center child-cell ${pricing === 'pricing' ? 'active' : ''}`}>{item.icon1}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Platinum' ? 'active' : ''}`}>{item.icon2}</td>
                                                    <td className={`text-center child-cell ${pricing === 'Premium' ? 'active' : ''}`}>{item.icon3}</td>
                                                </tr>
                                                
                                            ))}
                                            <tr>
                                                <td className="text-center"><i className="ri-close-line i_close"></i></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
                                                <td className="text-center"> <Button href="#" variant="primary mt-3">Purchase</Button></td>
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
export default Pricing;