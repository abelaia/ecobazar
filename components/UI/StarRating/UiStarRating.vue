<script setup>
defineProps({
    rating: {
        type: Number,
        default: 5,
    },
    size: {
        type: Number,
        default: 10,
    },
});
</script>

<template>
    <div class="star-rating">
        <img 
            v-for="star in 5" 
            :key="star"
            :src="`/images/stars/${star <= rating ? 'star-filled' : 'star-empty'}.svg`"
            :alt="star <= rating ? 'filled star' : 'empty star'"
            class="star-rating__star"
            :style="`width: ${size}px; height: ${size}px`"
        >
    </div>
</template>

<style lang="scss" scoped>
.star-rating {
    display: flex;
    align-items: center;
    gap: 2px;
}
</style>
