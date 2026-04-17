<script setup>
import AppButton from '../UI/AppButton.vue';
import CategoryCard from '@/components/AppCategoryCard/AppCategoryCard.vue';
import { categories } from '@/constants/categories.js';
</script>

<template>
    <div class="home-categories">
        <div class="home-categories__container">
            <div class="home-categories__header">
                <h2 class="home-categories__title">
                    Popular Categories
                </h2>
                <AppButton 
                    class="home-categories__button"
                    text="View All"
                    :has-wrapper="false"
                />
            </div>
            <div class="home-categories__grid">
                <CategoryCard
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
@use './AppCategories.scss' as *;
</style>
