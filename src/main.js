import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//echarts
var echarts = require('echarts');
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
//公用样式引入
import './style/common.less';
import './style/element.less';
import './style/ie.less';
//设置ie浏览器下body添加ie class 以用来处理ie样式
if (window.ActiveXObject || "ActiveXObject" in window) {
  document.body.classList.add('ie')
}
//全局过滤器 filter
import filter from "./filter";
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));
//一些公用方法和mixin 挂载在prototype
import ServerMixin from '@/mixin/ServerMixin';
Vue.use(ServerMixin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
