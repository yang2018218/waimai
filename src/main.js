// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.prototype.axios = axios
import './assets/style.css'
import './assets/first/font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.filter('imgHash', function(val){
  // console.log(val);
  var v1 = val.substring(0,1);
  var v2 = val.substring(1,3);
  var v3 = val.substring(3);
  var v4 = val.substring(32);
  // 通过返回值设置 已经处理好的数据
  return  'https://cube.elemecdn.com/' + v1 + '/' + v2 + '/' + v3 + '.' + v4;
}),
  Vue.filter('time', function(value){
    var  a1 = value.substring(0,3);
    var  a2 = value.substring(3,4);
    var  a3 = value.substring(4,6);
    return a1 + "-" + a2 + "-" + a3;
  }),
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
