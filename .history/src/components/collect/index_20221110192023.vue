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
       
    }catch(err){ 
      console.log();
    }


      }
   }
}
</script>
<style  scoped>
</style>
