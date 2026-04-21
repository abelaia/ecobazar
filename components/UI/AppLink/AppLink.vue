<script setup>
defineProps({
    href: {
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
    <a 
        :href="href"
        class="app-link"
    >
        {{ text }}
    </a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.app-link {
    padding-bottom: 6px;
    font-family: $font-primary;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-white-100;
    text-decoration: none;
    border-bottom: 1px solid $color-green-500;
}
</style>
