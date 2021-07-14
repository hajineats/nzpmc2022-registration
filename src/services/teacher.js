import axios from "axios";


export const createTeacher = (details)=>{
    const req = axios.post('/api/teachers', details)
    return req.then(res=>res.data)
}


export const getAllTeachers = ()=>{
    const req = axios.get('/api/teachers')
    return req.then(res=>res.data)
}