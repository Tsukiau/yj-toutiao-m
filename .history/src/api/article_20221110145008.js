
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
export const addFollow = () => {
   return request({
     url: '/v1_0/user/followings',
     method: ''
   })
}