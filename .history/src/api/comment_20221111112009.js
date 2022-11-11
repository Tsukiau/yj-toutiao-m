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

