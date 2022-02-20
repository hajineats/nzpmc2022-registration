import axios from "axios";

export const createStudent = (details)=>{
    console.log('details:',details)
    const req = axios.post('/api/students', details)
    return req.then(res=>res.data)
}

export const editStudent = (id, details)=>{
    const req = axios.put(
        '/api/students/'+encodeURI(id.toString()),
            details
        )
    return req.then(res=>res.data)
}
export const deleteStudent = (id)=>{
    const req = axios.delete('/api/students/'+encodeURI(id.toString()))
    return req.then(res=>res.data)
}