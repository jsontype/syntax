import React , { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Card from '../../../components/Card'

const EditTable = () => {
    const data =[{
        "id": 1,
        "Name": "Gio Metric",
        "Age": "25",
        "Company": "Deepends",
        "Country": "Spain",
        "City":"Madrid",
    },
    {
        "id": 2,
        "Name": "Manny Petty",
        "Age": "45",
        "Company": "Insectus",
        "Country": "France",
        "City":"San Francisco",
    },
    {
        "id": 3,
        "Name": "Lucy Tania",
        "Age": "35",
        "Company": "Isotronic",
        "Country": "Germany",
        "City":"Frankfurt am Main",
    },
    {
        "id": 4,
        "Name": "Anna Mull",
        "Age": "35",
        "Company": "Portica",
        "Country": "USA",
        "City":"Oregon",
        
    }]
    
    const [Add, setAdd] = useState(data)
    const [addFormData] = useState({
        id: "",
        Name:"",
        Age:"",
        Company:"",
        Country:"",
        City:"",
        
    })
    
    const handleAddFormChanges=(event)=>{
        event.preventDefault();
        const id = event.target.closest('tr').getAttribute('dataid')
        const tdElem = event.target.closest('tr').querySelectorAll('td')
        const obj = {
            id: Number(id)
        }
        Array.from(tdElem, (elem) => {
            if (elem.getAttribute('name') !== null) {
                obj[elem.getAttribute('name')] = elem.innerText
            }
            return null
        })
        const newArrIndex = Add.findIndex(item => {
            if (item.id === Number(id)) {
                return item
            }else{
                return null
            }
        })
        Add[newArrIndex] = obj
        setAdd(Add)
        
    };
    
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        let newContact = {
            id:Add.length+1,
            Name: addFormData.Name,
            Age: addFormData.Age,
            Company: addFormData.Company,
            Country:addFormData.Country,
            City: addFormData.City
        };
        // Add.push(newContact)
        const newContacts = [...Add, newContact];
        setAdd(newContacts);
        
    };
    
    const handleDeleteClick = (addId) => {
        const newContacts = [...Add];
        const index = Add.findIndex((adds) => adds.id === addId);
        newContacts.splice(index,1);
        setAdd(newContacts);
        
    }
    return(
        <>
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Editable Table</h4>
                                </Card.Header.Title>                           
                            </Card.Header>
                            <Card.Body>
                                <div id="table" className="table-editable">
                                    <span className="table-add float-right mb-3 mr-2">
                                        <button onClick={handleAddFormSubmit} className="btn btn-sm iq-bg-success"><i
                                            className="ri-add-fill"><span className="pl-1">Add New</span></i>
                                        </button>
                                    </span>
                                    <table className="table table-bordered table-responsive-md table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Company Name</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th>Sort</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {Add.map((adds,props) => (       
                                                <tr key={props} dataid={adds.id}>
                                                    <td name="Name"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Name}</td>
                                                    <td name="Age"     contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Age}</td>
                                                    <td name="Company" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Company}</td>
                                                    <td name="Country" contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.Country}</td>
                                                    <td name="City"    contentEditable={true} suppressContentEditableWarning={true} onBlur={handleAddFormChanges}>{adds.City}</td>
                                                    <td>
                                                    <span className="table-up"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-up" aria-hidden="true"></i></Link></span>
                                                <span className="table-down"><Link to="#!" className="indigo-text"><i className="fa fa-long-arrow-down" aria-hidden="true"></i></Link></span>
                                                    </td>
                                                    <td>
                                                        <span className="table-remove"><button onClick={() => handleDeleteClick(adds.id)} type="button"
                                                        className="btn btn-primary btn-rounded btn-sm my-0">Remove</button></span>
                                                    </td>
                                                </tr>
                                        ))}
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


export default EditTable;