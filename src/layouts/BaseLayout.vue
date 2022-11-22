<template>
    <div class="flex flex-col">
        <header class="bg-brand-600 header">
            <nav class="layout-rspv" aria-label="Top">
                <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div class="flex items-center">
                        <a href="#">
                            <span class="sr-only">Your Company</span>
                            <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                        </a>
                        <div class="ml-10 hidden space-x-8 lg:block">
                            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</a>
                        </div>
                    </div>
                    <div class="ml-10 space-x-4">
                        <a href="#" class="inline-block rounded-md border border-transparent bg-brand-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
                        <a href="#" class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-brand-600 hover:bg-brand-100">Sign up</a>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                    <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</a>
                </div>
            </nav>
        </header>
        <main class="">
            <div class="py-6 min-h-screen">
                <router-view></router-view>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '/src/components/FooterView.vue'
const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
]
</script>
