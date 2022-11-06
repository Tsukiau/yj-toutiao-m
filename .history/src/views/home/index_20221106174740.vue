<template>
  <div class="home-container">
    <van-nav-bar 
    title="标题" 
    left-text="返回" 
    right-text="按钮" 
    left-arrow 
    @click-left="onClickLeft"
      @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
