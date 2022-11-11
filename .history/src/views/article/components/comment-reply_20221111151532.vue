<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar :title="`${Comment.reply_count}条回复`">
      <van-icon slot="left" name="cross" />
    </van-nav-bar>
    <comment_item :Comment="Comment" />
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

</style>
