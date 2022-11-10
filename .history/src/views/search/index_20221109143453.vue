<template>
  <div>
    <van-nav-bar class="page-nav-bar" fixed>
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
   return {}; 
   },

}
</script>
<style  scoped>
</style>
