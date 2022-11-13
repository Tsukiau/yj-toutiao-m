<template>
  <div>
      <van-picker
       title="标题"
       show-toolbar
       :columns="columns"
       @confirm="onConfirm"
       @cancel="$emit('close')"
       :default-index="value"
     
/>
  </div>
</template>

<script>
export default {
   name: 'app',
   props: {
    value: {
       typeof:Number,
       required: true
    }
   },
   data () {
   return {
    columns: ['男', '女'],
   }; 
   },
   methods : {
     onConfirm(){
       
    }
   }

}
</script>
<style  scoped>
</style>
