<template>
  <div class="updade_name">
    <van-nav-bar 
    title="编辑名称" 
    left-text="取消"
    right-text="完成"
    @click-left="$emit('close')"
    />
    
  </div>
</template>

<script>
export default {
   name: 'updade_name',
   components: {},
   props: {},
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
.updade_name{
   .van-nav-bar {
     background-color: #Fff;
     ..van-nav-bar__text{
       color
     }
   }
}
</style>
