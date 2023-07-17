<template lang="">
    <div class='loc-card-detail'>
        <h1>PODROBNIE DETALI EPISODA</h1>


        <locCard class="loc-card-detail__info__card" :data='locData' />


        <div class="loc-card-detail__info__characters">

            {{ countShowedCharacters }} / {{ maxCharacters }}

            <button v-show="maxCharacters > countShowedCharacters" v-on:click="increaseCountShowedCharacters">show more</button>

            <div class="loc-card-detail__info__characters-list">
                <div v-for="(item, index) in charList" :key="index">
                    <router-link class="loc-card-detail__info__characters-list__router" :to="{path: `/character/${item[0]}`}">{{item[0]}}: "{{ item[1] }}"</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import locCard from '@/components/subComponents/loc-card/loc-card'
    export default {
        name: 'loc-card-detail',
        components: {
            locCard,
        },
        data() {
            return {
                locData: {},
                countShowedCharacters: 0,
                charList: [],
                maxCharacters: 0,
            }
        },
        methods: {
            async getData() {
                try {
                    const response = await axios.get(
                        `https://rickandmortyapi.com/api/location/${this.$route.params.id}`);
                    this.locData = response.data;
                    this.maxCharacters = response.data.residents.length;
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
                this.countShowedCharacters += 5;
                if (this.countShowedCharacters >= this.locData.residents.length) {
                    this.countShowedCharacters = this.locData.residents.length;
                }
            }
        },
        watch: {
            countShowedCharacters: function (newC, oldC) {
                [...this.locData.residents].slice(oldC, newC).forEach(
                    url => {
                        this.getCharacterName(url);
                    })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="scss" scoped src="./loc-card-detail.scss">
    
</style>