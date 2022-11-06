<template>
  <div class="my-container">
    <div class="header userInfo">
    <div class="base">
      <div class="left">
        <img
        class="mobile-img"
        src="~@/assets/mobile.png"
        @click="$router.push('/login')"
      >
      <span class="name">黑马头条</span>
      </div>
     <div class="right">
      <van-button type="default" size="mini" round>编辑资料</van-button>
     </div>
    </div>
    </div>
    <!--  -->
    <div class="data"></div>
    <!--  -->
    <div class="grid-nav"></div>
    <van-cell title="消息通知" is-link url="" />
    <van-cell title="实名认证" is-link url="" />
    <van-cell title="用户反馈" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell title="系统设置" is-link url="" />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.my-container {
 .header{
   height: 375px;
   width: 100%;
   background-image: url(../../assets/banner.png);
   background-size: cover;
   .base{
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .left{
    display: flex;
     justify-content: center;
     align-items: center;
   }
 }
}
</style>
