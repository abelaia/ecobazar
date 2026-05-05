<script setup>
defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        default: null,
    },
    discount: {
        type: Number,
        default: null,
    },
    rating: {
        type: Number,
        default: null,
    },
});
</script>

<template>
    <div class="product-card">
        <div class="product-card__image-wrapper">
            <img 
                :src="`/images/popularProducts/${image}.jpg`" 
                :alt="title"
                class="product-card__image"
            >
            <span 
                v-if="discount" 
                class="product-card__discount"
            >
                Sale {{ discount }}%
            </span>
        </div>
        <div class="product-card__info">
            <h3 class="product-card__title">
                {{ title }}
            </h3>
            <div class="product-card__price">
                <span class="product-card__price-current">
                    ${{ price.toFixed(2) }}
                </span>
                <span 
                    v-if="oldPrice"
                    class="product-card__price-old"
                >
                    ${{ oldPrice.toFixed(2) }}
                </span>
            </div>
            <UiStarRating 
                :rating="rating"
                :size="10"
                class="product-card__star"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './ProductCard.scss' as *;
</style>
