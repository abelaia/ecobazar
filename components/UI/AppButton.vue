<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    hasWrapper: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['click']);
</script>

<template>
    <button 
        class="app-button"
        :class="{ 'app-button--wrapper': hasWrapper }"
    >
        <span>
            {{ text }}
        </span>
        <img 
            src="@/assets/images/arrow-right.svg" 
            alt="arrow" 
            class="app-button__arrow"
        >
    </button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.app-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    font-family: $font-primary;
    font-size: $font-size-m;
    font-weight: $font-weight-semibold;
    color: $color-green-sucsess;
    background-color: transparent;
    border: 0;
    border-radius: 53px;
    cursor: pointer;
    transition: color 0.3s ease;

    &--wrapper {
        padding: 16px 40px;
        color: $color-green-sucsess;
        background-color: $color-white;
        transition: all 0.3s ease;
    }

    &__arrow {
        width: 15px;
        height: 12px;
    }
}
</style>
