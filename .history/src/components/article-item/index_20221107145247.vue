<template>
  <van-cell class="article-item">
    <!-- 头部 -->
     <div slot="title" class="title">
      {{article.title}}</div>

      <!-- 底部 -->
      <div slot="label">
      <div>
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate }}</span>
      </div>
    </div>
     <!--  -->
      <van-image
      slot="default"
      width="100"
      height="100"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
     />

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

<style scoped lang="less"></style>
