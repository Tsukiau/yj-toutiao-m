<template>
  <div class="search-history">
    <van-cell title="搜索历史" class="cell_head">
      <span>完成</span>
      <span>全部删除 </span>
      <van-icon name="delete" />
    </van-cell>
    <van-cell 
    :title="item" 
    v-for="(item,index) in 
    searchHistories" :key="index">
      <van-icon name="close" @click="del(index)"/>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    searchHistories: {
       type: Array,
       required:true
    } 
  },
  data () {
    return {

    }
  },
  methods: {
     // 删除
     del(index){
       const index = this.
     }
  }
}
</script>

<style scoped lang="less">
.cell_head{
   span:nth-child(2) {
     margin-left: 20px;
   }
}</style>
