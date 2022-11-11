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
       type: [String, Number],
       required: true
    }
  },
  data() {
    return {
      message: '',

    }
  },
  methods : {
    async onPost(){
        try {
           const data = await addComment({
            target: this.art_id, // 评论的目标id
            content: this.message, //评论内容
            art_id: null //文章id，对评论内容发表回复时，需要传递此参数，表明所属文章id。对文章进行评论，不要传此参数。	
           })
           console.log(data)
           
          
           this.message = ''
           this.$emit(post)
        }catch(err){
           console.log(err)
           this.$toast.fail('发布失败')
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
