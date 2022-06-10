import axios from 'axios'

const service  = axios.create({
    baseURL:'https://api.shop.eduwork.cn/',

})

export default service;