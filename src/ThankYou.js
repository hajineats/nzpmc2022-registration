import {Link, useParams} from "react-router-dom";
import {Button, Container} from "react-bootstrap";

export default function ThankYou(){
	const {id} = useParams()
	return (
		<Container>
			<h3 className={"my-3"}>
				Your registration is now complete.
			</h3>
			{id&&(
				<h5 className={"my-3"}>
					Teacher code: {id}
				</h5>
			)}
			<ul>
				<li>If you are a teacher, this is the teacher code you can share with your students. Registration confirmation and invoice will be sent after registration closes.</li>
				<li>If you are a student, this is the teacher code you registered yourself with. Your school/teacher will contact you regarding payment.</li>
			</ul>
			<p>
				If you have any queries or issues, please email contact.nzpmc@gmail.com.
			</p>
			<Link to="/">
				<Button>Back to Main Menu</Button>
			</Link>
		</Container>
	)
}
