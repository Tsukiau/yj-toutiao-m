<template>
  <van-list 
  v-model="loading" 
  :finished="finished" 
  finished-text="没有更多了"
  @load="onLoad">
  <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment''
export default {
  name: 'comment',
  components: {},
  props: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    async onLoad() { 
      try {
         
      }catch(err){
         console.log(err);
      }
    }
  },
}
</script>
<style  scoped>

</style>
