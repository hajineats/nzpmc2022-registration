import {getAllTeachers} from './services/teacher'
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Teacher} from "./dashboard/Teacher";
export const generateCSV = (teachers)=>{
    let csv = 'StudentFirstName,StudentMiddleName,StudentSurname,StudentEmail,StudentYearLevel,HeardFrom,ReasonForTaking,TeacherCode,'
    csv+='TeacherName,TeacherEmail,SchoolName,SchoolAddress,PhoneNumber,TeacherCategory,Island\n';
    teachers.forEach(t=>{
        t.students.forEach(s=>{
            const row = [s.firstName, s.middleName, s.surname, s.email, s.yearLevel, s.howDidYouHear, s.whatMotivatedYou, s.teacher,
                t.name,t.email,t.schoolName,t.schoolAddress, t.phoneNumber, t.teacherCategory, t.island]
            csv += row.join(',')
            csv += "\n"
        })
    })

    const hiddenElement = document.createElement('a')
    hiddenElement.href= 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'registration.csv';
    hiddenElement.click();
}


const Dashboard = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getAllTeachers()
            .then(teachers => {
                console.log(teachers)
                setTeachers(teachers)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const renderTeachers = () => {
        return <>
            {teachers.map(t => <Teacher key={t._id.toString()} teacher={t}/>)}
        </>
    }

    return (
        <>
            <Button onClick={()=>generateCSV(teachers)}>Generate CSV for all students</Button>
            {renderTeachers()}
        </>
    )

}

export default Dashboard