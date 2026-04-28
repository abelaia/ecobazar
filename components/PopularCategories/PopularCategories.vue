<script setup>
import UiSectionHeader from '../UI/SectionHeader/UiSectionHeader.vue';
import CategoryCard from '@/components/CategoryCard/CategoryCard.vue';
import { categories } from '~/constants/popularCategories.js';
</script>

<template>
    <div class="home-categories">
        <div class="home-categories__container">
            <UiSectionHeader title="Popular Categories" />
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
@use './PopularCategories.scss' as *;
</style>
