<template>
  <van-cell class="comment-item">
    <van-image
      slot="icon"
      class="avatar"
      round
      fit="cover"
      :src="comment_item.aut_photo"
    />
    <div slot="title" class="title-wrap">
      <div class="user-name">{{comment_item.aut_name}}</div>
      <van-button
        class="like-btn"
        :class="{ liked: comment.is_liking }"
        :icon="comment_item.is_liking ?  'good-job' : 'good-job-o'"
      >{{comment_item.like_count || '赞'}}</van-button>
    </div>

    <div slot="label">
      <p class="comment-content">{{comment_item.content}}</p>
      <div class="bottom-info">
        <span class="comment-pubdate">{{comment_item.pubdate | relativeTime}}</span>
        <van-button
          class="reply-btn"
          round
        >回复 {{comment_item.reply_count}}</van-button>
      </div>
    </div> 
  </van-cell>
</template>

<script>
export default {
  name: 'CommentItem',
  components: {},
  props: {
    comment_item: {
       type: Object,
       required:true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.comment-item {
  .avatar {
    width: 72px;
    height: 72px;
    margin-right: 25px;
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-name {
      color: #406599;
      font-size: 26px;
    }
  }
  .comment-content {
    font-size: 32px;
    color: #222222;
    word-break: break-all;
    text-align: justify;
  }
  .comment-pubdate {
    font-size: 19px;
    color: #222;
    margin-right: 25px;
  }
  .bottom-info {
    display: flex;
    align-items: center;
  }
  .reply-btn {
    width: 135px;
    height: 48px;
    line-height: 48px;
    font-size: 21px;
    color: #222;
  }
  .like-btn {
    height: 30px;
    padding: 0;
    border: none;
    font-size: 19px;
    line-height: 30px;
    margin-right: 7px;
    .van-icon {
      font-size: 30px;
    }
  }
  .liked{
     
  }
}
</style>
