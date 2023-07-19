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
    import locCard from '@/components/subComponents/loc-card/loc-card'
    import paginationComp from '@/components/subComponents/pagination/pagination.vue'
    import locationModel from '@/components/models/locationModel/locationModel'
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
                page: 0,
            }
        },
        methods: {
            async getData() {
                const data = new locationModel();
                const res = await data.getData(`?page=${this.page}`);
                this.info = res.info;
                this.results = res.results;
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