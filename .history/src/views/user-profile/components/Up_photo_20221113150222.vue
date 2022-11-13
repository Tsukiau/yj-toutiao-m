<template>
   <div class="up_photo">
      <img :src="img" alt="" ref="img" >

      <div class="toolbar">
          <div @click="$emit('close')">取消</div>
          <div @click="onConfirm">完成</div>
      </div>
   </div>
</template>

<script>
import { updateUserPhoto} from '@/api/user'
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
   return {
      cropper: null
   }; 
   },
   mounted(){
   const img = this.$refs.img
   this.cropper = new Cropper(img, {
      viewMode: 1, //  1只能在图片区域拖动， 0可以超出图片区域拖动
      dragMode: 'move', //
      aspectRatio: 1, // 图片比例
      autoCropArea: 1,
      cropBoxMovable: false,//截图区域可否移动
      cropBoxResizable: false, // 缩放
      background: false, // 是否默认背景
      movable: true // 画布是否可以移动
  })
 },
 methods: {
   onConfirm(){
      // 基于服务端的裁切使用 getData 方法获取裁切参数
     // console.log(this.cropper.getData())

     // 纯客户端的裁切使用 getCroppedCanvas 获取裁切的文件对象
     this.cropper.getCroppedCanvas().toBlob(blob => {
        // 接口要求 Content-Type 是 multipart/form-data
       // 必须传递 FormData 对象
       const formData = new FormData()
       formData.append('photo', blob)
      
       const data = await = updateUserPhoto(formData)

     })
   }
 }
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
