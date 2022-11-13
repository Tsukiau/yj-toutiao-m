<template>
  <div class="user-profile">
    <van-nav-bar title="个人信息" left-arrow @click-left="$router.back()" />
  <van-cell-group>
     <!-- 头像 -->
      <van-cell title="头像" is-link  @click="$refs.file.click()">
        <van-image
        class="avatar"
          round
          fit="cover"
          :src="user.photo"
        />
      </van-cell>
      <!--  -->
     <input type="file" 
     hidden 
     ref="file"
     @change="onFileChange"
     >

      <!-- 昵称 -->
      <van-cell title="昵称" 
      :value="user.name" 
      is-link @click="isUpdateNameShow = true"/>
      <!--  性别-->
      <van-cell title="性别" 
      :value="user.gender === 1 ? '女' : '男'" is-link 
      @click="isUpdateGenderShow = true"
      />
      <!-- 生日 -->
      <van-cell title="生日" 
      :value="user.birthday" is-link 
      @click="isUpdateBirthdayShow = true"  />
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
     style="height: 40%" 
     position="bottom">
    <Up_gender 
    v-if="isUpdateGenderShow"
    @close="isUpdateGenderShow=false"
    v-model="user.gender"
    />
    </van-popup>

    <!-- 编辑生日 -->
    <van-popup 
     v-model="isUpdateBirthdayShow" 
     style="height: 40%" 
     position="bottom">
    <Up_birthday 
    v-if="isUpdateBirthdayShow"
    @close="isUpdateBirthdayShow=false"
    v-model="user.birthday"
    />
    </van-popup>

    <!-- 编辑生日 -->
    <van-popup 
     v-model="isUpdateBirthdayShow" 
     style="height: 40%" 
     position="bottom">
    <Up_birthday 
    v-if="isUpdateBirthdayShow"
    @close="isUpdateBirthdayShow=false"
    v-model="user.birthday"
    />
    </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
import { getUserProfile} from '@/api/user'
import Up_name from './components/Up_name.vue'
import Up_gender from './components/Up_gender.vue'
import Up_birthday from './components/Up_birthday.vue'
export default {
  components: { Up_name,Up_gender,Up_birthday },
  name: 'user-profile',
  data(){
     return {
       user: {},
       isUpdateNameShow: false, // 名称
       isUpdateGenderShow: false, // 性别
       isUpdateBirthdayShow: false, //生日
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

    //
    onFileChange(){
       const file = this.$refs.file.files[0]
      const data =  window.URL.createObjectURL(file)
      console.log(data);
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
.van-popup{
   background-color: #f5f7f9;
}
</style>
