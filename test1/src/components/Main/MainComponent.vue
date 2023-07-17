<template>
    <div class="main">
        <div class="main__header">
            <router-link class="main__header__router" to="/">
                <div class="main__header__left">
                    <img class="main__header__left__img" src="@/assets/desktop/mnenadologo1.png" alt="">
                    <p class="main__header__left__text">ваш личный помощник</p>
                </div>
            </router-link>
            <div class="main__header__right">
                <router-link class="main__header__router" to="/main"><button class="main__header__right__btn"></button>
                </router-link>
            </div>
        </div>
        <!-- {{ $store.state.access_token }} -->

        <div class="main__content">

            <div class="main__content__images">
                <div class="main__content__images__left main__content__gradient main__content__images__left__text">
                    <img class="main__content__images__left__img1" src="@/assets/desktop/FrameHouseLogo.png" alt="">
                    <!-- <p class="main__content__images__left__text main__content__gradient">домашние<br />мастера</p> -->
                </div>
                <div class="main__content__images__right main__content__gradient main__content__images__right__text">
                    <div class="main__content__images__right__img2" src="" alt=""></div>
                    <!-- <p class="main__content__images__right__text main__content__gradient">врачи</p> -->
                </div>
            </div>

            <div class="main__content__text">
                <h1 class="main__content__text__topic">Что Вас интересует сегодня?</h1>

                <p class="main__content__text__description">
                    Здесь Вы найдете домашний<br />
                    персонал, который поможет Вам<br />
                    организовать уют и порядок в доме!
                </p>
            </div>
        </div>

        <div class="main__background"></div>

    </div>
</template>
<script>
    export default {
        name: "MainComponent",
    }
</script>

<style lang="scss" scoped src="./MainComponent.scss">
</style>