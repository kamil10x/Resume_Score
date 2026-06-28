import axios from 'axios';

const instance = axios.create({
    baseURL: "https://resume-score-a4ai.onrender.com",
    //baseURL:"http://localhost:4000",
    //timeout:1000,
   // headers:{'Content-Type':'application/json'}
})

export default instance;



