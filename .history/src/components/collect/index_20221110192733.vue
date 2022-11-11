<template>
   <van-icon :color="value ? '#ffa500' : ''" :name="value ? 'star' : 'star-o'" @click="onCollect" loading />
</template>

<script>
import { addCollect, deleteCollect } from '@/api/article'
export default {
   name: 'appCollect',
   props: {
      value: {
         type: Boolean,
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
      async onCollect() {
         this.loading = true;
         try {
            if (this.value) {
               // 已收藏  执行取消收藏
               await deleteCollect(this.article_id)
            } else {
               // 没有收藏  添加收藏
               await addCollect(this.article_id)
            }
            this.$emit('input',!this.value)
            this.$toast.success(this.value ? '收藏成功' : 'q收藏' )
         } catch (err) {
            console.log(err)
         }
         this.loading = false

      }
   }
}
</script>
<style  scoped>

</style>
