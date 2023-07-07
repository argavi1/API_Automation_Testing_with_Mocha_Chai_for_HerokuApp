import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseAPICookie = axios.create({
    baseURL : process.env.BASE_URL,
    headers : {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        Cookie: 'token=abc123'
    },
    validateStatus: function(){
        return true;
    }
});

export default BaseAPICookie;