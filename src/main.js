// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueClipboard from 'vue-clipboard2'
import router from './router'

//全局修改
$().__proto__.highcharts=window.highcharts;

Vue.use(Vuex);
Vue.use(VueClipboard)

Vue.config.productionTip = false

const store=new Vuex.Store({
  //储存的值
  state:{
    num:1,
    tons:{}
  },
  //mutations是改变Vuex状态的唯一方法
  mutations:{
   
  },
  getters:{
      
  },
  actions:{
    
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
