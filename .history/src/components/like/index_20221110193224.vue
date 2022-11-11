<template>
  <van-icon 
  :color="value ? '#ffa500' : ''" 
  :name="value ? 'star' : 'star-o'" 
  @click="onCollect" 
  loading />
</template>

<script>
// import { addCollect, deleteCollect } from '@/api/article'
export default {
  name: 'appCollect',
  props: {
     value: {
        type: Boolean,
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
