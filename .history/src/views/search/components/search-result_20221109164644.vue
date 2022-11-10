<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item.title" />
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
      total_count: '' // j
    }
  },
  methods: {
    async onLoad () {
      try {
        const data = await getSearch({
        page : this.page,
        per_page:this.per_page,
        q: this.searchText
       })
       console.log(data)
       this.loading = false
   
      }catch(err){
         console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
