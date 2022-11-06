<template>
  <div class="my-container">
    <!--  -->
    <div class="header userInfo" v-if="user.token">
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
    <!-- 未登录 -->
    <div class="header notLogin" v-else>
      <div class="base">
        <img class="mobile-img" src="~@/assets/mobile.png" @click="$router.push('/login')">
        <span class="name">登录</span>
      </div>
    </div>
    <!--  -->
    <div class="nav-icon" v-if="user.token">
      <div class="nav-item">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span class="text" slot="text">收藏</span>
      </div>
      <div class="nav-item">
        <i slot="icon" class="iconfont icon-lishi"></i>
        <span class="text" slot="text">历史</span>
      </div>
    </div>
    <!--  -->
    <div class="xxx"></div>
    <!--  -->
    <div class="grid-nav"></div>
    <van-cell title="消息通知" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell class="logout-cell" title="退出登录" center v-if="user.token"/>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyIndex',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  created(){
     console.log(this.user.token)
  }
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
        font-size: 35px;
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
  .nav-icon {
    padding-top: 10px;
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon-shoucang {
        font-size: 46px;
        color: #eb5253;
      }

      .icon-lishi {
        font-size: 46px;
        color: #FF9D1D;
      }

      span {
        margin-top: 10px;
        font-size: 35px;
      }
    }
  }

  /* w未登录 */
  .notLogin {
    height: 375px;
    width: 100%;
  
  .base{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
    img {
      width: 132px;
      height: 132px;
    }
    .name {
      margin-top: 20px;
       font-size: 34px;
       color: #fff;
    }
  }

  .xxx {
    width: 100%;
    height: 10px;
    background-color: #f5f7f9;
  }
}
.logout-cell {
  height: 50px;
  text-align: center;
  color: #EB5253;
  margin: 10px 0;
  font-size: 20px;
}
</style>

