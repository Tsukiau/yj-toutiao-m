<template>
  <div>
    <van-picker
  title="标题"
  show-toolbar
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/>
  </div>
</template>

<script>
export default {
   name: 'app',
   props: {},
   data () {
   return {}; 
   },

}
</script>
<style  scoped>
</style>
