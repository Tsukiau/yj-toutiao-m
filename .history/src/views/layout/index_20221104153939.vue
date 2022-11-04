<template>
  <div class="layout-container">
    <!-- 标签导航栏 -->
    <van-tabbar class="layout-tabbar" v-model="active">
      <van-tabbar-item>
        <i slot="icon" class="iconfont toutiao-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <i slot="icon" class="iconfont toutiao-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <i slot="icon" class="iconfont icon-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <i slot="icon" class="iconfont icon-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>

</style>
