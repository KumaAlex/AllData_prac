<template>
    <div class="main">
        <div class="main__header">
            <router-link class="main__header__router" to="/">
                <div class="main__header__left">
                    <img class="main__header__left-img" src="@/assets/desktop/mnenadologo1.png" alt="">
                    <p class="main__header__left-text">ваш личный помощник</p>
                </div>
            </router-link>
            <div class="main__header__right">
                <router-link class="main__header__router" to="/main"><button class="main__header__right__btn">ВХОД</button></router-link>
            </div>
        </div>

        <div class="main__content">
            <div class="main__content__images">
                <div class="main__content__images__left">
                    <img class="main__content__images__left-img1" src="@/assets/desktop/FrameHouseLogo.png" alt="">
                    <p class="main__content__images__left-text main__content-gradient">домашние<br/>мастера</p>
                </div>
                <div class="main__content__images__right">
                    <img class="main__content__images__right-img2" src="@/assets/desktop/FramePillsLogo.png" alt="">
                    <p class="main__content__images__right-text main__content-gradient">врачи</p>
                </div>
            </div>

            <div class="main__content__text">
                <h1 class="main__content__text-topic">Что Вас интересует сегодня?</h1>    
                <p class="main__content__text-description">
                    Здесь Вы найдете домашний<br/> 
                    персонал, который поможет Вам<br/> 
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
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped src="./MainComponent.scss">
</style>