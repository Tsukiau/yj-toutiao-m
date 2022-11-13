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
   return {
    columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
   }; 
   },

}
</script>
<style  scoped>
</style>
