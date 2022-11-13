<template>
  <div>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
export default {
   name: 'app',
   components: {},
   props: {

   },
   data () {
   return {
    minDate: new Date(1980, 0, 1),
    maxDate: new Date(),
    currentDate: new Date(2021, 0, 17),
   }; 
   },
   methods: {},
}
</script>
<style  scoped>
</style>
