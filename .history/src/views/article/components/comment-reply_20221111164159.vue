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

      <div class="scroll">
        <comment_item :comment_item="currentComment" />
          <!-- 评论回复下面列表 -->
          <van-cell title="全部回复" />
          <comment_list 
          :source="currentComment.com_id"
          :type="'c'"
          />
      </div>

     <!-- 发布评论 -->
  <div class="reply_wrap">
  <!--   <van-field 
    class="post-field"
    rows="2" autosize 
    type="textarea" 
    maxlength="50" 
    placeholder="请输入留言"
    show-word-limit /> -->

    <van-button size="small" round class="reply_btn">发布</van-button>
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
.scroll{
   position: ;
}
.reply_wrap{
   height: 88px;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #fff;
   border-top: 1px solid #d8d8d8;
   .reply_btn{
     width: 60%;
     
   }
}
</style>
