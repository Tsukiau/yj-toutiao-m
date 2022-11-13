<template>
  <div>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm ="confirm" 
    />
  </div>
</template>

<script>
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

   },
}
</script>
<style  scoped>
</style>
