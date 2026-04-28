<script setup>
import { menuItems } from '@/constants/navigation.js';
</script>

<template>
    <div class="navigation">
        <div class="navigation__container">
            <nav class="navigation__menu">
                <div 
                    v-for="item in menuItems"
                    :key="item.label"
                >
                    <div 
                        v-if="item.children"
                        class="navigation__select-wrapper"
                    >
                        <select class="navigation__select">
                            <option
                                v-for="child in item.children"
                                :key="child.label"
                                :value="child.link"
                            >
                                {{ child.label }}
                            </option>
                        </select>
                    </div>
                    <a
                        v-else
                        :href="item.link"
                        class="navigation__link"
                    >
                        {{ item.label }}
                    </a>
                </div>
            </nav>
            <div class="navigation__phone">
                <img 
                    src="/images/navigation/phone.svg"
                    alt="phone"
                    class="navigation__phone-icon"
                >
                <a
                    href="tel:+12195550114"
                    class="navigation__phone-number"
                >
                    (219) 555-0114
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './Navigation.scss' as *;
</style>
