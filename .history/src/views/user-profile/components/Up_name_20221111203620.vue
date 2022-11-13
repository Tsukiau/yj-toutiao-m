<template>
  <div class="updade_name">
    <van-nav-bar title="编辑名称" left-text="取消" right-text="完成" @click-left="$emit('close')" @click-right="onUpName" />
    <div class="field">
      <van-field 
      v-model.trim="name" 
      rows="2" autosize 
      type="textarea" 
      maxlength="11" 
      placeholder="请输入名称"
        show-word-limit />
    </div>

  </div>
</template>

<script>
import { updateUserProfile } from '@/api/user'
export default {
  name: 'Up_name',
  props: {
    value: {
      type: [Object, Number, String],
    }
  },
  data() {
    return {
      name: this.value
    };
  },
  methods: {
    async onUpName() {
      console.log(132);
      const name = this.name
      try {
        if (this.name === '') return this.$toast('名称不能为空')
        const data = await updateUserProfile(name)
        console.log(data)
        //更新视图
        this.$emit('input',name)

        this.$emit('close')
        
      } catch (err) {
        console.log(err);
        this.$toast.fail('更新失败')
      }
    }
  }
}
</script>
<style  scoped lang="less">
.updade_name {
  .van-nav-bar {
    background-color: #Fff;
  }

  .field {
    padding: 20px;
  }
}
</style>
