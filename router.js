import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: 'login',
            component: AuthLayout,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
                }
            ]
        }
    ]
})
