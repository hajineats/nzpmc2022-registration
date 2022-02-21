import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Student} from "./Student";
import {generateCSV} from '../Dashboard'
export const Teacher = (props) => {
    const {email, name, schoolAddress, schoolName, students, _id} = props.teacher

    return (<>
        <Container className="my-3">
            <Card>
                <Card.Header as={Container}>
                    <Container as={Row}>
                        <Col xs={8}>
                            <Row>
                                {"Teacher: " + name + "(" + email + ")"}
                            </Row>
                            <Row>
                                {"School: " + schoolName + "(" + schoolAddress + ")"}
                            </Row>
                            <Row>
                                {"Teacher Code: " + _id}
                            </Row>
                        </Col>
                        <Col xs={4}>
                                <Button className="ml-2 float-right" onClick={()=>generateCSV([props.teacher])}>
                                    CSV {`(${students.length} ${students.length<=1?"student":"students"})`}
                                </Button>
                        </Col>
                    </Container>
                </Card.Header>
                <Card.Body>
                    {students.map(s => <Student key={s._id.toString()} props={s}/>)}
                </Card.Body>
            </Card>
        </Container>
    </>

    )
}