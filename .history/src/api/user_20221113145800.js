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
export function getUserInfo(){
  return request({
    method: 'GET',
    url: '/v1_0/user',
  })
}

/**
 * 获取用户自己的信息
 */
 export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user/channels'
  })
}

// 获取当前用户的个人资料
export const getUserProfile = () => {
  return request( {
    method: 'GET',
    url: '/v1_0/user/profile'
  })
}

// 更新用户资料
export const updateUserProfile = data => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/profile',
    data
  })
}

// 更新用户照片资料
export const updateUserPhoto = data => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    data
  })
}