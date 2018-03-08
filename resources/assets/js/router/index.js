// App component and 404 component are page-level components
import Index     from '../components/Index.vue'
import NotFound from '../components/404.vue'

// segment components inside App Component's workspace section
import HelloDemo  from '../components/demo/hello.vue'
import WorldDemo  from '../components/demo/world.vue'


const routes = [

    {
        path: '/',
        component: Index,
        children: [
            {
                path: '', component: HelloDemo
            },
            {
                path: 'hello', name: 'Introduction', component: HelloDemo
            },
            {
                path: 'world', name: 'Example', component: WorldDemo
            }
        ]
    },


    {
        path: '/404', name: '404', component: NotFound
    },
    {
        path: '*', redirect: '404'
    }

];

// Register VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;