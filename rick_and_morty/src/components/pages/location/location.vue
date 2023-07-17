<template lang="">
    <div class="location">
        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="location__pagination">
        </paginationComp>

        <div class="location__list">

            <div v-for="(res, index) in results" :key="index" class="location__list-item">
                <locCard :data='res' />
            </div>

        </div>

        <paginationComp @changePage="changePage" :currentPage="currentPage" :maxPages="info.pages"
            class="location__pagination">
        </paginationComp>
    </div>
</template>
<script>
    import axios from 'axios'
    import locCard from '@/components/subComponents/loc-card/loc-card'
    import paginationComp from '@/components/subComponents/pagination/pagination.vue'
    export default {
        name: "locationPage",
        components: {
            locCard,
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
                    const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
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
<style lang="scss" scoped src="./location.scss">
</style>