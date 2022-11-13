<template>
   <div class="up_photo">
      <img :src="img" alt="" ref="img" >

      <div class="toolbar">
          <div @click="$emit('close')">取消</div>
          <div>完成</div>
      </div>
   </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
   name: 'up_photo',
   props: {
    img: {
       type: [String,Object],
       required: true
    }
   },
   data () {
   return {}; 
   },
   mounted()
}
</script>
<style  scoped lang="less">
.up_photo{
    background-color: #000;
    height: 100%;
}
img {
   display: block;
   max-width: 100%;
}
.toolbar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content:space-between;
    div{
       width: 120px;
       height: 120px;
       font-size: 40px;
       display: flex;
       justify-content: center;
       align-content: center;
       color: #fff;
    }
}
</style>
