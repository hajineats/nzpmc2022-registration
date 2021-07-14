import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {Student} from "./Student";
import {createStudent, deleteStudent, editStudent} from "../services/student";
import {useState} from "react";
import {useHistory} from "react-router-dom";

export const Teacher = (props) => {
    const {email, name, schoolAddress, schoolName, students, _id} = props.props

    const [show, setShow] = useState(false);
    const [studentDetails, setStudentDetails] = useState({teacher: _id})
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setStudentThisDetail = (thisDetail) => (e) => {
        let copy = studentDetails
        copy[thisDetail] = e.target.value
        setStudentDetails(copy)
    }
    const handleAddStudent = () => {
        setLoading(true)
        createStudent(studentDetails)
            .then(r => {
                setLoading(false)
                handleClose()
                history.go(0)
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data.error)
                }
                setLoading(false)
            })
    }

    const EditModal = () => {
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit {name}'s detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <h5>New Student</h5>
                            <Row>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={2}>Name</Form.Label>
                                    <Col xs={10}>
                                        <Form.Control onChange={setStudentThisDetail('name')}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={2}>Email</Form.Label>
                                    <Col xs={10}>
                                        <Form.Control onChange={setStudentThisDetail('email')}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <div>
                                        <Form.Label>Year Level</Form.Label>
                                        <select onChange={setStudentThisDetail('yearLevel')} className="form-select"
                                                aria-label="select example">
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
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {loading ?
                            "loading" :
                            <Button variant="primary" onClick={handleAddStudent}>
                                Save Changes
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const generateCSV = ()=>{
        let csv = 'StudentName,StudentEmail,StudentYearLevel,TeacherName,TeacherEmail,SchoolName,SchoolAddress\n';

        students.forEach(s=>{
            const row = [s.name, s.email, s.yearLevel,name,email,schoolName,schoolAddress]
            csv += row.join(',')
            csv += "\n"
        })

        const hiddenElement = document.createElement('a')
        hiddenElement.href= 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = `${schoolName}_${name}_registration.csv`;
        hiddenElement.click();
    }

    return (<>
        <Container className="my-3">
            <Card>
                <Card.Header>
                    <Container>
                        <Row>
                            <Col xs={7}>
                                <Row>
                                    {"Teacher: " + name + "(" + email + ")"}
                                </Row>
                                <Row>
                                    {"School: " + schoolName + "(" + schoolAddress + ")"}
                                </Row>
                            </Col>
                            <Col xs={3}>
                                <Button onClick={handleShow} variant="outline-primary" >
                                    Add Student
                                </Button>
                                <Button className="ml-2" onClick={generateCSV}>
                                    CSV
                                </Button>
                            </Col>
                            <Col xs={2}>
                                {students.length + " students"}
                            </Col>
                        </Row>
                    </Container>
                </Card.Header>
                <Card.Body>
                    {students.map(s => <Student key={s._id.toString()} props={s}/>)}
                </Card.Body>
            </Card>
        </Container>
            {EditModal()}
    </>

    )
}