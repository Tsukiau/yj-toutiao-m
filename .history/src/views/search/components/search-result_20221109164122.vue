<template>
  <div class="search-result">
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
    }
  },
  methods: {
    async onLoad () {
       const data = await getSearch({
        page : this.page,
        per_page:this.per_page,
        p: this.searchText
       })
    }
  }
}
</script>

<style scoped lang="less"></style>
