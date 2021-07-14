import {useState} from "react";
import {editStudent,deleteStudent} from "../services/student";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

export const Student = (props) => {
    const {email, name, yearLevel, _id} = props.props
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState({email, name, yearLevel})
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setThisDetail = (thisDetail) => (e) => {
        let copy = details
        copy[thisDetail] = e.target.value
        setDetails(copy)
    }
    const handleEdit = () => {
        setLoading(true)
        editStudent(_id, details)
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

    const handleDelete = ()=>{
        console.log('lol')
        if(window.confirm('Are you sure you want to delete record for '+name+'? This action cannot be undone.')){
            deleteStudent(_id.toString())
                .then(r=>history.go(0))
                .catch(err => {
                    if (err.response) {
                        alert(err.response.data.error)
                    }
                    setLoading(false)
                })
        }else{

        }
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
                            <h5>Original details:</h5>
                            <Row className="my-3">
                                <Col>{name}</Col>
                                <Col>{email}</Col>
                                <Col>{yearLevel}</Col>
                            </Row>
                            <h5>New Details:</h5>
                            <Row>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={2}>Name</Form.Label>
                                    <Col xs={10}>
                                        <Form.Control onChange={setThisDetail('name')}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={2}>Email</Form.Label>
                                    <Col xs={10}>
                                        <Form.Control onChange={setThisDetail('email')}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <div>
                                        <Form.Label>Year Level</Form.Label>
                                        <select onChange={setThisDetail('yearLevel')} className="form-select"
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
                            <Button variant="primary" onClick={handleEdit}>
                                Save Changes
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    return (<>
            <Row className="py-2 align-items-center">
                <Col xs={2}>{name}</Col>
                <Col xs={3}>{email}</Col>
                <Col xs={2}>{yearLevel == 8 ? "Year 8 or below" : "Year " + yearLevel}</Col>
                <Col xs={3}></Col>
                <Col xs={2}>
                    <Button onClick={handleShow} variant="outline-info">
                        Edit
                    </Button>
                    <Button onClick={handleDelete} className="ml-3" variant="outline-danger">
                        X
                    </Button>
                </Col>
                {EditModal()}
            </Row>
        </>
    )
}