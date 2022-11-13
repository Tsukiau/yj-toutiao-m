<template>
  <div>
   
     <img :src="img" alt="" >
  </div>
</template>

<script>
export default {
   name: 'app',
   components: {},
   props: {
    img: {
       type: [String,Object],
       required: true
    }
   },
   data () {
   return {}; 
   },
   computed: {},
   watch: {},
   created: {},
   methods: {},
}
</script>
<style  scoped lang="less">
img {
   max-width: 100%;
}
</style>
