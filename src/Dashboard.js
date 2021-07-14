import {getAllTeachers} from './services/teacher'
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Teacher} from "./dashboard/Teacher";

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
            {teachers.map(t => <Teacher key={t._id.toString()} props={t}/>)}
        </>
    }

    const generateCSV = ()=>{
        let csv = 'StudentName,StudentEmail,StudentYearLevel,TeacherName,TeacherEmail,SchoolName,SchoolAddress\n';
        teachers.forEach(t=>{
            t.students.forEach(s=>{
                const row = [s.name, s.email, s.yearLevel,t.name,t.email,t.schoolName,t.schoolAddress]
                csv += row.join(',')
                csv += "\n"
            })
        })

        const hiddenElement = document.createElement('a')
        hiddenElement.href= 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'people.csv';
        hiddenElement.click();
    }
    return (
        <>
            <Button onClick={generateCSV}>Generate CSV for all students</Button>
            {renderTeachers()}
        </>
    )

}

export default Dashboard