<template>
  <div class="my-container">
    <div class="header userInfo">
      <div class="base">
        <div class="left">
          <img class="mobile-img" src="~@/assets/mobile.png" @click="$router.push('/login')">
          <span class="name">黑马头条</span>
        </div>
        <div class="right">
          <van-button type="default" size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <!--  -->
      <div class="data">
        <div class="data-item">
          <span>90</span>
          <span>头条</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>关注</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>粉丝</span>
        </div>
        <div class="data-item">
          <span>90</span>
          <span>获赞</span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="nav-icon">
      <div class="nav-item">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span class="text" slot="text">收藏</span>
      </div>
      <div class="nav-item">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span class="text" slot="text">历史</span>
      </div>

    </div>
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
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 375px;
    width: 100%;
    background-image: url(../../assets/banner.png);
    background-size: cover;

    .base {
      display: flex;
      justify-content: space-between;
      margin: 0 20px;
      align-items: center;
      height: 255px;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 132px;
        height: 132px;
      }

      .name {
        font-size: 30px;
        color: #fff;
        margin-left: 30px;
      }
    }

    /*  */
    .data {
      height: 120px;
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      .data-item {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;

        span:nth-child(1) {
          font-size: 36px;
          margin-bottom: 15px;
        }

        span:nth-child(2) {
          font-size: 23px;
        }
      }
    }
  }
  /*  */
  .nav-icon{
    height: 140px;
    width: 100%;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
   .nav-item{
     
   }
  }

}
</style>
