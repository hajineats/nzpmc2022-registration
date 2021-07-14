import {Col, Form, Row} from "react-bootstrap";

export function SingleRowInput({id, name, type = "text", placeholder = ""}) {
    return (
        <Form.Group as={Row} className="my-3" controlId={id}>
            <Form.Label column sm="2">{name}</Form.Label>
            <Col sm="10">
                <Form.Control type={type} placeholder={placeholder}/>
            </Col>
        </Form.Group>
    )
}