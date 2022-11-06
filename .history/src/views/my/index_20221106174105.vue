<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div class="header userInfo" v-if="user.token">
      <div class="base">
        <div class="left">
          <img class="mobile-img" :src="userInfo.photo" @click="$router.push('/login')">
          <span class="name">{{userInfo.name}}</span>
        </div>
        <div class="right">
          <van-button type="default" size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data">
        <div class="data-item">
          <span>{{userInfo.art_count}}</span>
          <span>头条</span>
        </div>
        <div class="data-item">
          <span>{{userInfo.follow_count }}</span>
          <span>关注</span>
        </div>
        <div class="data-item">
          <span>{{userInfo.fans_count }}</span>
          <span>粉丝</span>
        </div>
        <div class="data-item">
          <span>{{userInfo.like_count}}</span>
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
    <van-cell class="logout-cell" title="退出登录" center v-if="user.token" @click="onLogout" />

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getUserInfo} from '@/api/user'
export default {
  name: 'MyIndex',
  data() {
    return {
      userInfo:{}
    }
  },
  computed: {
    ...mapState(['user']),
  },
  created(){
    if(this.user.token){
      this.getUserInfo()
    }
  },
  methods: {
    ...mapMutations(['user/setToken']),
    // 退出
    onLogout() {
      this.$dialog.confirm({
        title: '确认退出吗？'
      })
        .then(() => {
          this['user/setToken']('')
        })
        .catch(() => {
          this.$toast.success('取消成功');
        });
    },

    // 用户资料 初始化数据
   async getUserInfo(){
       const data = await getUserInfo()
      this.userInfo = data
    }
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
      padding: 0 10px;
      align-items: center;
      height: 255px;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;

      .mobile-img {
        width: 132px;
        height: 132px;
        border-radius: 50%;
        border: solid 1px #ffffff;

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

    .base {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

   /deep/ img {
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
  height: 100px;
  text-align: center;
  color: #EB5253;
  margin: 20px 0;
  font-size: 40px;
}
</style>

