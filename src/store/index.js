import {createStore} from "vuex";
import { login,getinfo } from '~/api/manager'
import {setToken} from '~/composables/auth'
const store = createStore({
	state(){
		return {
			//用户信息
			user:{}
		}
	},
	mutations:{
		//记录用户信息
		SET_USERINFO(state,user){
			state.user = user;
		}
	},
	actions:{
		//用户登入
		login({commit},{email,password}){
			return new Promise((resolve, reject) =>{
				login(email,password).then(res => {
					setToken(res.access_token)
					resolve(res)
				}).catch(err => reject(err))
			})
		},
		//获取当前用户信息
		getInfo({commit}){
			return new Promise((resolve, reject) =>{
				getinfo().then(res => {
					console.log(res,'222222222222222222222222')
					commit('SET_USERINFO',res)
					resolve(res)
				}).catch(err => reject(err))
			})
		}
	}
})

export default store;