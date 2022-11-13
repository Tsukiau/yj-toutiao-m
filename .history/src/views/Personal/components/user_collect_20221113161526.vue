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
import { user_histories} from '@api/user'
export default {
   data(){
     return{
      list: [],
      finished: false,
      loading: false
     }
   },
   methods: {
    onLoad(){
       try{
        const data = await user_histories({
           
        })
       }catch(err){
         console.log(err);

       }
    }
   }
}
</script>

<style>

</style>