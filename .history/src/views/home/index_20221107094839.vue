<template>
  <div class="home-container">
    <van-nav-bar class="page-nav-bar">
      <van-button class="search-btn" slot="title" type="info" size="small" round icon="search">搜索</van-button>
    </van-nav-bar>
    <!--  -->
    <van-tabs v-model="active" animated swipeable class="tabs">
      <van-tab :title="item.name" v-for="item in channels" :kry="item.id"
      >{{item.name}}</van-tab>
      <div slot="nav-right" class="placeholder"></div>
      <div slot="nav-right" class="icon-btn">
        <i class="iconfont icon-gengduo"></i>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannels} from '@/api/user'
export default {
  name: 'home',
  data() {
    return {
      active: 0,
      channels: []
    }
  },
  created(){
     this.getUserChannels()
  },
  methods: {
   async getUserChannels(){
       try {
         const data = await getUserChannels()
        this.channels =  data.channels
       }catch(err){
         console.log(err)
       }
    }
  }
}
</script>

<style lang="less" scoped>

.home-container {
  /deep/.van-nav-bar__title {
    max-width: unset;
  }

  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;

  }

  /*  */
  /deep/ .tabs {
    .van-tab {
      border-right: 1px solid#edeff3;
      ;
      min-width: 190px;
      height: 80px;

      .van-tab__text {
        font-size: 28px;
      }

      .van-tabs__nav {
        padding: 0;
      }
    }
  }

  .icon-btn {
    position: fixed;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 82px;
    background-color: #fff;
    opacity: 0.8;

    .icon-gengduo {
      font-size: 33px;
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      width: 2px;
      height: 100%;
      background-image: url(~@/assets/gradient-gray-line.png);
      background-size: contain;
    }
  }

  .placeholder {
    flex-shrink: 0;
    width: 66px;
    height: 82px;
  }
}
</style>