import {Form} from "react-bootstrap";

export function TwoLineSingleInput({id, name, type = "text", placeholder = ""}) {
    return <Form.Group controlId={id}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type={type} placeholder={placeholder}/>
    </Form.Group>;
}