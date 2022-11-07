<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell title="我的频道" :border="false">
      <van-button 
      class="edit-btn"
      round size="mini" 
      type="danger">编辑
    </van-button>

    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item 
      class="channel-item" 
      v-for="(item,index) in myChannels" :key="index" 
      icon="close"
      >
      <span class="text" :class="{active: active === index}" slot="text">{{ item.name }}</span>
      </van-grid-item>
    </van-grid>

    <!--频道推荐  -->
    <van-cell title="频道推荐" :border="false"></van-cell>

    <van-grid :gutter="10">
      <van-grid-item 
      class="channel-item" 
      v-for="(item,index) in recommendChannels" 
      :key="index" :text="item.name" 
      icon="plus"/>
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels} from '@/api/home'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    myChannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      allChannels: [],
      arr:[]
    }
  },
  created() {
    this.getAllChannels()
   },
  methods: {
    async getAllChannels(){
      try{
        const data = await getAllChannels()
       this.allChannels = data.channels
      }catch(err){
         console.log(err)
      }
    },

  },
  computed: {
    recommendChannels(){
       return this.allChannels.filter(arritem => !this.myChannels.find(item => item.id === arritem.id))
    }
  }
}
</script>

<style scoped lang="less">
.channel-edit {
  padding-top: 80px;
  .channel-item {
    width: 160px;
    height: 86px;
 
    /deep/ .van-grid-item__content {
      white-space:nowrap;
      flex-direction: row;
      background-color: #f5f5f6;
      .van-grid-item__text, .text{
        color: #222;
        font-size: 28px;
        margin-top: 6px;
      }
      .active {
        color: red;
      }
      .van-icon {
            font-size: 32px;
        }

    }
    /deep/ .van-icon-close{
    position: absolute;
    right: -10px;
    top: -10px;
    font-size: 45px;
    color: #666;
  }
  }
  .van-cell__title span {
     line-height:56px ;
     font-size: 32px;
     color: #333;
   }
   .van-cell{
     line-height: 0;
     padding: 40px;
   }
   .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #fff;
    border: 1px solid #f85959;
  }
}
</style>
