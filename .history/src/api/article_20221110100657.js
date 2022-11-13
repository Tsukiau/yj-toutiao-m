
 import request from '@/utils/request'
 /**
 * 文章接口模块
 */
 export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: '/app/v1_0/articles/' + articleId
  })
}