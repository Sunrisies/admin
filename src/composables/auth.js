import {useCookies} from "@vueuse/integrations/useCookies";
import { TOKEN_TIME,TOKEN_TIME_VALUE } from "./constant";

const cookies = useCookies()

//设置token
export function setToken( token ) {
	let expires = new Date(new Date() * 1 + TOKEN_TIME_VALUE)
	return cookies.set(TOKEN_TIME,token,{ expires: expires })
}
//获取token
export function getToken() {
	return cookies.get(TOKEN_TIME)
}

//清除token
export function removeToken( ) {
	return cookies.remove(TOKEN_TIME)
}
