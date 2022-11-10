<template>
  <div class="search">
    <!-- Search 组件提供了 search 和 cancel 事件，
        search 事件在点击键盘上的搜索/回车按钮后触发，
        cancel 事件在点击搜索框右侧取消按钮时触发。 -->
    <form action="/">
      <van-search 
      v-model="search_text" 
      show-action 
      shape="round" 
      background="#3296fa" 
      placeholder="请输入搜索关键词"
        @search="onSearch" 
        @cancel="onCancel" 
        @focus="isResultShow = false"/>
    </form>

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" 
    :searchText="search_text"
    />

     <!--  联想建议  -->
     <search-suggestion v-else-if="search_text" 
     :search_text="search_text" 
     @search="onSearch"
     />

     <!-- 搜索历史 -->
     <search-history v-else />

    
  </div>
</template>

<script>
import searchHistory from './components/search-history.vue';
import SearchResult from './components/search-result.vue';
import SearchSuggestion from './components/search-suggestion.vue';
export default {
  components: { searchHistory, SearchResult, SearchSuggestion },
  name: 'search',
  data() {
    return {
      search_text: '', // 搜索框的内容
      isResultShow: false,
      searchHistories: [] // 搜索历史

    };
  },
  methods: {
    // 点击键盘上的搜索/回车按钮后触发
    onSearch(v) {
      this.search_text = v
      console.log(this.search_text)
      this.isResultShow =true

    },
    // 点击搜索框右侧取消按钮时触发
    onCancel() {
      console.log('取消');
    }
  }

}
</script>
<style  scoped lang="less">
.search{
   padding-top:108px ;
}
  .van-search{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 99;
     .van-search__action{
       color: #fff;
       background-color: #3296fa;
     }

   }
</style>
