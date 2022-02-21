import {Button, Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {createStudent} from "./services/student";
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
                console.log(err)
                if(err.response){
                    alert(err.response.data.error)
                }
                setLoading(false)
            })
    }

    function FormForStudent() {
        return (
            <>
                <Form.Group as={Row} className="my-3" >
                    <Form.Label column sm="2">Teacher Code</Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={handleChange('teacher')}
                                      type="text"
                                      placeholder="Your teacher received this when they registered"
                                      required />
                    </Col>
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control onChange={handleChange('firstName')}
                                      type="text"
                                      required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Middle Name (Optional)</Form.Label>
                        <Form.Control onChange={handleChange('middleName')}
                                      type="text"
                                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control onChange={handleChange('surname')}
                                      type="text"
                                      required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleChange('email')}
                                      type="email"
                                      placeholder="eg. student.nzpmc@gmail.com"
                                      required/>
                    </Form.Group>
                </Row>
                <Form.Group as={Row}>
                    <div>
                        <Form.Label>Year Level</Form.Label>
                        <select onChange={handleChange('yearLevel')} className="form-select" aria-label="select example" required>
                            <option value={null}>Select...</option>
                            <option value="8">Below Year 9</option>
                            <option value="9">Year 9</option>
                            <option value="10">Year 10</option>
                            <option value="11">Year 11</option>
                            <option value="12">Year 12</option>
                            <option value="13">Year 13</option>
                        </select>
                    </div>
                </Form.Group>
                <Form.Group as={Row}>
                    <div>
                        <Form.Label>How did you hear about us?</Form.Label>
                        <select onChange={handleChange('howDidYouHear')} className="form-select" aria-label="select example" required>
                            <option value={null}>Select...</option>
                            <option value="Facebook">Facebook</option>
                            <option value="School">School</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Friend">Friend</option>
                            <option value="Parent">Parent</option>
                            <option value="The NZPMC website">The NZPMC website</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </Form.Group>
                <Form.Group as={Row}>
                    <div>
                        <Form.Label>What motivated you the most to take this competition?</Form.Label>
                        <select onChange={handleChange('whatMotivatedYou')} className="form-select" aria-label="select example" required>
                            <option value={null}>Select...</option>
                            <option value="Parents">Parents</option>
                            <option value="Friends">Friends</option>
                            <option value="Teacher/School">Teacher/School</option>
                            <option value="To showcase my academic ability">To showcase my academic ability</option>
                            <option value="To challenge myself">To challenge myself</option>
                            <option value="Prizes">Prizes</option>
                            <option value="It sounded fun">It sounded fun</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </Form.Group>
            </>
        );
    }

    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            <h3 className={"my-3"}>Student Registration</h3>
            <p>Students can self-register themselves through this form. They won't be able to self-register unless their teacher registers and gives the students a teacher code.</p>
            <p>Note that the competition this year is on paid registration basis. Your school will handle payment after registration closes. For more information, refer to the website (https://www.nzpmc.com).</p>

            <FormForStudent className={"my-3"}/>

            {loading?
                <div>Loading</div>
                :
                <div>
                    <Button type={"submit"}>
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