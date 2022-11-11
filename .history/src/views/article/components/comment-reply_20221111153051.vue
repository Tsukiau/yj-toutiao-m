<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <div class="comment_bar">
    <span>{[${currentComment}条回复]}</span>
    </div>
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
.comment_bar{
   background-color: #fff;
   /deep/ .van-ellipsis {
     color: #333;
   }
}
/deep/ .van-popup__close-icon{
     color: #3296fa;
  }
</style>
