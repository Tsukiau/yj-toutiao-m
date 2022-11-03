<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
      
  </div>
</template>
<script>
export default {
  name: 'appLogin',
  data () {
    return {
      dataForm: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #3296fa;

  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
</style>
