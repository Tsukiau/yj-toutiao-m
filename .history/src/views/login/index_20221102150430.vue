<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" v-model="dataForm">
      <van-field
      name="用户名"
      placeholder="请输入手机号"
       v-model="dataForm.mobile"
       :rules="[{ required: true, message: '请填写用户名',  },
       {}]"
       ><i slot="left-icon" class="iconfont icon-shouji1"></i>
      </van-field>
      <!--  -->
      <van-field
       name="验证码"
        placeholder="请输入验证码"
         v-model="dataForm.code">
       <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        </van-field>
      <!--  -->
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
    return {
      dataForm: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>
