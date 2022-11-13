<template>
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
      <articleItem 
      v-for="(item,index) in list" 
      :key="index" 
      :article="item" />
    </van-list> 
</template>

<script>
import articleItem from '@/components/article-item'
import { user_collections} from '@/api/user'
export default {
  name: 'collect',
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
        const data = await user_collections({
        per_page: 5
        })
        console.log(data)
        this.list.push(...data.results)

        this.loading = false
      if(!data.results.length){
       this.finished = true
      }

        console.log(this.list ) 
         }catch(err){
         console.log(err);
        
       }
    }
   }
}
</script>

<style>

</style>