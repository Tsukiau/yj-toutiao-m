<template>
  <div class="comment-reply">
    <!-- 导航栏 -->
    <van-nav-bar 
    :title="`${currentComment.reply_count}条回复`"
     class="comment_bar">
      <van-icon slot="left" 
      name="cross" 
      @click="$emit('close')"
      />
    </van-nav-bar>
    <comment_item :comment_item="currentComment" />
    <!-- 评论回复下面列表 -->
    <van-cell title="全部回复" />
     <comment_list :source="currentComment.com_id"
     :type=""
     />
  </div>
</template>

<script>
import comment_item from './comment_item.vue'
import comment_list from './comment_list.vue';
export default {
  components: { comment_item,comment_list },
  name: 'comment-reply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    }
  },
  created(){
     console.log(this.currentComment);
  },
  data() {
    return {
        
    }
  }

}
</script>

<style lang="less" scoped>
.comment_bar{
   background-color: #fff;
   /deep/ .van-ellipsis {
     color: #333;
   }
}
</style>
