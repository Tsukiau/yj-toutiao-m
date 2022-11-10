<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" 
      :key="index" 
      :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
export default {
  name: 'SearchResult',
  components: {},
  props: {
    searchText: {
        type: String,
        require: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1, //页数，
      per_page: 10, //每页数量
      total_count: '', // 结果的总数
      error: false
    }
  },
  methods: {
    async onLoad () {
      try {
        const {results} = await getSearch({
        page : this.page,
        per_page:this.per_page,
        q: this.searchText
       })
       this.list.push(...results)
       this.loading = false
       
       if(results.length){
         this.page++
       }else {
        this.finished = true 
       }

      }catch(err){
         console.log(err)
         this.error = true
         this.loading = false
      }
    }
  }
}
</script>

<style scoped lang="less">
.search-result{
   .van-search{
     position: fixed;
     top: 0;
     left: 0;

   }
}
</style>
