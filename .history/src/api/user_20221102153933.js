import request from '@/utils/request'

// 发送短信验证码
export function sms (mobile) {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
