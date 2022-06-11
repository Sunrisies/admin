import axios from 'axios'
import {ElMessage} from "element-plus";
import { getToken } from '~/composables/auth.js'

const service = axios.create({
    baseURL: '/api',
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //获取token
    const token = getToken()
    //如果有登入自动传token
    if(token){
        config.headers.Authorization = 'Bearer ' +token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const errors = {
        errorEmail:null,
        errorPassword:null
    }
    if(error.response.data.errors.email || error.response.data.errors.password){
        errors.errorEmail = error.response.data.errors.email;
        errors.errorPassword = error.response.data.errors.password;
    }
    ElMessage({
        message: errors.errorEmail || errors.errorPassword,
        type: 'error',
    })
    return Promise.reject(error);
});



export default service