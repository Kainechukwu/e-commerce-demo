<template>
    <div class="layout-rspv flex flex-col gap-6">
        <TopSellingItems />
        <TopSellingItems />

        <SponsoredProducts />
    </div>
</template>

<script setup>
import SponsoredProducts from '/src/components/dashboard/SponsoredProducts.vue'

import TopSellingItems from '/src/components/dashboard/TopSellingItems.vue'
</script>

<style lang="scss" scoped></style>
