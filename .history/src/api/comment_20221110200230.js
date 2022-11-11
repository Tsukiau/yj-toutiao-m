import request from '@/utils/request'

/**
 * 获取文章列表
 */
export function getComments(params){
   return request({
    url:'/comment/getComments',
    method:'get',
    params
   }{}
}