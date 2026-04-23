<script setup>
import AppButton from '../AppButton/AppButton.vue';

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="section-header">
        <h2 class="section-header__title">
            {{ title }}
        </h2>
        <AppButton 
            class="section-header__button"
            text="View All"
            :has-wrapper="false"
        />
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
        font-family: $font-primary;
        font-size: $font-size-heading;
        font-weight: $font-weight-semibold;
        color: $color-gray-900;
    }

    &__button {
        font-family: $font-primary;
        font-size: $font-size-m;
        font-weight: $font-weight-medium;
        color: $color-green-500;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: $color-green-600;
        }
    }
}
</style>
