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
            .then(r=>{
                alert(`Your teacher code: ${r._id}\nNote it down somewhere so you don't lose it.`)
                history.push('/ThankYou')
            })
            .catch((err)=>{
                if(err.response){
                    alert(err.response.data.error)
                }
                setLoading(false)
            })
    }
    function FormForTeacher() {
        return (<>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleChange('name')} type="text" placeholder="Enter your full name" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleChange('email')} type="email" placeholder="eg. contact.nzpmc@gmail.com" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>School Name</Form.Label>
                    <Form.Control onChange={handleChange('schoolName')} type="text" placeholder="Enter the school name" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>School Address</Form.Label>
                    <Form.Control onChange={handleChange('schoolAddress')} type="text" placeholder="Enter the school address" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={handleChange('phoneNumber')}
                                  type="text"
                                  placeholder="This will be used as a primary emergency contact for second round"
                                  required/>
                </Form.Group>
                <Form.Group as={Row}>
                    <div>
                        <Form.Label>I am a...</Form.Label>
                        <select defaultValue={"Physics Teacher"} onChange={handleChange('teacherCategory')} className="form-select" aria-label="select example" required>
                            <option value="Physics Teacher">Physics Teacher</option>
                            <option value="Math Teacher">Math Teacher</option>
                            <option value="Other subject teacher">Other subject teacher</option>
                            <option value="Home schooling parent">Home schooling parent</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </Form.Group>
                <Form.Group as={Row}>
                    <div>
                        <Form.Label>My school is in</Form.Label>
                        <select defaultValue={"North Island"} onChange={handleChange('island')} className="form-select" aria-label="select example" required>
                            <option value="North Island">North Island</option>
                            <option value="South Island">South Island</option>
                        </select>
                    </div>
                </Form.Group>
            </>

        )
    }


    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <h3>Teacher Registration</h3>
            <p className="my-3">
                You will receive a teacher code after registration. <strong>It is important that you don't lose this, as you won't be able to retrieve it once it is lost.</strong> Your students will use this code to register. In addition, you can use this code to download csv of all the registered students so far on the homepage of this website.
            </p>

            <FormForTeacher/>

            {loading?
                <span>Loading</span>

                :
                <div>
                    <Button type="submit" variant="primary" type="submit">
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