import moment from 'moment'
import Vue from 'vue'

import 'moment/locale/zh-cn';

moment.locale('zh-cn');    

Vue.filter('relativeTime',value => {
    return moment(value, "YYYYMMDD").fromNow(); 
})
   
