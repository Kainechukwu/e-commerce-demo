import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomeView.vue'
import TestView from '/src/components/TestView.vue'
import MainLayout from '/src/layouts/SideBar.vue'
import About from '/src/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: MainLayout,
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
                path: '/about',
                name: 'About',
                component: About,
            },
        ],
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
