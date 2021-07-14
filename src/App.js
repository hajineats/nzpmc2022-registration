import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import {Navigation} from "./Navigation";
import {Instruction} from "./Instruction";
import {NZPMCTeacherForm} from "./NZPMCTeacherForm";
import {Link, Route, Switch,} from "react-router-dom"
import {Warning} from "./Warning";
import NZPMCStudentForm from "./NZPMCStudentForm"
import Dashboard from "./Dashboard";
import {useState} from "react";
import {sendTeacherCSV} from "./services/mail";

const SearchByTeacher = ()=>{
    const [teacherCode, setTeacherCode] = useState("")
    const handleEmailMe = ()=>{
        sendTeacherCSV(teacherCode)
            .then(res=>{
                console.log(res)
                alert("Check your inbox!")
            })
            .catch(err=>{
                alert("Make sure that you have input a valid teacher code")
            })
    }
    return (
        <section className="bg-primary text-light p-5">
            <Container>
                <Row className="align-items-center">
                    <Col xs={4}>
                        <h3>
                            Teachers:
                        </h3>
                        <p>
                            You can receive csv of your students' details by entering your teacher code into this box.
                        </p>
                    </Col>
                    <Col xs={8}>
                        <InputGroup className="mb-3">
                            <FormControl onChange={e=>setTeacherCode(e.target.value)} />
                            <Button onClick={handleEmailMe} variant="dark" >
                                Email me!
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const App = () => {

    return (
        <>
            <Navigation/>
            <Instruction/>

            <Switch>
                <Route exact path="/">
                    <SearchByTeacher/>
                </Route>
            </Switch>
            <Container className="my-3">
                <Switch>
                    <Route path="/student">
                        <NZPMCStudentForm />
                    </Route>
                    <Route path="/teacher">
                        <NZPMCTeacherForm/>
                    </Route>
                    <Route path="/ThankYou">
                        <Container>
                            <h1>
                                Thank you for signing up.
                            </h1>
                            <p>
                                Confirmation details are sent to your email. If you have any queries or issues, please email contact.nzpmc@gmail.com.
                            </p>
                            <Link to="/">
                                <Button>Back to Main Menu</Button>
                            </Link>
                        </Container>
                    </Route>
                    <Route path="/Dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/">
                        <Warning/>
                    </Route>
                </Switch>
            </Container>


        </>
    )
}

export default App