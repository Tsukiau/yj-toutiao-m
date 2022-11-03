<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field v-model="mobile" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
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
  },
  methods: {
    onSubmit () {}
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
