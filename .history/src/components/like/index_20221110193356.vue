<template>
  <van-icon 
  :color="value === 1? '#ffa500' : ''" 
  :name="value ? 'good-job' : 'good-job-o'" 
  @click="onCollect" 
  loading />
</template>

<script>
// import { addCollect, deleteCollect } from '@/api/article'
export default {
  name: 'appLike',
  props: {
     value: {
        type: Number,
        required: true
     },
     article_id: {
        type: [String, Number],
        required: true
     }
  },
  data() {
     return {
        loading: false
     };
  },
  methods: {

  }
}
</script>
<style  scoped>

</style>
