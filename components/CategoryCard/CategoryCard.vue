<script setup>
defineProps({
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="category-card">
        <img
            :src="`/images/popularCategories/${icon}.jpg`" 
            :alt="title"
            class="category-card__image"
        >
        <span class="category-card__title">
            {{ title }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 186px;
    height: 214px;
    padding: 5px;
    border: 1px solid $color-gray-100;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: $color-green-500;
        box-shadow: $shadow-card;
    }

    &__image {
        display: block;
        width: 190px;
        height: 130px;
        object-fit: contain;
    }

    &__title {
        margin-top: 16px;
        font-family: $font-primary;
        font-size: $font-size-l;
        font-weight: $font-weight-medium;
        color: $color-gray-900;
        text-align: center;
        transition: color 0.3s ease;
    }
    
    &:hover &__title {
        color: $color-green-600;
    }
}
</style>
