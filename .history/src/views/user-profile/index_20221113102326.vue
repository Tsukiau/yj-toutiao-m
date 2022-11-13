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
      <!--  -->
      <van-cell title="昵称" 
      :value="user.name" 
      is-link @click="isUpdateNameShow = true"/>
      <!--  -->
      <van-cell title="性别" 
      :value="user.gender === 1 ? '女' : '男'" is-link 
      @click="isUpdateGenderShow = true"
      />
      <!--  -->
      <van-cell title="生日" :value="user.birthday" is-link />
      <!--  -->
      <van-cell title="手机号" :value="user.mobile" is-link />

     <!-- 编辑昵称 -->
    <van-popup 
     v-model="isUpdateNameShow" 
     style="height: 40%" 
     position="bottom">
    <Up_name 
    v-if="isUpdateNameShow"
    @close="isUpdateNameShow = false" 
    v-model="user.name"
    />
  </van-popup>

    <!-- 编辑性别 -->
    <van-popup 
     v-model="isUpdateGenderShow" 
     style="height: 50%" 
     position="bottom">
    <Up_gender 
    v-model="user.gender"
    :close="isUpdateGenderShow=false"
    />
    </van-popup>


    </van-cell-group>
  </div>
</template>

<script>
import { getUserProfile} from '@/api/user'
import Up_name from './components/Up_name.vue'
import Up_gender from './components/Up_gender.vue'
export default {
  components: { Up_name,Up_gender },
  name: 'user-profile',
  data(){
     return {
       user: {},
       isUpdateNameShow: false, // 名称
       isUpdateGenderShow: false, // 性别
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
    },

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
.van-popup{
   background-color: #f5f7f9;
}
</style>
