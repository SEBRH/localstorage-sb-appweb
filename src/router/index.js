import {createRouter, createWebHistory} from 'vue-router'

import TaskStore from "../views/taskStore.view.vue";
import Home from '../views/home.view.vue'
import Summary from '../views/summary.view.vue'
import HomePinia from "../views/homePinia.view.vue";
import countPinia from "../views/countPinia.view.vue";
const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Home, alias: '/home'
        },
        {
            path: '/summary', component: Summary, name: 'Summary'
        },
        {
          path: '/homePinia', component: HomePinia, name: 'homePinia'
        },
        {
          path: '/countPinia', component: countPinia, name: 'counterPinia'
        },
        {
          path: '/taskStore', component: TaskStore, name: 'taskStore'
        }
    ]
})

export default router;