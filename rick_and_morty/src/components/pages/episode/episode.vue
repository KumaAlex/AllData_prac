<template lang="">
    <div class="episode">
        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="episode__pagination">
        </paginationComp>

        <div class="episode__list">

            <div v-for="(res, index) in results" :key="index" class="episode__list-item">
                <episCard :data='res' />
            </div>

        </div>

        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="episode__pagination">
        </paginationComp>
    </div>
</template>
<script>
    import episCard from '@/components/subComponents/epis-card/epis-card.vue'
    import paginationComp from '@/components/subComponents/pagination/pagination'
    import axios from 'axios'

    export default {
        name: "episodePage",
        components: {
            episCard,
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
            async getData(page = 0) {
                try {
                    const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
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
<style lang="scss" scoped src="./episode.scss">
</style>