<template>
  <div class="user-profile">
    <van-nav-bar title="个人信息" left-arrow @click-left="$router.back()" />
  <van-cell-group>
      <van-cell title="头像" is-link>
        <van-image
        class="avatar"
          round
          fit="cover"
          :src="user.photo"
        />
      </van-cell>
      <van-cell title="昵称" :value="user.name" is-link />
      <van-cell title="性别" :value="user.gender === 1 ? '女' : '男'" is-link />
      <van-cell title="生日" :value="user.birthday" is-link />
      <van-cell title="手机号" :value="user.mobile" is-link />

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
       try {
        const data = await getUserProfile()
       this.user = data
       console.log(data);
       }catch(err){
        console.log(err)
       }
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
