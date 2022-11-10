<template>
  <div>
    <!-- Search 组件提供了 search 和 cancel 事件，
        search 事件在点击键盘上的搜索/回车按钮后触发，
        cancel 事件在点击搜索框右侧取消按钮时触发。 -->
    <form action="/">
      <van-search v-model="value" show-action shape="round" background="#3296fa" placeholder="请输入搜索关键词"
        @search="onSearch" @cancel="onCancel" />
    </form>
    <!--  -->
    
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      value: ''
    };
  },
  methods: {
    // 点击键盘上的搜索/回车按钮后触发
    onSearch() {
      console.log('搜索/回车');

    },
    // 点击搜索框右侧取消按钮时触发
    onCancel() {
      console.log('取消');
    }
  }

}
</script>
<style  scoped>

</style>
