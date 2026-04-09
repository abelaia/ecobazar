<script setup>
import { languages } from '@/constants/languages.js';
import { currencies } from '@/constants/currencies.js';
import AppSearch from '@/components/AppSearch/AppSearch.vue';
import AppBasket from '@/components/AppBasket/AppBasket.vue';

const selectedLanguage = ref('ENG');
const selectedCurrency = ref('USD');
</script>

<template>
    <header class="header">
        <div class="header__top-bar-section">
            <div class="header__top-bar">
                <div class="header__top-bar-left">
                    <a class="header__location">
                        <img 
                            src="@/assets/images/location.svg"
                            alt="location"
                            class="header__location-icon"
                        >
                        <span class="header__location-text">
                            Store Location: Lincoln- 344, Illinois, Chicago, USA
                        </span>
                    </a>
                </div>
                <div class="header__top-bar-right">
                    <div class="header__select-wrapper">
                        <select
                            v-model="selectedLanguage"
                            class="header__select"
                        >
                            <option
                                v-for="lang in languages"
                                :key="lang.code"
                                :value="lang.code"
                            >
                                {{ lang.code }}
                            </option>
                        </select>
                    </div>
                    <div class="header__select-wrapper">
                        <select
                            v-model="selectedCurrency"
                            class="header__select"
                        >
                            <option
                                v-for="currency in currencies"
                                :key="currency.code"
                                :value="currency.code"
                            >
                                {{ currency.code }}
                            </option>
                        </select>
                    </div>
                    <div class="header__sign-links">
                        <a 
                            href="/signin"
                            class="header__sign-link"
                        >
                            Sign In
                        </a>
                        <span class="header__sign-separator">
                            /
                        </span>
                        <a 
                            href="/signup"
                            class="header__sign-link"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__middle-bar-section">
            <div class="header__middle-bar">
                <a href="/" class="header__logo">
                <img
                    src="@/assets/images/ecobazar-logo.svg"
                    alt="EcoBazar"
                    class="header__logo-image"
                >
                </a>
                <AppSearch class="header__search" />
                <div class="header__actions">
                    <a href="/favourites" class="header__actions-favourites">
                        <img
                            src="@/assets/images/favourites.svg"
                            alt="favourites"
                            class="header__actions-favourites-icon"
                        >
                    </a>
                    <AppBasket class="header__actions-basket" />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
@use '@/assets/styles/vars.scss' as *;
@use './AppHeader.scss';
</style>
