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
   props: {},
   data () {
   return {}; 
   },
   computed: {},
   watch: {},
   created: {},
   methods: {},
}
</script>
<style  scoped>
</style>
