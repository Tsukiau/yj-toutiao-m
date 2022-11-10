<template>
  <!-- 联想建议 -->
  <div class="search-suggestion">
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestion } from '@/api/search'
export default {
  name: 'SearchSuggestion',
  props: {
    search_text: {
       type: String,
       required:true
    }
  },
  data () {
    return {}
  },
  watch: {
    search_text:{
       handler(v){
        this.getSearchSuggestion(v)
       },
       immediate: true
    }
  },
  methods: {
     async getSearchSuggestion(v){
     try {
      const data = await getSearchSuggestion(v)
       console.log(data);
     }
     }
  }

}
</script>

<style scoped lang="less"></style>
