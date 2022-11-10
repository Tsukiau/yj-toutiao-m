import Cookies from 'js-cookie'

const Token = 'Token' 
const RefreshToken = 'RefreshToken'

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
    return Cookies.get(RefreshToken)
 }
 
 export function setRefresh_token(RefreshToken){
     return Cookies.set(RefreshToken, RefreshToken)
 }