import request from '@/utils/request'

// 发送短信验证码
export function getSms (mobile) {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

/**
 * 用户登录
 */
export function login(data) {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

/* 
 获取用户自己的信息
*/
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user',
  })
}