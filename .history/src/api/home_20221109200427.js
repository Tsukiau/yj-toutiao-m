
 import serve from '@/utils/Cookies'

 /**
  * 获取频道的文章列表
  */
 export const getArticles = params => {
   return serve({
     method: 'GET',
     url: '/v1_0/articles',
     params
   })
 }

 /**
 * 获取所有频道
 */
export const getAllChannels = () => {
  return serve({
    method: 'GET',
    url: '/v1_0/channels'
  })
}

/**
 * 添加用户频道
 */
 export const addUserChannel = channel => {
  return request1({
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
  return request1({
    method: 'DELETE',
    url: `/v1_0/user/channels/${channelId}`
  })
}