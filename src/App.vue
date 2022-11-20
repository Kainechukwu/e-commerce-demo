<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import GithubSVG from './assets/github.svg'

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
            height: 1.5px;
        }
    }
}
</style>
