<template>
  <van-icon 
  :color="value === 1? '#red' : ''" 
  :name="value === 1 ? 'good-job' : 'good-job-o'" 
  @click="onLike" 
  loading />
</template>

<script>
import { deleteCollect, addLike } from '@/api/article'
export default {
  name: 'appLike',
  props: {
     value: {
        type: Number,
        required: true
     },
     article_id: {
        type: [String, Number],
        required: true
     }
  },
  data() {
     return {
        loading: false
     };
  },
  methods: {
    async onLike(){
       try {
          if(this.value === 1){
             // 已点赞 执行取消点赞
             await deleteCollect(this.article_id)
          }else {
             //执行点赞
             await deleteCollect(this.article_id)
          }
       }catch(err){ 
        console.log(err)
       }
    }
  }
}
</script>
<style  scoped>

</style>
