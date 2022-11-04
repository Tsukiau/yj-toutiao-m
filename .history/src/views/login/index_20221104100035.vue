<template>
  <div class="login-container">
    <van-nav-bar title="登录" class="page-nav-bar">
      <van-icon slot="left" name="cross" @click="$router.back()" />
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field 
      v-model="user.mobile"
       required name="mobile"
        clearable label="手机号"
         placeholder="请输入手机号"
          type="number"
           maxlength="11" 
            :rules="[{ required: true, message: '手机号不能为空', trigger: 'blur', },
        { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }]">
        <i slot="left-icon" class="iconfont icon-shouji"></i>
      </van-field>
      <!--  -->
      <van-field 
      v-model="user.code" 
      type="number" 
      label="验证码" 
      placeholder="请输入验证码" 
      required maxlength="6" 
      name="code"
        :rules="[{ required: true, message: '验证码不能为空', },
        { pattern: /^\d{6}$/, message: '验证码格式错误' }]">
        <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
        <!-- 倒计时 -->
        <template #button>
        <van-count-down
        v-if="isCountDownShow" 
         :time="1000 * 5" 
        format="ss s" 
        />
        <van-button v-else 
        round
        size="small" native-type="button" 
        class="send-sms-btn"
        type="default" @click="onSendSms">发送验证码
        </van-button>
        </template>
       
        <!--  -->
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit" round>
          登录
        </van-button>
      </div>
    </van-form>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import { login, getSms } from '@/api/user'
export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      isCountDownShow: false // 控制倒计时的显示和隐藏
    }
  },
  methods: {
    ...mapActions(['PostLogin']),
    // 发送验证码
    async onSendSms() {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
      });
      try {
      // 验证手机验证码
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        console.log(err)
      }
      this.isCountDownShow = true
      this.$toast.success('发送成功');
      try {
        const { data } = await getSms(this.user.mobile)
        console.log(data)
      } catch (err) {
        console.log(err)
      }


    },
    // 登录
    async onSubmit(a) {
      try {
        const { data } = await login(a)
        console.log(data.data.token)
        this.$toast.success('登录成功');
      } catch (err) {
        console.log(err);
      }

    }
  }
}
</script>
<style scoped lang="less">
body {
  background-color: #f5f7f9;
}

.page-nav-bar {
  background-color: #3296fa;

  /deep/ .van-nav-bar__title {
    color: #fff;

  }
}

.iconfont {
  font-size: 37px;
}

.send-sms-btn {
  width: 70px;
  height: 23px;
  line-height: 46px;
  background-color: #ededed;
  font-size: 22px;
  color: #666;
}

.login-btn-wrap {
  padding: 53px 33px;

  .login-btn {
    background-color: #3296fa;
    border: none;
  }
}
</style>
