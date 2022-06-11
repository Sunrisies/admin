import axios from 'axios'

export function getMenu(){
	console.log(111)
	return axios.get('/api/admin/menus')
}