<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar title="N条回复`">
      <van-icon slot="left" name="cross" />
    </van-nav-bar>
    <Comm
  </div>
</template>

<script>
import
export default {
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
