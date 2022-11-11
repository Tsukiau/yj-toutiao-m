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
          <!--  -->
          <comment_list 
          :source="currentComment.com_id"
          :type="'c'"
          />
      </div>

     <!-- 发布评论 -->
  <div class="reply_wrap">
    <van-button size="small" round
    @click="isPostShow = true"
    class="reply_btn">发布</van-button>
  </div>
    
  <!--post  -->
  <van-popup v-model="isPostShow" position="bottom">
   <CommentPost 
   :art_id="currentComment.com_id"
   @post_success="onPost_success"
   />
  </van-popup>

  </div>
</template>

<script>
import CommentPost from './comment-post.vue';
import comment_item from './comment_item.vue'
import comment_list from './comment_list.vue';
export default {
  components: { comment_item,comment_list, CommentPost },
  name: 'comment-reply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isPostShow: false,
      commentList:[]
    }
  },
  methods : {
    onPost_success(data){
       this.commentList = data
       this.currentComment.reply_count++
       this.isPostShow = false
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
   position: fixed;
   top: 92px;
   left:0;
   right: 0;
   bottom: 88px;
   /* 处理溢出的内容。 */
   overflow-y: auto;
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
