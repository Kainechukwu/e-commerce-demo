<template>
    <!-- <img class="mx-auto" alt="Vue logo" src="../assets/boilerplate.png" /> -->
    <div>
        <h3>Home view</h3>
        <span>{{ searchText }}</span>
    </div>
    <!-- <button class="h-12 bg-red-300 px-[80px] max-w-max">Home Button</button> -->
</template>

<script setup>
import { inject, onUnmounted } from 'vue'

const searchText = inject('globalSearch')
</script>

<style lang="scss" scoped></style>
