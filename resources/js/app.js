import Vue from 'vue';
import router from './routes';
import VueRouter from 'vue-router';
window.Vue = require('vue');
import index from './Index';


//  Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//  Vue.component('example2', require('./components/Example2').default);

 Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router ,
    components : {
        index
    }
});
