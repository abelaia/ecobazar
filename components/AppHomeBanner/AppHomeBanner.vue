<script setup>
import AppButton from '../UI/AppButton.vue';
</script>

<template>
    <div class="home-banner">
        <div class="home-banner__container">
            <div class="home-banner__card">
                <img 
                    src="@/assets/images/banner-big.jpg" 
                    alt="Big banner" 
                    class="home-banner__image"
                >
                <div class="home-banner__content home-banner__content-organic">
                    <h2 class="home-banner__title-organic">
                        Fresh & Healthy Organic Food
                    </h2>
                    <div class="home-banner__offer-wrapper">
                        <div class="home-banner__offer">
                            <span class="home-banner__offer-label">
                                Sale up to
                            </span>
                            <span class="home-banner__offer-value">
                                30% OFF
                            </span>
                        </div>
                        <p class="home-banner__shipping-text">
                            Free shipping on all your order.
                        </p>
                    </div>
                    <AppButton 
                        class="home-banner__button-organic"
                        text="Shop now"
                        :has-wrapper="true"
                    />
                </div>
            </div>
            <div class="home-banner__right">
                <div class="home-banner__card">
                    <img 
                        src="@/assets/images/banner-products.jpg" 
                        alt="Products" 
                        class="home-banner__image"
                    >
                    <div class="home-banner__content home-banner__content-summer">
                        <span class="home-banner__label-summer">
                            SUMMER SALE
                        </span>
                        <h2 class="home-banner__discount-summer">
                            75% OFF
                        </h2>
                        <p class="home-banner__text-summer">
                            Only Fruit & Vegetable
                        </p>
                        <AppButton 
                            class="home-banner__button-summer"
                            text="Shop Now"
                            :has-wrapper="false"
                        />
                    </div>
                </div>
                <div class="home-banner__card">
                    <img 
                        src="@/assets/images/banner-pattern.jpg" 
                        alt="Pattern" 
                        class="home-banner__image"
                    >
                    <div class="home-banner__content home-banner__content-deal">
                        <span class="home-banner__label-deal">
                            BEST DEAL
                        </span>
                        <h2 class="home-banner__text-deal">
                            Special Products Deal of the Month
                        </h2>
                        <AppButton 
                            class="home-banner__button-deal"
                            text="Shop Now"
                            :has-wrapper="false"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './AppHomeBanner.scss';
</style>
