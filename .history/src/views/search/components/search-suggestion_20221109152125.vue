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
export default {
  name: 'SearchSuggestion',
  props: {
    search_text: {
       type: Object,
       required:
    }
  }
  data () {
    return {}
  },
  watch: {
     
  }

}
</script>

<style scoped lang="less"></style>
