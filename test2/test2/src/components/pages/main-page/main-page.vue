<template lang="">
    <div class="main">
        <headerTemplate />
        <search-info />
        <scrollImages />
        <serviceList />
        <serviceFrame />
        <botTable />
        <footerTemplate />
    </div>
</template>
<script>
    import headerTemplate from '@/components/templates/header/header.vue';
    import searchInfo from '@/components/templates/search-info/search-info.vue';
    import scrollImages from '@/components/templates/scroll-images/scroll-images.vue';
    import serviceList from '@/components/templates/service-list/service-list.vue';
    import serviceFrame from '@/components/templates/service-frame/service-frame.vue';
    import botTable from '@/components/templates/bot-table/bot-table.vue';
    import footerTemplate from '@/components/templates/footer/footer.vue';

    export default {
        name: 'main-page',
        components: {
            headerTemplate,
            searchInfo,
            scrollImages,
            serviceList,
            serviceFrame,
            botTable,
            footerTemplate,
        },
    }
</script>
<style lang="scss" scoped src="./main-page.scss">
</style>