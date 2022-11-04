<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />
    <!-- 登录表单 -->
    <van-form v-model="dataForm" ref="form">
      <van-field name="手机号" placeholder="请输入手机号" v-model="dataForm.mobile" :rules="[{ required: true, message: '请填写手机号', trigger: 'blur' },
      { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }]"><i slot="left-icon" class="iconfont icon-shouji1"></i>
      </van-field>
      <!--  -->
      <van-field name="验证码" placeholder="请输入验证码" v-model="dataForm.code" :rules="[{ required: true, message: '请填写验证码', trigger: 'blur' },
      { pattern: /^\d{6}$/, message: '验证码格式错误' }]">
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
      </van-field>
      <!--  -->
      <div style="margin: 35px;">
        <van-button block type="info" native-type="submit" round @click="onSubmit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { sms } from '@/api/user'
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
    ...mapActions(['getSms']),
    onSubmit () {
      this.$refs.form.validate(async val => {
        console.log(val)
        /* if (val) {
          try {
            const res = await sms(this.dataForm)
            console.log(res)
          } catch (err) {
            console.log(err)
          }
        } */
      })
    }
  }
}
</script>
