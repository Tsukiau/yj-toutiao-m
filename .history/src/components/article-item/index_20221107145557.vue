<template>
  <van-cell class="article-item">
    <!-- 头部 -->
    <div slot="title" class="title">{{ c.title }}</div>


    <!-- 右边插槽图片 -->
    <van-image v-if="article.cover.type === 1" slot="default" width="100" height="100" :src="article.cover.images[0]" />

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
