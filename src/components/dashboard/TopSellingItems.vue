<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-6 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="md:flex md:items-center md:justify-between">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
                <a href="#" class="hidden text-sm font-medium text-brand-600 hover:text-indigo-500 md:block">
                    Shop the collection
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            <!-- 
            <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                        <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        <a :href="product.href">
                            <span class="absolute inset-0" />
                            {{ product.name }}
                        </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                </div>
            </div> -->

            <div class="mt-8 text-sm md:hidden">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Shop the collection
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </div>

        <div class="px-4 sm:px-6 lg:px-8">
            <carousel class="" v-model="slideIndex" :autoplay="3000" :wrap-around="true" :transition="1000" :itemsToShow="3.95">
                <slide v-for="product in products" :key="product.id" class="group relative">
                    <div class="carousel__item px-2">
                        <div
                            :class="product.id === products[slideIndex].id ? 'lg:h-80 xl:h-[22rem]' : ''"
                            class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"
                        >
                            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">
                            <a :href="product.href">
                                <span class="absolute inset-0" />
                                {{ product.name }}
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                        <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                    <!-- <pagination class="" /> -->
                </template>
            </carousel>
        </div>

        <div class="flex z-40 gap-4 items-center justify-center mt-12 mb-[50px]">
            <button
                v-for="(content, index) in products"
                :key="content.id"
                :class="products[slideIndex].id === products[index].id ? 'bg-brand-600' : 'bg-brand-200'"
                @click="changeView(index)"
                class="h-[6px] w-[6px] rounded-[100%] bg-red"
            ></button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import {
    Carousel,
    Slide,
    // Pagination,
    Navigation,
} from 'vue3-carousel'

const slideIndex = ref(0)
const changeView = (index) => {
    slideIndex.value = index
}
const products = [
    {
        id: 1,
        name: 'Leather Long Wallet',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 2,
        name: 'Organizer set',
        color: 'Walnut',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-01.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        id: 3,
        name: 'Machiner pencil and pen set',
        color: 'Black',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-03.jpg',
        imageAlt: 'Hand stitched, orange Machiner pencil and pen set.',
    },
    {
        id: 4,
        name: 'Mini sketch books',
        color: 'Light brown',
        price: '$75',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-04.jpg',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },

    // More products...
]
</script>

<style lang="scss" scoped>
// .carousel_track {
//     display: flex;
//     gap: 1rem;
// }
</style>
