import moment from 'moment'
import Vue from 'vue'

Vue.filters('relativeTime',value => {
    return moment(value).format('YYYY-MM-DD')
})
   
