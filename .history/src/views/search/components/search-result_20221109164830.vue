<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" :key="index" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
import { info } from 'console'
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
      total_count: '' // 结果的总数
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
        his.finished = true 
       }

      }catch(err){
         console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
