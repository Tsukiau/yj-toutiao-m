<template>
  <div>
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
        @focus="isSearchShow = false"/>
    </form>

    <!-- 搜索结果 -->
    <search-result v-if="isSearchShow"></search-result>

     <!--  联想建议  -->
     <search-suggestion v-else="search_text"></search-suggestion>

     <!-- 搜索历史 -->
     <search-history v-else></search-history>

    
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
      isresultShow: false

    };
  },
  methods: {
    // 点击键盘上的搜索/回车按钮后触发
    onSearch(v) {
      this.search_text = v
      console.log(this.search_text)
      this.isSearchShow =true

    },
    // 点击搜索框右侧取消按钮时触发
    onCancel() {
      console.log('取消');
    }
  }

}
</script>
<style  scoped>

</style>
