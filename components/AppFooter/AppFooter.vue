<script setup>
import { footerLinks, payIcons } from '@/models/menu.js';
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
                            src="@/assets/images/ecobazar-logo-white.svg"
                            alt="sultan"
                            class="footer__logo-image"
                        />
                    </a>
                    <p class="footer__description">
                        Morbi cursus porttitor enim lobortis molestie.
                        Duis gravida turpis dui, eget bibendum magna congue nec.
                    </p>
                    <div class="footer__contacts">
                        <a 
                            href="tel:+72195550114"
                            class="footer__link"
                        >
                            (219) 555-0114
                        </a>
                        <span class="footer__contacts-separator">
                            or
                        </span>
                        <a 
                            href="mailto:Proxy@gmail.com"
                            class="footer__link"
                        >
                            Proxy@gmail.com
                        </a>
                    </div>
                </div>
                <div class="footer__columns">
                    <div
                        v-for="column in footerLinks"
                        :key="column.id"
                        class="footer__column"
                    >
                        <h4 class="footer__column-title">
                            {{ column.title }}
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="({label, link}) in column.items"
                                :key="label"
                                :href="link"
                                class="footer__nav-link"
                            >
                                {{ label }}
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <span class="footer__copyright">
                    Ecobazar eCommerce&nbsp;&copy; {{ new Date().getFullYear() }}. All Rights Reserved
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
