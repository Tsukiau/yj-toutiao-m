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
import moment from '@/utils/moment'
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
        const currentDate = moment(this.currentDate).format('YYYY-MM-DD')
        await updateUserProfile({
          birthday: this.currentDate
        })

        this.$emit('input',this.currentDate)

        this.$emit('close')

        this.$toast.success('更新成功')

      }catch(err){
         console.log(err)
      }
    }
   },
}
</script>
<style  scoped>
</style>
