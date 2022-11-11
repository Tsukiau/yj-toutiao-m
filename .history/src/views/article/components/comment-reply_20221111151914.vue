<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar :title="`${currentComment}条回复`" class="comment_bar">
      <van-icon slot="left" name="cross" />
    </van-nav-bar>
    <comment_item :currentComment="currentComment" />
  </div>
</template>

<script>
import comment_item from './comment_item.vue'
export default {
  components: { comment_item },
  name: 'comment-reply',
  props: {
    Comment: {
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
   .icon{
     color: #3296fa;
   }
   .van-icon-cross{
     display: ;
   }
}
</style>
