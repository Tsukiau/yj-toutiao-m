<template>
  <div class="updade_name">
    <van-nav-bar title="编辑名称" left-text="取消" right-text="完成" @click-left="$emit('close')" />
    <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言"
      show-word-limit />
  </div>
</template>

<script>
export default {
  name: 'updade_name',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created: {},
  methods: {},
}
</script>
<style  scoped lang="less">
.updade_name {
  .van-nav-bar {
    background-color: #Fff;
  }
}
</style>
