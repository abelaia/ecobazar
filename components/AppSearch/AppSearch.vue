<script setup>
const searchQuery = ref('');

const emit = defineEmits(['search']);

const handleSubmit = () => {
  emit('search', searchQuery.value);
};
</script>

<template>
    <div class="app-search">
        <img
            src="@/assets/images/search.svg"
            alt="search"
            class="app-search__icon"
        >
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="app-search__input"
            @keyup.enter="handleSubmit"
        >
        <button
            type="button"
            class="app-search__button"
            @click="handleSubmit"
        >
            Search
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;
@use './AppSearch.scss';
</style>
