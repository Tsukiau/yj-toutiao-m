<template>
   <van-icon 
   :color="value ? '#ffa500' : ''"
   :name="value ? 'star' : 'star-o'" />
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
   return {}; 
   },
}
</script>
<style  scoped>
</style>
