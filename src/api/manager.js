//引入axios
import axios from '~/axios'

export function login(email, password) {
    return axios.post('/api/auth/login', {
        email,
        password
    })
}