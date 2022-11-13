<template>
  <div>
    <van-nav-bar title="黑马" left-text="取消" class="page-nav-bar" />
    <van-nav-bar 
    title="编辑名称" 
    right-text="完成" @click-left="$emit('close')" @click-right="onUpName" />
  </div>
</template>

<script>
export default {
   name: 'app',
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
<style  scoped>
</style>
