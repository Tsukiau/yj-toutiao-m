<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar 
    :title="currentComment.reply_count > 0 ""`{currentComment.reply_count}`回复" : ''
     class="comment_bar">
      <van-icon slot="left" name="cross" />
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
.comment_bar{
   background-color: #fff;
   /deep/ .van-ellipsis {
     color: #333;
   }
}
</style>
