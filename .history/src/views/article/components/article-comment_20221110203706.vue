<template>
  <van-list 
  v-model="loading" 
  :finished="finished" 
  finished-text="没有更多了"
  @load="onLoad"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  >
  <van-cell
   v-for="(item,index) in list" 
  :key="index" 
  :title="item.content" />
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment'
export default {
  name: 'comment',
  components: {},
  props: {
    source: {
       type: [String, Number, Number],
       required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页数据
      limit:10, //评论数据个数
      error: false,
      total_count:''    };
  },
  methods: {
    async onLoad() { 
      try {
         const data = await getComments({
          type: 'a', //  评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
          source: this.source, // 源id，文章id或评论id
          offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
          limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
        })

         this.list.push(...data.results)
         console.log(data)
         
        this.loading = false

         if(data.results.length){
           this.offset = data.last_id
         }else {
            this.finished = true
         }

      }catch(err){
         console.log(err);
         this.error = true
         this.loading = false
      }
    }
  },
}
</script>
<style  scoped>

</style>
