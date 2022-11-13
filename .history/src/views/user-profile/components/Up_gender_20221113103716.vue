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
   methods : {
     async onConfirm(){
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 持续展示
      })
      try {
         await updateUserProfile({
          gender:this.value
         })

         this.$emit('input',this.value)

         this.$toast.
      }catch(err){
         console.log(err)
      }
    }
   }

}
</script>
<style  scoped>
</style>
