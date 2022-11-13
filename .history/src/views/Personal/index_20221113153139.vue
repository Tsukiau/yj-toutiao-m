<template>
  <div class="Personal">
    <van-nav-bar title="黑马" class="page-nav-bar">
      <van-icon slot="left" name="arrow-left" @click="$router.back()" />
    </van-nav-bar>
    <!--  -->
    <div class="Personal_head">
      <div class="head_left">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="">
      </div>
      <div class="head_right">
        <div class="data">
          <div class="data-item">
            <span>112312</span>
            <span>头条</span>
          </div>
          <div class="data-item">
            <span>321313</span>
            <span>关注</span>
          </div>
          <div class="data-item">
            <span>3213</span>
            <span>粉丝</span>
          </div>
          <div class="data-item">
            <span>31231</span>
            <span>获赞</span>
          </div>
        </div>
        <div>
          <button></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
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
.Personal {
  .van-icon-arrow-left {
    color: #fff;
  }

  .Personal_head {
    height: 240px;
    width: 100%;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
  }

  .head_left {
    margin: 20px 30px;
    width: 155px;
    height: 155px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .head_right{
     display: flex;
     
  }

}
</style>
