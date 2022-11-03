import request from '@/utils/request'

// 发送短信验证码
export function getSms (mobile) {
  return request({
    url: ` /v1_0/sms/codes${mobile}`
  })
}


/**
 * 用户登录
 */
 export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}