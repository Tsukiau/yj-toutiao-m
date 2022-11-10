<template>
  <!-- 联想建议 -->
  <div class="search-suggestion">
    <van-cell 
    v-for="item in list"
    title="黑马程序员..." 
    icon="search"
    
    >
    
    </van-cell>
  </div>
</template>

<script>
import {  } from '@/api/search'
export default {
  name: 'SearchSuggestion',
  props: {
    search_text: {
       type: String,
       required:true
    }
  },
  data () {
    return {
      list:[]
    }
  },
  watch: {
    search_text:{
       handler(v){
        this.loadSearchSuggestion(v)
       },
       immediate: true
    }
  },
  methods: {
     async loadSearchSuggestion(q){
     try {
       const data = await q.
      //this.list = data.options
      console.log(this.list)
     }catch(err){ 
      console.log(err)
     }
     }
  }

}
</script>

<style scoped lang="less"></style>
