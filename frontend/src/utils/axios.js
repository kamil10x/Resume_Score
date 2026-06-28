import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:4000",
    //timeout:1000,
   // headers:{'Content-Type':'application/json'}
})

export default instance;

//https://rusume-ai-scorer-1.onrender.com