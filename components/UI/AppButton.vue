<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
    filled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['click']);
</script>

<template>
    <button 
        :class="[
            'app-button',
            { 'app-button--filled': filled },
        ]"
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
    color: $color-green-500;
    background-color: transparent;
    border: 0;
    border-radius: 52px;
    cursor: pointer;
    transition: color 0.3s ease;

    &--filled {
        padding: 16px 40px;
        color: $color-green-500;
        background-color: $color-gray-40;
        transition: all 0.3s ease;
    }

    &__arrow {
        width: 15px;
        height: 12px;
    }
}
</style>
