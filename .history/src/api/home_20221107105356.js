import request from '@/utils/request'

// 发送短信验证码
export function getSms (mobile) {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
