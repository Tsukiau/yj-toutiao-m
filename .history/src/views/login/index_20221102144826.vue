<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <!--    -->
    <van-form :v-model="dataForm">
      <van-cell-group inset>
        <van-field
         name="手机号"
         label="手机号"
         placeholder="手机号"
          v-model="mobile"
           :rules="[{required:true,message:'请输入正确手机号', trigger: 'blur'},
          {}]"><i slot="left-icon" class="iconfont icon-shouji"></i>
           </van-field>
        <van-field
         type="password"
          name="验证码"
           label="验证码"
            placeholder="验证码"
             v-model="code"
              :rules="[{required:true,message:'请输入正确手机号', trigger: 'blur'},
            {}]"/>
      </van-cell-group>
      <div style="margin: 35px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'appLogin',
  data () {
    return{
      dataForm: {
         
      }
    }
     = reactive({
      mobile: '13911111111',
      code: '246810'
    })

    return {
      ...toRefs(dataForm)
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
