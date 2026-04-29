<script setup>
</script>

<template>
    <div class="home-banner">
        <div class="home-banner__container">
            <div class="home-banner__card">
                <img 
                    src="/images/homeBanner/banner-big.jpg" 
                    alt="Home banner" 
                    class="home-banner__image"
                >
                <div class="home-banner__content home-banner__content-organic">
                    <h2 class="home-banner__title-organic">
                        Fresh &amp;&nbsp;Healthy Organic Food
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
                    <UiButton 
                        class="home-banner__button-organic"
                        text="Shop now"
                    />
                </div>
            </div>
            <div class="home-banner__right">
                <div class="home-banner__card">
                    <img 
                        src="/images/homeBanner/banner-products.jpg" 
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
                        <UiButton 
                            class="home-banner__button-summer"
                            text="Shop Now"
                        />
                    </div>
                </div>
                <div class="home-banner__card">
                    <img 
                        src="/images/homeBanner/banner-pattern.jpg" 
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
                        <UiButton 
                            class="home-banner__button-deal"
                            text="Shop Now"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './HomeBanner.scss';
</style>
