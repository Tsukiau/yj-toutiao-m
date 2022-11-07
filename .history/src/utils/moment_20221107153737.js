import moment from 'moment'
import Vue from 'vue'

Vue.filter('relativeTime',value => {
    return moment(value, "YYYYMMDD").fromNow(); 
})
   
