
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
