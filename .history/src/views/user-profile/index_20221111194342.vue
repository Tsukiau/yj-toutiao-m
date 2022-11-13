<template>
  <div class="user-profile">
    <van-nav-bar title="个人信息" left-arrow right-text="保存" @click-left="$router.back()" />
  <van-cell-group>
      <van-cell title="头像" is-link>
        <van-image
        class="avatar"
          round
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </van-cell>
      <van-cell title="昵称" value="abc" is-link />
      <van-cell title="性别" value="男" is-link />
      <van-cell title="生日" value="2019-9-27" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { getUserProfile} from '@/api/user'
export default {
  name: 'user-profile',
  data(){
     return {
       user: {}
     }
  },
  created(){
    this.getUserProfile()
  },
  methods: {
   async  getUserProfile(){
       const data = await getUserProfile()
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .van-icon-arrow-left { 
  color: #fff;
}
.avatar{
    width: 60px;
    height: 60px;
}
</style>
