<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell title="我的频道" :border="false">
      <van-button 
      round size="mini" 
      type="danger">编辑
    </van-button>

    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item 
      class="channel-item" 
      v-for="value in 8" :key="value" 
      text="文字" />
    </van-grid>

    <!--频道推荐  -->
    <van-cell title="频道推荐" :border="false"></van-cell>

    <van-grid :gutter="10">
      <van-grid-item 
      class="channel-item" 
      v-for="value in 8" 
      :key="value" text="文字" 
      icon="plus"/>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'ChannelEdit',
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
.channel-edit {
  .channel-item {
    height: 86px;

    /deep/ .van-grid-item__content {
      dis
      background-color: #f5f5f6;
      .van-grid-item__text {
        color: #222;
        font-size: 28px;
      }
      .van-icon {
            font-size: 24px;
        }

    }
  }
}
</style>
