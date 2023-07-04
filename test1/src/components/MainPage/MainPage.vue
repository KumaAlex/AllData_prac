<template lang="">
    <div class="main">
        <div class="main__header">
            <router-link class="main__header__router" to="/">
                <div class="main__header__logo">
                    <img v-if="mnenadologo" :src="require(`@/assets${mnenadologo}`)" alt="" />
                    <!-- <img class="main__header__logo-img" src="@/assets/desktop/mnenadologo1.png" alt=""> -->
                    <p class="main__header__logo-text">ваш личный помощник</p>
                </div>
            </router-link>
            <div class="main__header__selector">
                <select class="main__header__selector-select" :="selectedOption" @change="changeOption(...$event.target.value)">
                    <option class="main__header__selector-option" value="" selected hidden disabled>ГОРОД ВЫБЕРИ</option>
                    <option class="main__header__selector-option" v-for="option in options" :key="option.title">{{ option.title }}</option>
                </select>
            </div>

            <div class="main__header__search">
                <input class="main__header__search-input" v-model="searchRequest" @keydown.enter="search" type="search" placeholder="ЧТО ВЫ ИЩЕТЕ? Например, заделать дыру в стене">
                <a class="main__header__search-img" @click="search()"><img src="@/assets/main/search.png" alt=""></a>
            </div>

            <div class="main__header__btns">
                <div class="main__header__btns__btn1">
                    <button class="main__header__btns__btn1-button">СТАТЬ СПЕЦИАЛИСТОМ</button>
                </div>

                <div class="main__header__btns__btn2">
                    <button class="main__header__btns__btn2-button">ВХОД</button>
                </div>
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

            <div class="main__content__service">
                <div class="main__content__service__serviceList">
                    <div class="main__content__service__serviceList-service" v-for="(service, index) in cards" :key="index">
                        <div>{{service.value}}</div>
                    </div>
                </div>

                <div v-show="!showServiceList" class="main__content__service__btn">
                    <button class="main__content__service__btn-btn" v-on:click="showServiceList = true">
                        СМОТРЕТЬ ВСЁ
                    </button>
                </div>
                <div v-show="showServiceList" class="main__content__service__btn">
                    <button class="main__content__service__btn-btn" v-on:click="showServiceList = false">
                        СВЕНУТЬ ^
                    </button>
                </div>

                <transition name="main__content__service__fade">
                        <div v-show="showServiceList" class="main__content__service__serviceList">
                            <div class="main__content__service__serviceList-service" v-for="(service, index) in serviceList" :key="index">
                                <div>{{service.value}}</div>
                            </div>
                        </div>
                </transition>

                <div class="main__content__service__frame">
                    <div class="main__content__service__frame__text">
                        <div class="main__content__service__frame__text-txt">
                            {{ textFrame1 }}
                        </div>
                    </div>

                    <div class="main__content__service__frame__cards">
                        <div class="main__content__service__frames__cards-card" v-for="frame in frames" :key="frame.id" >
                            <FrameComp :name='frame.title' :img='frame.img' :text='frame.text'/>
                        </div>
                    </div>
                </div>

                <div class="main__content__service__frame2">
                    <div class="main__content__service__frame2__text">
                        <h3 class="main__content__service__frame2__text-title">
                            {{ titleFrame2 }}
                        </h3>
                        <div class="main__content__service__frame2__text-txt">
                            {{ textFrame2 }}
                        </div>
                    </div>

                    <div class="main__content__service__frame2__cards">
                        <div class="main__content__service__frame2__cards-card" v-for="frame in frames2" :key="frame.id">
                            <Frame2Comp  :img = 'frame.img' :text='frame.text' />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>

        <div class="main__footer">
            <div class="main__footer__table">
                <div class="main__footer__table-col" v-for="col in footerCols" :key="col">
                    <FooterCols :col='col'/>
                </div>
            </div>
            <div class="main__footer__table_rights">
                {{ footerRights }}
            </div>
        </div>
    </div>
</template>
<script>
import card from "@/components/card/card.vue"
import FrameComp from "@/components/Frame/Frame.vue"
import Frame2Comp from "@/components/Frame2/Frame2.vue"
import FooterCols from "@/components/FooterCols/FooterCols.vue"
import axios from "axios"

export default {

    name: "MainPage",
    components:{
        card,
        FrameComp,
        Frame2Comp,
        FooterCols,
    },
    data() {
        return {
            showServiceList: true,
            searchRequest: "", 
            selectedOption: {
                title: ""
            },

            // mnenadologo: "",
            mnenadologo: "",


            options: [],
            cards: [],
            serviceList: [],
            textFrame1: "",
            titleFrame2: "",
            textFrame2: "",
            frames: [],
            frames2: [],
            footerCols: {},
            footerRights: "",
        }
    },
    methods: {
        applyData(allDataResponse) {
            this.mnenadologo = allDataResponse.mnenadologo;
            this.options = allDataResponse.options;
            this.cards = allDataResponse.cards;
            this.serviceList = allDataResponse.serviceList;
            this.textFrame1 = allDataResponse.textFrame1
            this.titleFrame2 = allDataResponse.titleFrame2
            this.textFrame2 = allDataResponse.textFrame2;
            this.frames = allDataResponse.frames;
            this.frames2 = allDataResponse.frames2;
            this.footerCols = allDataResponse.footerCols;
            this.footerRights = allDataResponse.footerRights;

            this.sortOptions();
        },
        sortOptions() {
            this.options.sort((a, b) => this.strCompare(a.title, b.title, true));
        },
        strCompare(s1, s2, sortType) {
            const first = s1.toLowerCase();
            const second = s2.toLowerCase();
            let ans;
            if (first > second) {
                ans = 1;
            } else {
                ans = -1;
            }
            if (!sortType) {
                ans *= -1;
            }
            return ans;     
        },
        search() {
            const request = this.searchRequest.trim()
            if (request !== "") {
                console.log(request);    
            }
            this.searchRequest = "";
        },
        changeOption(option) {
            this.selectedOption = option; 
        }
    },
    async mounted() {
        await axios.get("/fake_data.json")
        .then(response => this.applyData(response.data))
        .catch(error => console.log(error));
    }
}


</script>
<style lang="scss" src="./MainPage.scss" scoped>
</style>