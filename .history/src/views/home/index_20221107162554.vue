<template>
  <div class="home-container">
    <!-- 头部搜索框 -->
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button class="search-btn" slot="title" type="info" size="small" round icon="search">搜索</van-button>
    </van-nav-bar>
    <!-- Tab 标签页  -->
    <van-tabs v-model="active" animated swipeable class="tabs">
      <van-tab 
      :title="item.name" v-for="item in channels"
       :kry="item.id">
       <articleList :channel="item"></articleList>
      </van-tab>
      <div slot="nav-right" class="placeholder"></div>
      <div slot="nav-right" class="icon-btn">
        <i  @click="isChannelEditShow = true"
        class="iconfont icon-gengduo"></i>
      </div>
    </van-tabs>

    <!-- 频道编辑 -->
    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      :style="{ height: '90%' }"
      closeable
      round
      close-icon-position="top-left"
      >
      <ChannelEdit :myChannels=channels />
  </van-popup>
<!-- /频道编辑 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import articleList from './components/article_list.vue'
import ChannelEdit from './components/channel-edit'
export default {
  components: { articleList ,ChannelEdit},
  name: 'home',
  data() {
    return {
      active: 0,
      channels: [],
      isChannelEditShow: true // 这里我们先设置为 true 就能看到弹窗的页面了
    }
  },
  created() {
    this.getUserChannels()
  },
  methods: {
    async getUserChannels() {
      try {
        const data = await getUserChannels()
        this.channels = data.channels
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding-bottom: 100px;
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
    position: fixed;
     top: 92px;
     z-index: 2;
     width: 100%;
    .van-tab {
      border-right: 1px solid#edeff3;
      min-width: 190px;
      height: 80px;

      .van-tab__text {
        font-size: 28px;
      }


    }

    /deep/ .van-tabs__nav {
      padding: 0;
    }

    .van-tabs__line {
      width: 32px ;
      height: 6px;
      background: rgba(50, 150, 250, 1);
      border-radius: 2px;
      bottom: 4px;
    }
  }

  .van-tab--active .van-tab__text {
    color: #333 !important;
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