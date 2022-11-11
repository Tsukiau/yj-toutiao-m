<template>
  <van-list 
  v-model="loading" 
  :finished="finished" 
  finished-text="没有更多了"
  @load="onLoad"
  :error.sync="error"
  error-text="请求失败，点击重新加载"
  >
  <comment_item
   v-for="(item,index) in list" 
  :key="index" 
  :comment_item="item"
  @comment_item="$emit('comment_item', $e)"
  />

  </van-list>
</template>

<script>
import { getComments } from '@/api/comment'
import comment_item from './comment_item.vue';
export default {
  name: 'comment',
  components: {comment_item},
  props: {
    source: {
       type: [String, Object, Number],
       required: true
    },
    list: {
       type: Array,
       default: () => []
    }
  },
  created(){
    this.onLoad()
  },
  data() {
    return {
      //list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页数据
      limit:10,  //请求评论数据个数
      error: false,
     };
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
          
         // 更新总数据条数
         this.$emit('onComment_total_count',data)

         // 将加载更多的 loading 设置为 false
         this.loading = false

         // 判断是否还有数据
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
