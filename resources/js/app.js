import Vue from 'vue';
import router from './routes';
import VueRouter from 'vue-router';
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router
});
