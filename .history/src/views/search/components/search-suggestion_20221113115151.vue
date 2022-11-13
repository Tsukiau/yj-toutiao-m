<template>
  <!-- 联想建议 -->
  <div class="search-suggestion">
    <van-cell 
    v-for="(item,index) in list" :key="index"
    icon="search"
    @click="$emit('search', item)"
    >
    <span slot="title" v-html="htmlText(item)"></span>
    
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestion } from '@/api/search'
// 按需加载有好处：只会把使用到的成员打包到结果中
import { debounce } from 'lodash'
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
      time: null,
      that: null
    }
  },
  watch: {
  
    search_text:{
       handler(v){
        // 防抖
         if(this.time) clearTimeout(this.time)
          this.time = setTimeout(() => {
          this.loadSearchSuggestion(v)
        },600) 
       }, 
  /*      handler: debounce(function(value){
         this.loadSearchSuggestion(value)

      }, 500), */

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
     },
     // 处理高亮
     htmlText(text){
       const str = `<span class="active">${this.search_text}</span>`;
       const reg = new RegExp(this.search_text, 'gi')
       return text.replace(reg, str)

       const arr = text.split(this.search_text)
       return arr.join(`<span class="active">${this.search_text}`)
     }
  }

}
</script>

<style scoped lang="less">
/deep/.active{
   color: #ee178f;
}</style>
