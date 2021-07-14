import {Button, Col, Form, Row} from "react-bootstrap";

import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {createTeacher} from './services/teacher'

export function NZPMCTeacherForm() {
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleChange = (attr)=> e=>{
        let copy = details
        copy[attr] = e.target.value
        setDetails(copy)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setLoading(true)
        createTeacher(details)
            .then(r=>history.push('/ThankYou'))
            .catch((err)=>{
                if(err.response){
                    alert(err.response.data.error)
                }
                setLoading(false)
            })
    }
    function FormForTeacher() {
        return (<>
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
                            <Form.Control onChange={handleChange('email')} type="email" placeholder="eg. contact.nzpmc@gmail.com"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>School Name</Form.Label>
                            <Form.Control onChange={handleChange('schoolName')} type="text" placeholder="Enter the school name"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>School Address</Form.Label>
                            <Form.Control onChange={handleChange('schoolAddress')} type="text" placeholder="Enter the school address"/>
                        </Form.Group>
                    </Col>
                </Row>
            </>

        )
    }


    return (
        <Form className="mt-5">
            <h3>Teacher Details</h3>

            <FormForTeacher/>

            <p className="my-3">
                You will receive a confirmation email if you have been registered successfully. The email will contain a code that you can share with your students, which they will need to register themselves.
            </p>
            {loading?
                <span>Loading</span>

                :
                <div>
                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to="/">
                        <Button className="ml-3" variant="secondary">Back</Button>
                    </Link>
                </div>
            }
        </Form>
    );
}