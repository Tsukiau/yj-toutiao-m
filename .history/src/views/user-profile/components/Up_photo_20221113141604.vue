<template>
  <div>
   <div class="up_photo">
      <img :src="img" alt="" >

      <div class="toolbar">
          <div>取消</div>
          <div>完成</div>
      </div>
   </div>
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
.toolbar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content:
}
</style>
