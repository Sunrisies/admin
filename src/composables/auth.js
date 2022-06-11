import {useCookies} from "@vueuse/integrations/useCookies";

const toKenKey = 'access_token'
const cookies = useCookies()


//设置token
export function setToken( token ) {
	return cookies.set(toKenKey,token)
}
//获取token
export function getToken() {
	return cookies.get(toKenKey,)
}

//清除token
export function removeToken( ) {
	return cookies.remove(toKenKey)
}
