<template>
  <div class="updade_name">
    <van-nav-bar 
    title="编辑名称" 
    left-text="取消"
    right-text="完成"
    @click-left="$emit('close')"
    @clikc-right="onUpName"
    />
    <div class="field">
      <van-field
      v-model="name"
      rows="2"
      autosize
      type="textarea"
      maxlength="11"
      placeholder="请输入名称"
      show-word-limit
    />
    </div>
    
  </div>
</template>

<script>
import { updateUserprofile} from '@/api/user'
export default {
   name: 'Up_name',
   props: {
    value: {
       type: [Object,Number,String],
    }
   },
   data () {
   return {
    name: this.value
   }; 
},
methods: {
 async onUpName(){
    await updateUserprofile() 
  }
}
}
</script>
<style  scoped lang="less">
.updade_name{
   .van-nav-bar {
     background-color: #Fff;
   }
   .field{
     padding: 20px;
   }
}
</style>
