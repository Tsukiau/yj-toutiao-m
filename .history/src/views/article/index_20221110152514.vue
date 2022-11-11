<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" 
    left-arrow 
    left-text="返回"
    @click-left="onClickLeft"
    title="黑马头条">
    </van-nav-bar>

    <!-- 主体 -->
    <div class="main-wrap">
      <!-- 加载中 -->
      <div v-if="loading" class="loading-wrap">
        <van-loading color="#3296fa" vertical>加载中</van-loading>
      </div>


      <!-- 加载完成-文章详情 -->
      <div v-else-if="article.title" class="article-detail">
        <!-- 文章标题 -->
        <h1 class="article-title">{{ article.title }}</h1>


        <!-- 用户信息 -->
        <van-cell class="user-info" center :border="false">
          <van-image class="avatar" slot="icon" round fit="cover" :src="article.aut_photo" />
          <div slot="title" class="user-name">{{ article.aut_name }}</div>
          <div slot="label" class="publish-date">{{ article.pubdate | relativeTime }}</div>
          <follow_user is-followed=""
           ></follow_user>
          <!-- <van-button 
          v-if="!article.is_followed"
          class="follow-btn" 
          type="info" color="#3296fa" 
          round size="small" 
          icon="plus"
          @click="onFollow"
          :loading="followLoading"
          >
          关注</van-button>
          <van-button
            v-else
            class="follow-btn"
            round
            :loading="followLoading"
            size="small"
            @click="onFollow"
           >
          已关注</van-button> -->
        </van-cell>


        <!-- 文章内容 -->
        <div class="article-content markdown-body" ref="article_content" v-html="article.content"></div>
        <van-divider>正文结束</van-divider>
      </div>


      <!-- 加载失败：404 -->
      <div v-else-if="errStatus === 404" class="error-wrap">
        <van-icon name="failure" />
        <p class="text">该资源不存在或已删除！</p>
      </div>

      <!-- 加载失败：其它未知错误（例如网络原因或服务端异常） -->
      <div v-else class="error-wrap">
        <van-icon name="failure" />
        <p class="text">内容加载失败！</p>
        <van-button class="retry-btn" @click="loadArticle">点击重试</van-button>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="article-bottom">
      <van-button class="comment-btn" type="default" round size="small">写评论</van-button>
      <van-icon name="comment-o" badge="123" color="#777" />
      <van-icon color="#777" name="star-o" />
      <van-icon color="#777" name="good-job-o" />
      <van-icon name="share" color="#777777"></van-icon>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { getArticleById, deleteFollow, addFollow } from '@/api/article'

export default {
  name: 'ArticleIndex',
  props: {
    articleId: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      article: {},
      loading: false, // 加载中的loading状态
      errStatus: 0, // 失败的状态码
      followLoading: false // 关注加载状态
    }
  },
  created() {
    this.loadArticle()
  },
  methods: {
    // 返回上一级
    onClickLeft(){
      this.$router.back() 
    },
    async loadArticle() {
      this.loading = true
      try {
        const data = await getArticleById(this.articleId)
        this.article = data
        /* 
        调用 处理图片方法
        数据更新视图不是立即的 
        获取节点需要异步  */
        setTimeout(() => {
          this.viewImgs()
        }, 0)

      } catch (err) {
        if (err.response && err.response.status === 404) {
          this.errStatus = 404
        }
        console.log(err)
      }
      this.loading = false
    },
    /* 
    处理图片 得到所有得img节点
    */
    viewImgs() {
      const imgs = this.$refs.article_content.querySelectorAll('img')
      const imgArr = []
      // 遍历imgs 拿出图片路径push到数组
      imgs.forEach((img,index) => {
        // 给每一个img添加点击事件
        imgArr.push(img.src)
        img.onclick = () => {
          //图片预览
          ImagePreview({
            images:imgArr, //图片路径数组
            startPosition: index, // 起始位置
          });
        }
      })
    },

    // 关注
   async onFollow(){
    this.followLoading =true
       try{
        if(this.article.is_followed){
           // 已关注 执行取消关注
           await deleteFollow(this.article.aut_id)
          }else {
            // 没有关注 执行关注
            await addFollow(this.article.aut_id)
          }
          this.article.is_followed = !this.article.is_followed
        }catch(err){
          console.log(err)
        }
        this.followLoading = false
    }
  }
}
</script>

<style scoped lang="less">
@import "./github-markdown.css";
/deep/ .van-icon-arrow-left,
/deep/ .van-nav-bar__text{
   color: #fff;
}
.article-container {
  .main-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 92px;
    bottom: 88px;
    overflow-y: scroll;
    background-color: #fff;
  }

  .article-detail {
    .article-title {
      font-size: 40px;
      padding: 50px 32px;
      margin: 0;
      color: #3a3a3a;
    }

    .user-info {
      padding: 0 32px;

      .avatar {
        width: 70px;
        height: 70px;
        margin-right: 17px;
      }

      .van-cell__label {
        margin-top: 0;
      }

      .user-name {
        font-size: 24px;
        color: #3a3a3a;
      }

      .publish-date {
        font-size: 23px;
        color: #b7b7b7;
      }

      .follow-btn {
        width: 170px;
        height: 58px;
      }
    }

    .article-content {
      padding: 55px 32px;

      /deep/ p {
        text-align: justify;
      }
    }
  }

  .loading-wrap {
    padding: 200px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  .error-wrap {
    padding: 200px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .van-icon {
      font-size: 122px;
      color: #b4b4b4;
    }

    .text {
      font-size: 30px;
      color: #666666;
      margin: 33px 0 46px;
    }

    .retry-btn {
      width: 280px;
      height: 70px;
      line-height: 70px;
      border: 1px solid #c3c3c3;
      font-size: 30px;
      color: #666666;
    }
  }

  .article-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    height: 88px;
    border-top: 1px solid #d8d8d8;
    background-color: #fff;

    .comment-btn {
      width: 282px;
      height: 46px;
      border: 2px solid #eeeeee;
      font-size: 30px;
      line-height: 46px;
      color: #a7a7a7;
    }

    .van-icon {
      font-size: 40px;

      .van-info {
        font-size: 16px;
        background-color: #e22829;
      }
    }
  }
}
</style>
