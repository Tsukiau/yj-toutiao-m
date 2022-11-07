<template>
  <van-cell class="article-item">
    <!-- 头部 -->
    <div slot="title" class="title">{{article.title }}</div>


    <!-- 右边插槽图片 -->
    <van-image 
    slot="default" 
    v-if="article.cover.type === 1" 
    width="100" 
    height="100" 
    :src="article.cover.images[0]" />

    <!-- 底部 -->
    <div slot="label">
      <div class="cover-wrap">
        
      </div>
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

</style>
