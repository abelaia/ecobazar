<script setup>
import AppSectionHeader from '../UI/AppSectionHeader/AppSectionHeader.vue';
import AppCategoryCard from '@/components/AppCategoryCard/AppCategoryCard.vue';
import { categories } from '~/constants/popularCategories.js';
</script>

<template>
    <div class="home-categories">
        <div class="home-categories__container">
            <AppSectionHeader title="Popular Categories" />
            <div class="home-categories__grid">
                <AppCategoryCard
                    v-for="category in categories"
                    :key="category.id"
                    :icon="category.icon"
                    :title="category.title"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './AppPopularCategories.scss' as *;
</style>
