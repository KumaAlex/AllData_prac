<template lang="">
    <div class="pagination">
        <btn v-on:click="changePage(1)" class="pagination__btn pagination_btn_edge">В начало: 1</btn>
        <btn v-on:click="changePage(currentPage-1)" class="pagination__btn">{{ "<" }}</btn>
        <div class="pagination__btn">{{ currentPage }}</div>
        <btn v-on:click="changePage(currentPage+1)" class="pagination__btn">{{ ">" }}</btn>
        <btn v-on:click="changePage(maxPages)" class="pagination__btn pagination_btn_edge">В конец:
            {{ maxPages }}</btn>
    </div>
</template>


<script>
    import btn from '@/components/common-tool/btn/btn'
    export default {
        name: "pagination-comp",
        components: {
            btn,
        },
        props: {
            currentPage: {
                type: Number,
            },
            maxPages: {
                type: Number,
            },
        },
        methods: {
            changePage(newPage) {
                if (newPage >= 1 && newPage <= this.maxPages) {
                    this.$emit('changePage', newPage)
                }
            }
        }
    }
</script>
<style lang="scss" scoped src="./pagination.scss">

</style>