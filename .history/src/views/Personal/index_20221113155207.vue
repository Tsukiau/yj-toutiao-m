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
            <span>11</span>
            <span>头条</span>
          </div>
          <div class="data-item">
            <span>32</span>
            <span>关注</span>
          </div>
          <div class="data-item">
            <span>32</span>
            <span>粉丝</span>
          </div>
          <div class="data-item">
            <span>31</span>
            <span>获赞</span>
          </div>
        </div>
        <div class="data_btn">
          <div class="sp_g">关注</div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="introduce">
      <div>认证：黑马认证架构师</div>
      <div></div>

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
    background-color: #fff;
    height: 240px;
    width: 100%;
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
     flex: 1;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     .data{
      margin-top:20px;
        width: 100%;
        display: flex;
       justify-content: space-evenly;
       align-items: center;
     .data-item{
         display: flex;
         flex-direction: column;
         align-items: center;
         span:nth-child(2){
           font-size: 30px;
           color: #666;
         }
     }
    }
    .data_btn{
    
      .sp_g {
      width: 289px;
      height: 55px;
      margin:30px auto;
      line-height: 55px;
      text-align:center;
      background-color: #6bb5ff;
      border-radius: 10px;
      font-size: 28px;
      color: #fff;
    }
      }
  } 
  /*  */
  .introduce{
     height: 145px;
     width: 100%;
     margin: 30px 0;
     background-color: #fff;
  }

}
</style>
