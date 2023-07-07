import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseAPIAuth = axios.create({
    baseURL : process.env.BASE_URL,
    headers : {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    },
    validateStatus: function(){
        return true;
    }
});

export default BaseAPIAuth;
