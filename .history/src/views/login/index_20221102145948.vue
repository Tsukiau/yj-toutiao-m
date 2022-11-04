<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field name="用户名" placeholder="请输入手机号" />
      <van-field name="验证码" placeholder="请输入验证码" />
      <div style="margin: 35px;">
        <van-button block type="info" native-type="submit" round>提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'appLogin',
  data () {
    return {}
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>
