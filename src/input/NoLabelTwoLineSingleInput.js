import {Form} from "react-bootstrap";

export default function NoLabelTwoLineSingleInput({id, name, type = "text", placeholder = ""}) {
    return <Form.Group controlId={id}>
        <Form.Control type={type} placeholder={placeholder}/>
    </Form.Group>;
}