import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,{
    size:'medium'
});

import store from './store';
import router from './router';

import App from './App.vue'
const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router: router,
    store: store,
    components: {App}
});