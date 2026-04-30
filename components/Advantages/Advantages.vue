<script setup>
import { ref } from 'vue';
import { advantages } from '@/constants/advantages.js';

const activeAdvantage = ref(1);
</script>

<template>
    <div class="home-advantages">
        <div class="home-advantages__container">
            <div
                v-for="advantage in advantages"
                :key="advantage.id"
                :class="[
                    'home-advantages__item',
                    { 'home-advantages__item--active': activeAdvantage === advantage.id },
                ]"
                @click="activeAdvantage = advantage.id"
            >
                <div class="home-advantages__icon-wrapper">
                    <img
                        :src="`/images/advantages${activeAdvantage === advantage.id ? advantage.iconActive : advantage.icon}.svg`"
                        :alt="advantage.title"
                        class="home-advantages__icon"
                    >
                </div>
                <div class="home-advantages__content">
                    <h3 class="home-advantages__title">
                        {{ advantage.title }}
                    </h3>
                    <p class="home-advantages__description">
                        {{ advantage.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './Advantages.scss' as *;
</style>
