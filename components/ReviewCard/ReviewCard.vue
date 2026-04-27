<script setup>
defineProps({
    photo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    job: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="review-card">
        <img
            src="/images/reviews/quotation-marks.svg"
            alt="quotation marks"
            class="review-card__quotation"
        >
        <p class="review-card__text">
            {{ text }}
        </p>
        <div class="review-card__wrapper">
            <img 
                :src="`/${photo}`"
                :alt="name"
                class="review-card__photo"
            >
            <p class="review-card__author">
                <span class="review-card__name">
                    {{ name }}
                </span>
                <span class="review-card__job">
                    {{ job }}
                </span>
            </p>
            <UiStarRating 
                :rating="5"
                :size="14" 
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './ReviewCard.scss' as *;
</style>
