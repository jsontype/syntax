import React,{ useState } from 'react'
import { Container, Row, Col, Badge, Collapse, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const UiBadges = () =>{

    //Collapse state
    const[open,setOpen]=useState(false)
    const[open1,setOpen1]=useState(false)
    const[open2,setOpen2]=useState(false)
    const[open3,setOpen3]=useState(false)
    const[open4,setOpen4]=useState(false)
    const[open5,setOpen5]=useState(false)
    
    return(
        <>
            <Container fluid >
                <Row>
                    <Container fluid>
                        <Row>
                            <Col sm="12" lg="6">
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                            <h4 className="card-title">Badge</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                            <i type="button" onClick={() =>setOpen(!open)}>
                                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<h1 className="mt-2">Example heading <Badge variant="primary">New</Badge></h1>
                                                `}
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
                                        <h1 className="mt-2">Example heading <Badge variant="primary">New</Badge></h1>
                                        <h2 className="mt-2">Example heading <Badge variant="secondary">New</Badge></h2>
                                        <h3 className="mt-2">Example heading <Badge variant="success">New</Badge></h3>
                                        <h4 className="mt-2">Example heading <Badge variant="danger">New</Badge></h4>
                                        <h5 className="mt-2">Example heading <Badge variant="warning">New</Badge></h5>
                                        <h6 className="mb-0">Example heading <Badge variant="info">New</Badge></h6>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                            <h4 className="card-title">Button Badges</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                                <i type="button" onClick={() =>setOpen1(!open1)}>
                                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                    </svg>
                                                </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open1}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant="primary mb-1 mr-2" >
    Notifications <Badge variant="light ml-2">4</Badge>
</Button>
                                            `}
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p>Badges can be used as part of buttons to provide a counter.</p>
                                        <Button  variant="primary mb-1 mr-2" >
                                            Notifications <Badge variant="light ml-2">4</Badge>
                                        </Button>
                                        <Button  variant="success mb-1 mr-2">
                                            Notifications <Badge variant="light ml-2">4</Badge>
                                        </Button>
                                        <Button variant="danger mb-1 mr-2">
                                            Notifications <Badge variant="light ml-2">4</Badge>
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                            <h4 className="card-title">Button Light background Badges</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                                <i type="button"  onClick={() =>setOpen2(!open2)}>
                                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                    </svg>
                                                </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open2}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button variant="outline-primary  mb-1 mr-2">
    Notifications <Badge variant="primary ml-2">4</Badge>
</Button>
                                                `}
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p>Badges can be used as part of buttons to provide a counter.</p>
                                        <Button variant="outline-primary  mb-1 mr-2">
                                            Notifications <Badge variant="primary ml-2">4</Badge>
                                        </Button>
                                        <Button variant="outline-success mb-1 mr-2">
                                            Notifications <Badge variant="success ml-2">4</Badge>
                                        </Button>
                                        <Button variant="outline-danger mb-1 mr-2">
                                            Notifications <Badge variant="danger ml-2">4</Badge>
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                            <h4 className="card-title">Button Border Badges</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                            <i type="button" onClick={() =>setOpen3(!open3)}>
                                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open3}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<Button  variant=" bg-primary-light mb-1 mr-2">
    Notifications <Badge variant="primary ml-2">4</Badge>
</Button>
                                                `}
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p>Badges can be used as part of buttons to provide a counter.</p>
                                        <Button  variant=" bg-primary-light mb-1 mr-2">
                                            Notifications <Badge variant="primary ml-2">4</Badge>
                                        </Button>
                                        <Button  variant=" bg-success-light mb-1 mr-2">
                                            Notifications <Badge variant="success ml-2">4</Badge>
                                        </Button>
                                        <Button  variant=" bg-danger-light mb-1 mr-2">
                                            Notifications <Badge variant="danger ml-2">4</Badge>
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm="12" lg="6">
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                            <h4 className="card-title">Contextual variations</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                            <i type="button" onClick={() =>setOpen4(!open4)}>
                                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open4}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<Badge variant="primary mt-2 mr-1">Primary</Badge>
