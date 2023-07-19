<template lang="">
    <div class='loc-detail'>
        <h1>PODROBNIE DETALI EPISODA</h1>


        <locCard class="loc-detail__info__card" :data='locData' />


        <div class="loc-detail__info__characters">

            {{ countShowedCharacters }} / {{ maxCharacters }}

            <button v-show="maxCharacters > countShowedCharacters" v-on:click="increaseCountShowedCharacters">show
                more</button>

            <div class="loc-detail__info__characters-list">
                <div v-for="(item, index) in charList" :key="index">
                    <router-link class="loc-detail__info__characters-list__router"
                        :to="{path: `/character/${item[0]}`}">{{item[0]}}: "{{ item[1] }}"</router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import locCard from '@/components/subComponents/loc-card/loc-card'
    import characterModel from '@/components/models/characterModel/characterModel'
    import locationModel from '@/components/models/locationModel//locationModel'
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
                const data = new locationModel();
                const res = await data.getData(`/${this.$route.params.id}`);
                this.locData = res.locData;
                this.maxCharacters = res.maxCnt;
            },
            async getCharacterName(url) {
                const char = new characterModel();
                const name = await char.getNameByUrl(url);
                this.charList.push(name);
            },
            increaseCountShowedCharacters() {
                if (this.countShowedCharacters + 5 >= this.maxCharacters) {
                    this.countShowedCharacters = this.maxCharacters;
                } else {
                    this.countShowedCharacters += 5;
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
        created() {
            this.getData();
            setTimeout(this.increaseCountShowedCharacters, 200);
        }
    }
</script>
<style lang="scss" scoped src="./loc-card-detail.scss">

</style>