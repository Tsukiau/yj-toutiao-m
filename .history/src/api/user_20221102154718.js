import request from '@/utils/request'

// 发送短信验证码
export const sms = (mobile) {
  return request({
    url: ` /v1_0/sms/codes${mobile}`
  })
}
