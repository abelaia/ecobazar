<script setup>
import { footerColumns } from '@/models/footerColumns.js';
import { payIcons } from '@/models/payIcons.js'
import AppLink from '@/components/UI/AppLink/AppLink.vue';
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <div class="footer__brand">
                    <a 
                        href="/"
                        class="footer__logo"
                    >
                        <img 
                            src="@/assets/images/ecobazar-logo.svg"
                            alt="sultan"
                            class="footer__logo-image"
                        >
                    </a>
                    <p class="footer__description">
                        Morbi cursus porttitor enim lobortis molestie.
                        Duis gravida turpis dui, eget bibendum magna congue nec.
                    </p>
                    <div class="footer__contacts">
                        <AppLink 
                            href="tel:+72195550114"
                            text="(219) 555-0114"
                        />
                        <span class="footer__contacts-separator">
                            or
                        </span>
                        <AppLink 
                            href="mailto:Proxy@gmail.com"
                            text="Proxy@gmail.com"
                        />
                    </div>
                </div>
                <div class="footer__columns">
                    <div
                        v-for="column in footerColumns"
                        :key="column.id"
                        class="footer__column"
                    >
                        <h4 class="footer__column-title">
                            {{ column.title }}
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="item in column.items"
                                :key="item.label"
                                :href="item.link"
                                class="footer__nav-link"
                            >
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <span class="footer__copyright">
                    Ecobazar eCommerce © {{ new Date().getFullYear() }}. All Rights Reserved
                </span>
                <div class="footer__pay">
                    <img
                        v-for="icon in payIcons"
                        :key="icon.id"
                        :src="`/images/pay/${icon.src}`"
                        :alt="icon.alt"
                        class="footer__pay-icon"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use './AppFooter.scss' as *;
</style>
