import VueRouter from "vue-router";
// import ExampleComponent from './components/ExampleComponent' ;
// import Example2 from './components/Example2';
import bookables from './bookables/bookables';



const routes = [
    {
        path : '/',
        component : bookables ,
        name:'home'
    },
    // {
    //     path : '/second',
    //     component : Example2 ,
    //     name:'second'
    // }

];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode:"history"
  });

  export default router ; 
