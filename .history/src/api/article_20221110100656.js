
 import request from '@/utils/request'
 export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: '/app/v1_0/articles/' + articleId
  })
}