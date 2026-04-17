<script setup>
import AppSectionHeader from '@/components/UI/AppSectionHeader/AppSectionHeader.vue';
import AppProductCard from '@/components/AppProductCard/AppProductCard.vue';
import { popularProducts } from '@/constants/popularProducts.js';
</script>

<template>
    <div class="popular-products">
        <div class="popular-products__container">
            <AppSectionHeader 
                title="Popular Products"
            />
            <div class="popular-products__grid">
                <AppProductCard
                    v-for="product in popularProducts"
                    :key="product.id"
                    v-bind="product"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './AppPopularProducts.scss' as *;
</style>
