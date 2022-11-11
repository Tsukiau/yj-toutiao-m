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
     <comment_list 
     :source="currentComment.com_id"
     :type="'c'"
     />

     <!-- 发布评论 -->
     <div class="comment-post">
    <van-field class="post-field"
    @keyup.enter="onPost"
    v-model.trim="message" rows="2" autosize type="textarea" maxlength="50" placeholder="请输入留言"
      show-word-limit />
    <van-button 
    class="post-btn" 
    @click="onPost"
    :disabled="!message.length "
    
    >发布</van-button>
  </div>
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
