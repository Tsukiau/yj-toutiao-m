<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <div class="comment_bar">
    <span>{[currentComment]} 条回复</span>
    </div>
    <comment_item :comment_item="currentComment" />
  </div>
</template>

<script>
import comment_item from './comment_item.vue'
export default {
  components: { comment_item },
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
.comment_bar{
   background-color: rgb(224, 122, 122);
   height:100px;
   width: 100%;
   span {
     color: #333;
     fon
   }
}

</style>
