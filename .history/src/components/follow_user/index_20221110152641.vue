<template>
    <van-button 
          v-if="!article.is_followed"
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
export default {
  props: {
    isFollowed: {
      type: Boolean,
      required: true
    } 
  },
   data(){
     return {
       
     }
   }
}
</script>

<style>

</style>