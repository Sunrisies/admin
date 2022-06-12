import axios from "~/axios"

export function getUserList() {
  return axios.get('/api/admin/users')
}