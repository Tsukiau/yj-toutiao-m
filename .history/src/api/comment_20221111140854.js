import request from '@/utils/request'

/**
 * 获取文章列表
 */
export function getComments(params){
   return request({
    url:'/v1_0/comments',
    method:'get',
    params
   })
}

// 对评论或评论回复点赞
export const addLike = target => {
   return request({
     method: 'POST',
     url: '/v1_0/comment/likings',
     data: {
       target
     }
   })
 }
 
 // 取消对评论或评论回复点赞
 export const deleteCommentLike = target =>  {
   return request({
     method: 'DELETE',
     url: `/v1_0/comment/likings/${target}`
   })
 }


 