<template lang="">
    <div class="character">

        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="character__pagination">
        </paginationComp>

        <div class="character__list">

            <div v-for="(res, index) in results" :key="index" class="character__list-item">
                <charCard :data='res' />
            </div>

        </div>

        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="character__pagination">
        </paginationComp>

    </div>


</template>
<script>
    import charCard from '@/components/subComponents/char-card/char-card.vue'
    import paginationComp from '@/components/subComponents/pagination/pagination'
    import axios from 'axios'

    export default {
        name: 'characterPage',
        components: {
            charCard,
            paginationComp,
        },
        data() {
            return {
                info: {},
                results: {},
                currentPage: 1,
            }
        },
        methods: {
            async getDataERROR(page = 0) { // TODO: check 
                await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
                    .then(response => {
                        this.info = response.data.info;
                        this.results = response.data.results;
                    })
                    .catch(error => console.log(error));
            },
            async getData(page = 0) {
                try {
                    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
                    this.info = response.data.info;
                    this.results = response.data.results;
                } catch (error) {
                    console.log(error);
                }
            },
            changePage(newPage) {
                this.getData(newPage);
                this.currentPage = newPage;
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="scss" scoped src="./character.scss">
</style>