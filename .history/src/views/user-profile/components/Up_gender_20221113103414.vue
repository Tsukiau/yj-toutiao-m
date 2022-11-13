<template>
  <div>
  <van-picker
  title="标题"
  show-toolbar
  :columns="columns"
  @confirm="onConfirm"
  @cancel="$emit('close')"
/>
  </div>
</template>

<script>
import { updateUserProfile} from '@/api/user'
export default {
   name: 'Up_gender',
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
  created(){
    console.log(123123) 
  },
   methods : {
     onConfirm(){
       
    }
   }

}
</script>
<style  scoped>
</style>
