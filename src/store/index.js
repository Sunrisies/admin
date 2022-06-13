import { createStore } from "vuex"
import { login, getinfo } from '~/api/manager'
import { setToken,removeToken } from '~/composables/auth'
import router from '~/router'	
const store = createStore({
	state() {
		return {
			//用户信息
			user: {},
			//点击按钮
			siderType:false
		}
	},
	mutations: {
		//记录用户信息
		SET_USERINFO(state, user) {
			state.user = user 
		},
		//改变按钮
		changeSiderType(state){
			state.siderType = !state.siderType
		}
	
	},
	actions: {
		//用户登入
		login({ commit }, { email, password }) {
			return new Promise((resolve, reject) => {
				login(email, password).then(res => {
					setToken(res.access_token)
					resolve(res)
				}).catch(err => reject(err))
			})
		},
		//获取当前用户信息
		getInfo({ commit }) {
			return new Promise((resolve, reject) => {
				getinfo().then(res => {
					commit('SET_USERINFO', res)
					resolve(res)
				}).catch(err => reject(err))
			})
		},
		//用户退出
		logout({ commit }) {
			//清空用户信息
			commit('SET_USERINFO', '')
			//清空token
			removeToken()
			//跳转到登入页面
			router.replace('/login')
		}
	}
})

export default store