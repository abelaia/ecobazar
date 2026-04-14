<script setup>
import { homeList, shopList, pagesList, blogList } from '@/constants/navigation.js';
</script>

<template>
    <div class="navigation">
        <div class="navigation__container">
            <nav class="navigation__menu">
                <div class="navigation__select-wrapper">
                    <select class="navigation__select">
                        <option
                            v-for="item in homeList"
                            :key="item.label"
                            :value="item.link"
                        >
                            {{ item.label }}
                        </option>
                    </select>
                </div>
                <div class="navigation__select-wrapper">
                    <select class="navigation__select">
                        <option
                            v-for="item in shopList"
                            :key="item.label"
                            :value="item.link"
                        >
                            {{ item.label }}
                        </option>
                    </select>
                </div>
                <div class="navigation__select-wrapper">
                    <select class="navigation__select">
                        <option
                            v-for="item in pagesList"
                            :key="item.label"
                            :value="item.link"
                        >
                            {{ item.label }}
                        </option>
                    </select>
                </div>
                <div class="navigation__select-wrapper">
                    <select class="navigation__select">
                        <option
                            v-for="item in blogList"
                            :key="item.label"
                            :value="item.link"
                        >
                            {{ item.label }}
                        </option>
                    </select>
                </div>
                <a 
                    href="/about"
                    class="navigation__link"
                >
                    About Us
                </a>
                <a 
                    href="/contact"
                    class="navigation__link"
                >
                    Contact Us
                </a>
            </nav>
            <div class="navigation__phone">
                <img 
                    src="@/assets/images/phone.svg"
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
@use './AppNavigation.scss' as *;
</style>
