<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar :title="`${currentComment}条回复`" class="comment_bar">
      
    </van-nav-bar>
    <comment_item :comment_item="currentComment" />
  </div>
</template>

<script>
import comment_item from './comment_item.vue'
export default {
  components: { comment_item },
  name: 'comment-reply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
        
    }
  }

}
</script>

<style lang="less" scoped>
.van-popup__close-icon{
   color: #fff;
}
</style>
