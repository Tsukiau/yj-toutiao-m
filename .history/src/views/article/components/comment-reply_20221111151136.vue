<template>
  <div class="comment-reply">
    currentComment
  </div>
</template>

<script>
export default {
  name: 'comment-reply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
        
    }
  }

}
</script>

<style lang="less" scoped>

</style>
