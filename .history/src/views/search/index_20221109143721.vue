<template>
  <div>
    12431
    <van-nav-bar class="page-nav-bar" fixed>
      <!-- Search 组件提供了 search 和 cancel 事件，
        search 事件在点击键盘上的搜索/回车按钮后触发，
        cancel 事件在点击搜索框右侧取消按钮时触发。 -->
      <form action="/">
       <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
</form>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
   name: 'search',
   data () {
   return {
    value:''
   }; 
 },
  methods : {
  onSearch(){
     
  }
 }

}
</script>
<style  scoped>
</style>
