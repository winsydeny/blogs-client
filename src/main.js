// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import vueReource from 'vue-resource'
import router from './router/index.js'
import axios from 'axios'
Vue.config.productionTip = false
// Vue.use(vueReource)


//自定义指令
Vue.directive('rainbow',{
   bind(el,binging,vnode){
     if(binging.value === 'theme'){
        el.style.color = `#${Math.random().toString(16).slice(2,8)}`;  
     }
    }
});
// Vue.filter('toUpperCase',(value)=>{
//   return value.toUpperCase();
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
