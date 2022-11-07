<template>
  <van-cell class="article-item">
    <!-- 头部 -->
    <div slot="title" class="title">{{article.title }}</div>


    <!-- 右边插槽图片 -->
    <van-image 
    slot="default" 
    v-if="article.cover.type === 1" 
    class="cover_right"
    :src="article.cover.images[0]" />

    
    <div slot="label">
      <!-- 三张图片 -->
      <div class="cover-wrap" v-if="article.cover.type === 3" >
        <div class="cover-item">
          <van-image 
          v-for="(img,index) in article.cover.images" :key="index"
          width="100" 
          height="100" 
          :src="img" />
        </div>
      </div>
      <!-- 底部 -->
      <div>
        <span>{{article.aut_name}}</span>
        <span>{{article.comm_count}}评论</span>
        <span>{{article.pubdate}}</span>
      </div>
    </div>
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang="less">
.article-item{
.title{
   font-size: 32px;
   color: #3a3a3a;
}

/deep/.van-cell__value{
  width: 232px;
	height: 146px;
}
.cover_right{
  width: 232px;
	height: 146px;
}

}
</style>
