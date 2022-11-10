<template>
  <div class="search-history">
    <van-cell title="搜索历史" class="cell_head">
      <span @click="$emit('delHistories')">全部删除 
      <van-icon name="delete" />
      </span>
    </van-cell>
    <van-cell 
    :title="item" 
    v-for="(item,index) in 
    searchHistories" :key="index"
    
    >
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
       this.searchHistories.splice(index,1)
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
