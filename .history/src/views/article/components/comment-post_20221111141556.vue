<template>
  <div class="comment-post">
    <van-field
      class="post-field"
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
    <van-button class="post-btn" @click="onPost">发布</van-button>
  </div>
</template>

<script>
import { addComment} from '@/api/comment'
export default {
  name: 'CommentPost',
  props: {
    art_id: {
       type: [String, Number]
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods : {
    async onPost(){
        try {
           const data = await addComment({
            target:    , // 评论的目标id
            content: this.message, //评论内容
            art_id: 
           })
        }catch(err){
           console.log(err)
        }
    }
  }
}
</script>

<style scoped lang="less">
.comment-post {
  display: flex;
  align-items: center;
  padding: 32px 0 32px 32px;
  .post-field {
    background-color: #f5f7f9;
  }
  .post-btn {
    width: 150px;
    border: none;
    padding: 0;
    color: #6ba3d8;
    &::before {
      display: none;
    }
  }
}
</style>
