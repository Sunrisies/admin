import store from './store'
import router from '~/router'
import { getToken } from '~/composables/auth'
import { ElMessage } from "element-plus"

//全局导航守卫
router.beforeEach(async (to, from, next) => {
	//获取token
	const token = getToken()
	//如果没有登入，直接跳转到登入页面
	if (!token && to.path != '/login') {
		ElMessage({
			message: '请先登入',
			type: 'error',
		})
		return next({ path: '/login' })
	}
	// 防止重复登入
	if (token && to.path == '/login') {
		ElMessage({
			message: '请勿重复登入',
			type: 'error',
		})
		return next({ path: from.path ? from.path : '/' })
	}

	//如果用户登入了，自动获取用户信息，并且存储在vuex
	if (token) {
		await store.dispatch('getInfo')
	}
	next()
})