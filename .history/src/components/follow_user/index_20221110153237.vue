<template>
    <van-button 
          v-if="!isFollowed"
          class="follow-btn" 
          type="info" color="#3296fa" 
          round size="small" 
          icon="plus"
          @click="onFollow"
          :loading="followLoading"
          >
          关注</van-button>
          <van-button
            v-else
            class="follow-btn"
            round
            :loading="followLoading"
            size="small"
            @click="onFollow"
           >
          已关注</van-button>
</template>

<script>
import { deleteFollow, addFollow } from '@/api/article'
export default {
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    } 
  },
   data(){
     return {
      followLoading: false // 关注加载状态
     }
   },
   methods: {
   async onFollow(){
    this.followLoading =true
       try{
        if(this.isFollowed){
           // 已关注 执行取消关注
           await deleteFollow(this.article.aut_id)
          }else {
            // 没有关注 执行关注
            await addFollow(this.article.aut_id)
          }
          this.article.is_followed = !this.article.is_followed
        }catch(err){
          console.log(err)
        }
        this.followLoading = false
    }
   }
}
</script>

<style>

</style>