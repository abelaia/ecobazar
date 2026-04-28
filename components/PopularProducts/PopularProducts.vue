<script setup>
import UiSectionHeader from '@/components/UI/SectionHeader/UiSectionHeader.vue';
import ProductCard from '@/components/ProductCard/ProductCard.vue';
import { popularProducts } from '@/constants/popularProducts.js';
</script>

<template>
    <div class="popular-products">
        <div class="popular-products__container">
            <UiSectionHeader title="Popular Products" />
            <div class="popular-products__grid">
                <ProductCard
                    v-for="product in popularProducts"
                    :key="product.id"
                    v-bind="product"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './PopularProducts.scss' as *;
</style>
