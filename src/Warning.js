import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export const Warning = ({}) => {
    return (<>
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