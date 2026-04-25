<script setup>
defineProps({
    total: {
        type: Number,
        required: true,
    },
    currentPage: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['change']);
</script>

<template>
    <div class="pagination">
        <button
            class="pagination__arrow"
            @click="currentPage > 1 && emit('change', currentPage - 1)"
        >
            <img 
                src="/images/pagination/arrow-left-black.svg"
                alt="prev"
                class="pagination__arrow-icon"
            >
        </button>
        <button
            class="pagination__arrow"
            @click="currentPage < total && emit('change', currentPage + 1)"
        >
            <img 
                src="/images/pagination/arrow-right-black.svg"
                alt="next"
                class="pagination__arrow-icon"
            >
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/vars.scss' as *;

.pagination {
    display: flex;
    align-items: center;
    gap: 12px;

    &__arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background-color: $color-gray-40;
        border: 0;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: $color-green-500;

            .pagination__arrow-icon {
                filter: invert(1);
            }
        }
    }

    &__arrow-icon {
        width: 16px;
        height: 12px;
        transition: filter 0.3s ease;
    }
}
</style>
