<template>
  <div>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm ="confirm" 
      @cancel="$emit('close')"
    />
  </div>
</template>

<script>
import { updateUserProfile} from '@/api/user'
export default {
   name: 'app',
   components: {},
   props: {
   value: {
     type: String,
     required:true
  }
   },
   data () {
   return {
    minDate: new Date(1980, 0, 1),
    maxDate: new Date(),
    currentDate: new Date(this.value),
   }; 
   },
   methods: {
    async confirm(){
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 持续展示
      })
    
      try {
        await   updateUserProfile()

      }catch(err){
         console.log(err)
      }
    }
   },
}
</script>
<style  scoped>
</style>
