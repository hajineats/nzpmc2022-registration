import axios from "axios";

export const sendTeacherCSV = (id, csv)=>{
    const req = axios.get('/api/mail/'+encodeURI(id))
    return req.then(res=>res.data)
}
