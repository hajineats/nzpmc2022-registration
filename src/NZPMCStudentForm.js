import {Button, Col, Form, Row} from "react-bootstrap";
import {TwoLineSingleInput} from "./input/TwoLineSingleInput";
import NoLabelTwoLineSingleInput from './input/NoLabelTwoLineSingleInput'
import {SingleRowInput} from "./input/SingleRowInput";
import {useState} from "react";
import {createStudent} from "./services/student";
import {createTeacher} from "./services/teacher";
import {Link, useHistory} from "react-router-dom";



export default function NZPMCTeacherForm() {
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleChange = (attr)=> e=>{
        let copy = details
        copy[attr] = e.target.value
        setDetails(copy)
        console.log(details)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setLoading(true)
        createStudent(details)
            .then(r=>history.push('/ThankYou'))
            .catch((err)=>{
                if(err.response){
                    alert(err.response.data.error)
                }
                setLoading(false)
            })
    }

    function FormForStudent() {

        return (
            <>
                <Row>
                    <Form.Group as={Row} className="my-3" >
                        <Form.Label column sm="2">Teacher Code</Form.Label>
                        <Col sm="10">
                            <Form.Control onChange={handleChange('teacher')} type="text" placeholder="Enter the code given by your teacher (your teacher would have received this if they registered)"/>
                        </Col>
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleChange('name')} type="text" placeholder="Enter your full name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange('email')} type="email" placeholder="eg. student.nzpmc@gmail.com"/>
                        </Form.Group>
                    </Col>
                    <Form.Group as={Col}>
                        <div>
                            <Form.Label>Year Level</Form.Label>
                            <select onChange={handleChange('yearLevel')} className="form-select" aria-label="select example">
                                <option value={null}>Select Year</option>
                                <option value="8">Below Year 9</option>
                                <option value="9">Year 9</option>
                                <option value="10">Year 10</option>
                                <option value="11">Year 11</option>
                                <option value="12">Year 12</option>
                                <option value="13">Year 13</option>
                            </select>
                        </div>
                    </Form.Group>
                </Row>
            </>
        );
    }

    return (
        <Form className="mt-5">
            <h3>Student Details</h3>

            <FormForStudent/>
            <p className="my-3">
                After submitting, you will shortly receive a confirmation email with your details and information about payment.
            </p>
            {loading?
                <div>Loading</div>
                :
                <div>
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Link to="/">
                        <Button variant="secondary" className="ml-3">
                            Back
                        </Button>
                    </Link>
                </div>
            }
        </Form>
    );
}