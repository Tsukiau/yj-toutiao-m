import Cookies from 'js-cookie'

const Token = 'Token' 

export function getToken(){
   return Cookies.get(Token)
}

export function setToken(token){
    return Cookies.set(Token, token)
}

exprot function remove