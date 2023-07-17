<template lang="">
    <div class="char-card-detail">

        <h1>PODROBNIE DETALI CHARACTERA</h1>


        <charCard class="char-card-detail__info__card" :data='characterData' />


        <div class="char-card-detail__info__episodes">

            {{ countShowedEpisodes }} / {{ maxEpisodes }}

            <button v-show="maxEpisodes > countShowedEpisodes"
                v-on:click="increasecountShowedEpisodes">show more</button>

            <div class="char-card-detail__info__episodes-list">
                <div v-for="(item, index) in episodeList" :key="index">
                    <router-link class="char-card-detail__info__episodes-list__router" :to="{path: `/episode/${item[0]}`}">{{item[0]}}: "{{ item[1] }}"</router-link>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    // import imageTool from '@/components/common-tool/image/image'
    import axios from 'axios'
    import charCard from '@/components/subComponents/char-card/char-card'
    export default {
        name: 'char-card-detail',
        components: {
            charCard,
        },
        data() {
            return {
                characterData: {},
                countShowedEpisodes: 0,
                episodeList: [],
                maxEpisodes: 0,
            }
        },
        methods: {
            async getData() {
                try {
                    const response = await axios.get(
                        `https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
                    this.characterData = response.data;
                    this.maxEpisodes = response.data.episode.length;   
                } catch (error) {
                    console.log(error);
                }
            },
            async getEpisodeName(url) {
                try {
                    const response = await axios.get(url);
                    this.episodeList.push([response.data.id, response.data.name]);
                } catch (error) {
                    console.log(error);
                }
            },
            increasecountShowedEpisodes() {
                this.countShowedEpisodes += 5;
                if (this.countShowedEpisodes >= this.characterData.episode.length) {
                    this.countShowedEpisodes = this.characterData.episode.length;
                }
            }
        },
        watch: {
            countShowedEpisodes: function (newC, oldC) {
                [...this.characterData.episode].slice(oldC, newC).forEach(
                    url => {
                        this.getEpisodeName(url);
                    })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="scss" scoped src="./char-card-detail.scss">
</style>