import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomeView.vue'
import TestView from '/src/components/TestView.vue'
import SidebarLayout from '/src/layouts/SideBar.vue'
import About from '/src/components/About.vue'
import BaseLayout from '/src/layouts/BaseLayout.vue'
import Dashboard from '/src/views/DashboardView.vue'
const routes = [
    {
        path: '/sidebar',
        name: 'SidebarLayout',
        component: SidebarLayout,
        children: [
            {
                path: '',
                name: 'Test',
                component: TestView,
            },
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
                path: 'about',
                name: 'About',
                component: About,
            },
        ],
    },

    {
        path: '/',
        name: 'BaseLayout',
        component: BaseLayout,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
