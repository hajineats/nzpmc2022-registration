import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Warning = ({}) => {
    return (<>
            <div className="mt-5 alert alert-primary" role="alert">
                <strong>Important Note: </strong>
                <br/>
                A teacher must register into the competition before the student registers.
                Student needs the email address of a registered teacher to register themselves.

                <br/>
                <br/>
                After a student registers, the student will receive an email with information about fee payment.
            </div>
            <div className="my-5 d-flex justify-content-center">
                <Link to="/teacher">
                    <Button variant="primary" size="lg">
                        I'm a Teacher
                    </Button>
                </Link>
                <Link to="/student">
                    <Button variant="secondary" className="ml-3" size="lg">
                        I'm a Student
                    </Button>
                </Link>
            </div>
        </>
    )
}