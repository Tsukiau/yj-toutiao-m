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
      this.loading = true;
       try {
        let status = -1
          if(this.value === 1){
             // 已点赞 执行取消点赞
             await deleteCollect(this.article_id)
          }else {
             //执行点赞
             await addLike(this.article_id)
             status = 1
          }
          this.$emit('input',status)
          this.$toast.success(status === 1 ? '点赞成功' : '取消点赞')
       }catch(err){ 
        console.log(err)
       }
      this.loading = false
    }
  }
}
</script>
<style  scoped>

</style>
