<template>
   <van-icon 
   :color="value ? '#ffa500' : ''"
   :name="value ? 'star' : 'star-o'" 
   @click="onCollect"
   loading
   />
</template>

<script>
import {addCollect,deleteCollect } from '@/api/article'
import { captureRejectionSymbol } from 'events';
export default {
   name: 'appCollect',
   props: {
      value: {
         type: Boolean,
         required: true
      }
   },
   data () {
   return {
      loading: false
   }; 
   },
   methods: {
      onCollect(){
         this.loading = true;
    try {
       if(this.value){
          // 已s'c
       } else {
          
       }
    }catch(err){ 
      console.log(err)

    }


      }
   }
}
</script>
<style  scoped>
</style>
