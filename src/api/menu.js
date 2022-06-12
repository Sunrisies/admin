import axios from '~/axios'

export function getMenu() {
	return axios.get('/api/admin/menus')
}