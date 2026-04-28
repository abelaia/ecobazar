<script setup>
const searchQuery = ref('');

const emit = defineEmits(['search']);
</script>

<template>
    <div class="app-search">
        <img
            src="/images/search/search.svg"
            alt="search"
            class="app-search__icon"
        />
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="app-search__input"
            @keyup.enter="emit('search', searchQuery)"
        />
        <button
            type="button"
            class="app-search__button"
            @click="emit('search', searchQuery)"
        >
            Search
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use './Search.scss';
</style>
