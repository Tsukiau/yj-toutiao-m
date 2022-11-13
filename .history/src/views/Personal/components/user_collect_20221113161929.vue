<template>
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list> 
</template>

<script>
import article-item from '@/components/article-item'
import { user_histories} from '@/api/user'
export default {
   data(){
     return{
      list: [],
      finished: false,
      loading: false
     }
   },
   methods: {
    async onLoad(){
       try{
        const data = await user_histories({
          per_page: 5
        })
        this.list = data.results 
         }catch(err){
         console.log(err);
        
       }
    }
   }
}
</script>

<style>

</style>