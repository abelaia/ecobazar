<script setup>
defineProps({
    count: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <button
        type="button"
        class="basket"
    >
        <div class="basket__icon-wrapper">
            <img
                src="@/assets/images/basket.svg"
                alt="basket"
                class="basket__icon"
            >
            <span
                v-if="count > 0"
                class="basket__badge"
            >
                {{ count }}
            </span>
        </div>
        <div class="basket__info">
            <span class="basket__text">
                Shopping cart:
            </span>
            <span class="basket__total">
                ${{ total.toFixed(2) }}
            </span>
        </div>
    </button>
</template>

<style lang="scss">
@use '@/assets/styles/vars.scss' as *;
@use './Basket.scss';
</style>
