<template>
  <van-cell class="article-item">
    <!-- 头部 -->
     <div slot="title" class="title">
      {{article.title}}</div>
      <!--  -->
      <div>
        <span></span>
        <span></span>
        <span></span>
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
