<template>
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
      <user_histories 
      v-for="(item,index) in list" 
      :key="index" 
      :article="item" />
    </van-list> 
</template>

<script>
import articleItem from '@/components/article-item'
import { user_histories} from '@/api/user'
export default {
  name: ''
  components: {articleItem},
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