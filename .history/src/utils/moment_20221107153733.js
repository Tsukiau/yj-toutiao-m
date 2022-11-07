import moment from 'moment'
import Vue from 'vue'

Vue.filter('relativeTime',value => {
    return moment("20120620", "YYYYMMDD").fromNow(); 
})
   
