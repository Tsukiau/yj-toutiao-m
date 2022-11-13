<template>
  <div class="updade_name">
    <van-nav-bar 
    title="编辑名称" 
    left-text="取消"
    right-text="完成"
    @click-left="$emit('close')"
    />
    <div class="field">
      <van-field
      v-model="user"
      rows="2"
      autosize
      type="textarea"
      maxlength="10"
      placeholder="请输入名称"
      show-word-limit
    />
    </div>
    
  </div>
</template>

<script>
export default {
   name: 'updade_name',
   components: {},
   props: {
    user: {
       type: Object,
    }
   },
   data () {
   return {
    user: ''
   }; 
   },
   computed: {},
   watch: {},
   created: {},
   methods: {},
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
