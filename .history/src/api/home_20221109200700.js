
 //import serve from '@/utils/Serve'
 import request from '@/utils/request'

 /**
  * 获取频道的文章列表
  */
 export const getArticles = params => {
   return request({
     method: 'GET',
     url: '/v1_0/articles',
     params
   })
 }

 /**
 * 获取所有频道
 */
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}

/**
 * 添加用户频道
 */
 export const addUserChannel = channel => {
  return serve({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  })
}

/**
 * 删除用户频道
 */
 export const deleteUserChannel = channelId => {
  return serve({
    method: 'DELETE',
    url: `/v1_0/user/channels/${channelId}`
  })
}