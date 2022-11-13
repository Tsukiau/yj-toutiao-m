<template>
  <div>
  <van-picker
  title="标题"
  show-toolbar
  :default-index="value"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="$emit('close')"
  @change="change"
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
    gender:this.value
   }; 
  },
   methods : {
    //选项改变时触发
    //Picker 实例，选中值，选中值对应的索引
    // 把选中的给this.value
    change(picker,value,index){
       this.gender = index
    },
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

         this.$emit('close')

         this.$toast.success('更新成功')
      }catch(err){
         console.log(err)
      }
    }

   }

}
</script>
<style  scoped>
</style>
