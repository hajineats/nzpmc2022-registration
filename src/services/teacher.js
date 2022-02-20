import axios from "axios";


export const createTeacher = (details)=>{
    const req = axios.post('/api/teachers', details)
    return req.then(res=>res.data)
}

export const getOneTeacherRegistration = async (teacherCode)=>{
    const req = axios.post('/api/teachers/csv', {teacherCode})
    const res = req.then(res=>res.data)
    return res
}

export const getAllTeachers = ()=>{
    const req = axios.get('/api/teachers')
    return req.then(res=>res.data)
}