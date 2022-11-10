import Cookies from 'js-cookie'

const Token = 'Token' 
const refreshToken = 'refresh_token'

export function getToken(){
   return Cookies.get(Token)
}

export function setToken(token){
    return Cookies.set(Token, token)
}

export function removeToken(){
    return Cookies.remove(Token)
}
// 
export function getRefresh_token(){
    return Cookies.get(refresh_token)
 }
 
 export function setRefresh_token(refresh_token){
     return Cookies.set(refresh_token, refresh_token)
 }