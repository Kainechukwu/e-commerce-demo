<template>
    <div>
        <h3>Test view</h3>

        <span>{{ searchText }}</span>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const searchText = inject('globalSearch')
</script>

<style lang="scss" scoped></style>
