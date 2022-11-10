<template>
  <div>
    <van-nav-bar class="page-nav-bar" fixed>
      <van-button class="search-btn" 
      slot="title" type="info" 
      size="small" round 
      icon="search" to="/search"
      >搜索</van-button>
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
