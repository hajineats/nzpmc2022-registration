import {Col, Row} from "react-bootstrap";

export const Student = (props) => {
    const {firstName, middleName, surname, email, yearLevel, _id} = props.props
    return (<>
            <Row className="py-2 align-items-center">
                <Col xs={4}>{`${firstName}${middleName?` ${middleName}`:""} ${surname}`}</Col>
                <Col xs={4}>{email}</Col>
                <Col xs={4}>{yearLevel == 8 ? "Year 8 or below" : "Year " + yearLevel}</Col>
            </Row>
        </>
    )
}