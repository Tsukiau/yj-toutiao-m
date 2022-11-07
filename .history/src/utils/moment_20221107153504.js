import moment from 'moment'
import Vue from 'vue'

Vue.filters('relativeTime',value => {
    return moment(val).format('YYYY-MM-DD')
})
   
