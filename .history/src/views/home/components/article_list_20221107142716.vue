<template>
  <div class="article-list">
    <!-- List 组件通过 loading 和 finished 两个变量控制加载状态，
      当组件滚动到底部时，会触发 load 事件并将 loading 设置成 true。
      此时可以发起异步操作并更新数据，数据更新完毕后，将 loading 设置成 false 即可。
      若数据已全部加载完毕，则直接将 finished 设置成 true 即可。 -->

<van-pull-refresh
 v-model="isLoading"
  @refresh="onRefresh"
  :success-text="refreshText"
  >

  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
>
  <van-cell v-for="(item,index) in list"
   :key="index" :title="item.title" />
</van-list>

</van-pull-refresh>
  </div>
</template>

<script>
import {getArticles } from '@/api/home'
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false, //控制加载中的 loading 状态
      finished: false, // 是否已加载完成，加载完成后不再触发load事件
      timestamp: null , // 请求下一页数据的时间戳
      error: false,
      isLoading: false, //关闭下拉刷新的 loading 状态
      refreshText: '刷新成功'
    }
  },
  methods: {
   async onLoad() {
    try {
      const data = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
      })
      //  把数据添加到 list 数组中
      this.list.push(...data.results)
      // 设置本次加载中 loading 状态结束
      this.loading = false

      //判断数据是否加载结束
      if(data.results.length){
         this.timestamp = data.pre_timestamp
      }else {
        this.finished = true
      }
    }catch(err){
       console.log(err)
       this.error = true
      this.loading = false
    }
    },
    // 下拉刷新
    onRefresh(){
       try {

       }catch(err){
         console.log(err)
       }
    }
  },
}
</script>

<style scoped lang="less">
.article-list{
  height: 77vh;
  overflow: auto;
}
</style>