<Badge pill variant="primary mt-2 mr-1">Primary</Badge>
<Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-primary mr-1">Primary</Link>
                                            `}
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p className="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                        <Badge variant="primary mt-2 mr-1">Primary</Badge>
                                        <Badge variant="secondary mt-2 mr-1">Secondary</Badge>
                                        <Badge variant="success mt-2 mr-1">Success</Badge>
                                        <Badge variant="danger mt-2 mr-1">Danger</Badge>
                                        <Badge variant="warning mt-2 mr-1">Warning</Badge>
                                        <Badge variant="info mt-2 mr-1">Info</Badge>
                                        <Badge variant="light mt-2 mr-1">Light</Badge>
                                        <Badge variant="dark mt-2 mr-1">Dark</Badge>
                                        <h5 className="card-title mt-4">Pill badges</h5>
                                        <p className="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                                        <Badge pill variant="primary mt-2 mr-1">Primary</Badge>
                                        <Badge pill variant="secondary mt-2 mr-1">Secondary</Badge>
                                        <Badge pill variant="success mt-2 mr-1">Success</Badge>
                                        <Badge pill variant="danger mt-2 mr-1">Danger</Badge>
                                        <Badge pill variant="warning mt-2 mr-1">Warning</Badge>
                                        <Badge pill variant="info mt-2 mr-1">Info</Badge>
                                        <Badge pill variant="light mt-2 mr-1">Light</Badge>
                                        <Badge pill variant="dark mt-2 mr-1">Dark</Badge>
                                        <h5 className="card-title mt-4">Links</h5>
                                        <p className="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-primary mr-1">Primary</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-secondary mr-1">Secondary</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-success mr-1">Success</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-danger mr-1">Danger</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-warning mr-1">Warning</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-info mr-1">Info</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-light mr-1">Light</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-dark mr-1">Dark</Link>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>
                                        <h4 className="card-title">Contextual variations Border</h4>
                                        </Card.Header.Title>
                                        <Card.Header.Action>
                                            <i type="button" onClick={() =>setOpen5(!open5)}>
                                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </i>
                                        </Card.Header.Action>
                                    </Card.Header>
                                    <Card.Body>
                                        <Collapse in={open5}>
                                            <div>
                                                <Card>
                                                    <kbd className="bg-dark"><pre className="text-white"><code>
{`<Badge variant=" border border-primary text-primary mt-2 mr-1">Primary</Badge>
<Badge pill variant=" mt-2 mr-1 border border-primary text-primary">Primary</Badge>
<Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-primary text-primary mr-1">Primary</Link>
                                            `}  
                                                    </code></pre></kbd>
                                                </Card>
                                            </div>
                                        </Collapse>
                                        <p className="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                        <Badge variant=" border border-primary text-primary mt-2 mr-1">Primary</Badge>
                                        <Badge variant=" border border-secondary text-secondary mt-2 mr-1">Secondary</Badge>
                                        <Badge variant=" border border-success text-success mt-2 mr-1">Success</Badge>
                                        <Badge variant=" border border-danger text-danger mt-2 mr-1">Danger</Badge>
                                        <Badge variant=" border border-warning text-warning mt-2 mr-1">Warning</Badge>
                                        <Badge variant=" border border-info text-info mt-2 mr-1">Info</Badge>
                                        <Badge variant=" border border-light text-light mt-2 mr-1">Light</Badge>
                                        <Badge variant=" border border-dark text-dark mt-2 mr-1">Dark</Badge>
                                        <h5 className="card-title mt-4">Pill badges</h5>
                                        <p className="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                                        <Badge pill variant=" mt-2 mr-1 border border-primary text-primary">Primary</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-secondary text-secondary">Secondary</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-success text-success">Success</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-danger text-danger">Danger</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-warning text-warning">Warning</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-info text-info">Info</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-light text-light">Light</Badge>
                                        <Badge pill variant=" mt-2 mr-1 border border-dark text-dark">Dark</Badge>
                                        <h5 className="card-title mt-4">Links</h5>
                                        <p className="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-primary text-primary mr-1">Primary</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-secondary text-secondary mr-1">Secondary</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-success text-success  mr-1">Success</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-danger text-danger mr-1">Danger</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-warning text-warning mr-1">Warning</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-info text-info mr-1">Info</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-light text-light mr-1">Light</Link>
                                        <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-dark text-dark mr-1">Dark</Link>
                                    </Card.Body>
                                </Card>
                            </Col>  
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default UiBadges;