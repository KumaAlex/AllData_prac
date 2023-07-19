<template lang="">
    <div class="epis-detail">
        <h1>PODROBNIE DETALI EPISODA</h1>


        <episCard class="epis-detail__info__card" :data='episodeData' />


        <div class="epis-detail__info__characters">

            {{ countShowedCharacters }} / {{ maxCharacters }}

            <button v-show="maxCharacters > countShowedCharacters" v-on:click="increaseCountShowedCharacters">show more</button>

            <div class="epis-detail__info__characters-list">
                <div v-for="(item, index) in charList" :key="index">
                    <router-link class="epis-detail__info__characters-list__router" :to="{path: `/character/${item[0]}`}">{{item[0]}}: "{{ item[1] }}"</router-link>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import episCard from '@/components/subComponents/epis-card/epis-card'
    export default {
        name: 'epis-card-detail',
        components: {
            episCard,
        },
        data() {
            return {
                episodeData: {},
                countShowedCharacters: 0,
                charList: [],
                maxCharacters: 0,
            }
        },
        methods: {
            async getData() {
                try {
                    const response = await axios.get(
                        `https://rickandmortyapi.com/api/episode/${this.$route.params.id}`);
                    this.episodeData = response.data;
                    this.maxCharacters = response.data.characters.length;
                } catch (error) {
                    console.log(error);
                }
            },
            async getCharacterName(url) {
                try {
                    const response = await axios.get(url);
                    this.charList.push([response.data.id, response.data.name]);
                } catch (error) {
                    console.log(error);
                }
            },
            increaseCountShowedCharacters() {
                if (this.countShowedCharacters+5 >= this.episodeData.characters.length) {
                    this.countShowedCharacters = this.episodeData.characters.length;
                } else {
                    this.countShowedCharacters += 5;
                }
            }
        },
        watch: {
            countShowedCharacters: function (newC, oldC) {
                [...this.episodeData.characters].slice(oldC, newC).forEach(
                    url => {
                        this.getCharacterName(url);
                    })
            }
        },
        created() {
            this.getData();
            setTimeout(this.increaseCountShowedCharacters, 200);
        }
    }
</script>
<style lang="scss" scoped src="./epis-card-detail.scss">

</style>