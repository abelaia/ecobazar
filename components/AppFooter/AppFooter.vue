<script setup>
import { myAccountItems, helpsItems, proxyItems, categoriesItems} from '@/constants/menu.js';
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
                        <a 
                            href="tel:+72195550114"
                            class="footer__phone"
                        >
                            (219) 555-0114
                        </a>
                        <span class="footer__contacts-separator">
                            or
                        </span>
                        <a 
                            href="mailto:Proxy@gmail.com"
                            class="footer__email"
                        >
                            Proxy@gmail.com
                        </a>
                    </div>
                </div>
                <div class="footer__columns">
                    <div class="footer__column">
                        <h4 class="footer__column-title">
                            My Account
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="item in myAccountItems"
                                :key="item.label"
                                :href="item.link"
                                class="footer__nav-link"
                            >
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>
                    <div class="footer__column">
                        <h4 class="footer__column-title">
                            Helps
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="item in helpsItems"
                                :key="item.label"
                                :href="item.link"
                                class="footer__nav-link"
                            >
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>
                    <div class="footer__column">
                        <h4 class="footer__column-title">
                            Proxy
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="item in proxyItems"
                                :key="item.label"
                                :href="item.link"
                                class="footer__nav-link"
                            >
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>
                    <div class="footer__column">
                        <h4 class="footer__column-title">
                            Categories
                        </h4>
                        <nav class="footer__nav">
                            <a
                                v-for="item in categoriesItems"
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
                    Ecobazar ©Commerce © 2021. All Rights Reserved
                </span>
                <div class="footer__pay">
                    <img 
                        src="@/assets/images/applePay.svg"
                        alt="visa"
                        class="footer__icon-applePay"
                    >
                    <img 
                        src="@/assets/images/visa.svg"
                        alt="mastercard"
                        class="footer__icon-visa"
                    >
                    <img 
                        src="@/assets/images/discover.svg"
                        alt="visa"
                        class="footer__icon-discover"
                    >
                    <img 
                        src="@/assets/images/mastercard.svg"
                        alt="mastercard"
                        class="footer__icon-mastercard"
                    >
                    <img 
                        src="@/assets/images/cart.svg"
                        alt="mastercard"
                        class="footer__icon-cart"
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use './AppFooter.scss' as *;
</style>
