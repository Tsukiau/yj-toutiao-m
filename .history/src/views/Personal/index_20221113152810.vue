<template>
  <div class="Personal">
    <van-nav-bar title="黑马" class="page-nav-bar">
      <van-icon slot="left" name="arrow-left" @click="$router.back()" />
    </van-nav-bar>
    <!--  -->
    <div class="Personal_head">
      <div class="head_left">
        <img src="" alt="">
      </div>
      <div class="head_right">
         <div>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
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
   data () {
   return {}; 
   },
   computed: {},
   watch: {},
   created: {},
   methods: {},
}
</script>
<style  scoped lang="less">
.Personal{
   .van-icon-arrow-left {
     color: #fff;
   }
   .Personal_head{
     height: 240px;
     width: 100%;
     background-color: antiquewhite;
     display: flex;
     ju
   }
}
</style>
