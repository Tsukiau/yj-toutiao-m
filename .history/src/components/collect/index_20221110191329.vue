<template>
   <van-icon 
   color="#777" 
   :name="value ? 'st'" />
</template>

<script>
export default {
   name: 'appCollect',
   props: {
      value: {
         type: boolean,
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
