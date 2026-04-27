<script setup>
import { ref, computed } from 'vue';
import { reviews } from '@/constants/reviews.js';
import ReviewCard from '@/components/ReviewCard/ReviewCard.vue';
import UiPagination from '@/components/UI/Pagination/UiPagination.vue';

const VISIBLE_REVIEWS_COUNT = 3;

const startIndex = ref(0);

const totalSlides = computed(() => {
    return reviews.length - VISIBLE_REVIEWS_COUNT + 1;
});

const visibleReviews = computed(() => {
    return reviews.slice(startIndex.value, startIndex.value + VISIBLE_REVIEWS_COUNT);
});
</script>

<template>
    <div class="reviews">
        <div class="reviews__container">
            <div class="reviews__header">
                <h2 class="reviews__title">
                    Client Testimonials
                </h2>
                <UiPagination
                    :current-page="startIndex + 1"
                    :total="totalSlides"
                    @change="startIndex = $event - 1"
                />
            </div>
            <div class="reviews__grid">
                <ReviewCard
                    v-for="review in visibleReviews"
                    :key="review.id"
                    v-bind="review"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.reviews {
    width: 100%;
    padding: 60px 0;
    background-color: $color-gray-50;

    &__container {
        max-width: 1320px;
        margin: 0 auto;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        font-family: $font-primary;
        font-size: $font-size-heading;
        font-weight: $font-weight-semibold;
        color: $color-gray-900;
        text-align: left;
    }

    &__grid {
        margin-top: 32px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }
}
</style>
