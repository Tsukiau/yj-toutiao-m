
import request from '@/utils/request'
/**
* 文章接口模块
*/
export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: '/v1_0/articles/' + articleId
  })
}

/* 
添加关注
*/
export const addFollow = (userId) => {
  return request({
    url: '/v1_0/user/followings',
    method: 'POST',
    data: {
      target: userId
    }
  })
}

/* 
取消关注
*/
export const deleteFollow = (userId) => {
  return request({
    method: 'DELETE',
    url: `/v1_0/user/followings/${userId}`,
  })
}

/**
 * 收藏文章
 */
 export const addCollect = target => {
  return request({
    method: 'POST',
    url: '/v1_0/article/collections',
    data: {
      target
    }
  })
}

/**
 * 取消收藏文章
 */
 export const deleteCollect = target => {
  return request({
    method: 'DELETE',
    url: `/v1_0/article/collections/${target}`
  })
}