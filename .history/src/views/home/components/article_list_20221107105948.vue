<template>
  <div class="article-list">
    <!-- List 组件通过 loading 和 finished 两个变量控制加载状态，
      当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。
      此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。
      若数据已全部加载完毕，则直接将 finished 设置成 true 即可。 -->
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>

  </div>
</template>

<script>
import {getArticles } from '@/api/home'
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false, //控制加载中的 loading 状态
      finished: false, // 控制加载结束的状态
      timestamp: null , // 请求下一页数据的时间戳
    }
  },
  methods: {
   async onLoad() {
    try {
      const data = await getArticles({
        channel_id: this.channel.id,
        timestamp: timestamp || Date.now()
      })
      console.log(data)
    }catch(err){
       console.log(err)
    }
      
    },
  },
}
</script>

<style scoped lang="less">
.article-list{
  height: 77vh;
  overflow: auto;
}
</style>
