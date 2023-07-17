<template lang="">
    <div class="search">
        <inputAtom class="search__input" />
        <a class="search__enter-btn"><img src="@/assets/main/search.png" alt=""></a>
    </div>
</template>
<script>
import inputAtom from '@/components/atoms/input/input.vue';
    export default {
        name: 'search-molecule',
        components: {
            inputAtom,
        }
    }
</script>
<style lang="scss" scoped src="./search.scss">
</style>