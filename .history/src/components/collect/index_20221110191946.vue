<template>
   <van-icon 
   :color="value ? '#ffa500' : ''"
   :name="value ? 'star' : 'star-o'" 
   @click="onCollect"
   />
</template>

<script>
import {addCollect,deleteCollect } from '@/api/article'
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
          
      }
   }
}
</script>
<style  scoped>
</style>
