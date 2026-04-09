<script setup>

const cartCount = ref(3);
const cartTotal = ref(57.00);
</script>

<template>
    <div class="basket">
        <button
            type="button"
            class="basket__button"
        >
            <div class="basket__icon-wrapper">
                <img
                    src="@/assets/images/basket.svg"
                    alt="basket"
                    class="basket__icon"
                >
                <span
                    v-if="cartCount > 0"
                    class="basket__badge"
                >
                    {{ cartCount }}
                </span>
            </div>
            <div class="basket__info">
                <span class="basket__text">
                    Shopping cart:
                </span>
                <span class="basket__total">
                    ${{ cartTotal.toFixed(2) }}
                </span>
            </div>
        </button>
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/vars.scss' as *;
@use './AppBasket.scss';
</style>
