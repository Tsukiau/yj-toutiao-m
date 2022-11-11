<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar title="N条回复`">
      <van-icon slot="left" name="cross" />
    </van-nav-bar>
    <comment_item />
  </div>
</template>

<script>
import comment_item from './comment_item.vue'
import
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

</style>
