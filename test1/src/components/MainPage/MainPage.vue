<template lang="">
    <div class="main">
        <div class="main__header">
            <div class="main__header__logo">
                <img :src="require(`@/assets${mnenadologo}`)" alt="" />
                <!-- <img class="main__header__logo-img" src="@/assets/desktop/mnenadologo1.png" alt=""> -->
                <p class="main__header__logo-text">ваш личный помощник</p>
            </div>

            <div class="main__header__selector">
                <select class="main__header__selector-select" v-model="selected" >
                    <option class="main__header__selector-option" v-for="option in options" :key="option.title">{{ option.title }}</option>
                </select>
            </div>

            <div class="main__header__search">
                <input class="main__header__search-input" type="search" placeholder="ЧТО ВЫ ИЩЕТЕ? Например, заделать дыру в стене">
                <img class="main__header__search-img" src="@/assets/main/search.png" alt="">
            </div>

            <div class="main__header__btn1">
                <button class="main__header__btn1-button">СТАТЬ СПЕЦИАЛИСТОМ</button>
            </div>

            <div class="main__header__btn2">
                <button class="main__header__btn2-button">ВХОД</button>
            </div>
        </div>

        <div class="main__content">
            <div class="main__content__image">
                <img class="main__content__image-img" src="@/assets/main/aaa1.png" alt="">
            </div>

            <div class="main__content__cards">
                <div v-for="tabCard in cards" :key="tabCard.id" >
                    <card :value='tabCard.value' :img='tabCard.img' />
                </div>
            </div>

            <div class="main__content__serviceList">
                <div class="main__content__serviceList-service" v-for="(service, index) in serviceList" :key="index">
                    <div>{{service.value}}</div>
                </div>
            </div>
        </div>




        <div class="main__footer">
        </div>
    </div>
</template>
<script>
import card from "@/UI/card.vue"
export default {
    name: "MainPage",
    components:{
        card
    },
    data() {
        return {
            mnenadologo: "/desktop/mnenadologo1.png",
            selected: {
                title: "Almaty"
            },
            options: [
                {
                    title: "Almaty"
                },
                {
                    title: "Astana"
                },
                {
                    title: "Moscow"
                }
            ],
            cards: [
                {
                    id: 1,
                    img: "/main/cards/1.png",
                    value: "Маляр"
                },
                {
                    id: 2,
                    img: "/main/cards/2.png",
                    value: "Няни и сиделки"
                },
                {
                    id: 3,
                    img: "/main/cards/3.png",
                    value: "Сантехник"
                },
                {
                    id: 4,
                    img: "/main/cards/4.png",
                    value: "Электрик"
                },
            ],
            serviceList: [
                {
                    id: 1,
                    img: "/main/cards/1.png",
                    value: "Маляр"
                },
                {
                    id: 2,
                    img: "/main/cards/2.png",
                    value: "Няни и сиделки"
                },
                {
                    id: 3,
                    img: "/main/cards/3.png",
                    value: "Сантехник"
                },
                {
                    id: 4,
                    img: "/main/cards/4.png",
                    value: "Электрик"
                },
                {
                    id: 5,
                    img: "",
                    value: "Мебельщик"
                },
                {
                    id: 6,
                    img: "",
                    value: "Мастер на час"
                },
                {
                    id: 7,
                    img: "",
                    value: "Полы"
                },
                {
                    id: 8,
                    img: "",
                    value: "Повар"
                },
                {
                    id: 9,
                    img: "",
                    value: "Покраска"
                },
                {
                    id: 10,
                    img: "",
                    value: "Потолки"
                },
                {
                    id: 11,
                    img: "",
                    value: "Уборка"
                },
                {
                    id: 12,
                    img: "",
                    value: "Окна и балконы"
                },
                {
                    id: 13,
                    img: "",
                    value: "Плитка и кафель"
                },
                {
                    id: 14,
                    img: "",
                    value: "Дезинфекция"
                },
                {
                    id: 15,
                    img: "",
                    value: "Кровля и крыша"
                },
                {
                    id: 16,
                    img: "",
                    value: "Химчистка"
                },
                {
                    id: 17,
                    img: "",
                    value: "Разнорабочие"
                },
                {
                    id: 18,
                    img: "",
                    value: "Двор и сад"
                },
                {
                    id: 19,
                    img: "",
                    value: "Ремонт под ключ"
                },
                {
                    id: 20,
                    img: "",
                    value: "Бытовая техника"
                },
            ]
        }
    }
}


</script>
<style lang="sass" src="./MainPage.sass" scoped>
</style>