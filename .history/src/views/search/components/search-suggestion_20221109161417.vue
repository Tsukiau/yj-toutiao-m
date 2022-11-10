<template>
  <!-- 联想建议 -->
  <div class="search-suggestion">
    <van-cell 
    v-for="(item,index) in list" :key="index"
    :title="item" 
    icon="search"
    
    >
    
    </van-cell>
  </div>
</template>

<script>
import { debounce } from 'lodash'
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
    return {
      list:[],
      time: null
    }
  },
  watch: {
    search_text:{
       handler(v){
        setTimeout(() => {
            
        })
        this.loadSearchSuggestion(v)
       },
       immediate: true
    }
  },
  methods: {
     async loadSearchSuggestion(q){
     try {
       const data = await getSearchSuggestion(q)
      this.list = data.options
     }catch(err){ 
      console.log(err)
     }
     }
  }

}
</script>

<style scoped lang="less"></style>
