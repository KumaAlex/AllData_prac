<template lang="">
    <div class="search-info">
        <logo class="search-info__logo" />

        <select class="search-info__selector" :="selectedOption"
            @change="changeOption(...$event.target.value)">
            <option class="search-info__selector__option" value="" selected hidden disabled>Эу ГОРОД ВЫБЕРИ
            </option>
            <option class="search-info__selector__option" v-for="option in options" :key="option.title">
                {{ option.title }}</option>
        </select>

        <search class="search-info__search-input" />

        <div class="search-info__btns">
            <buttonAtom class="search-info__btn-left" />
            <buttonAtom class="search-info___btn-right" />
        </div>

    </div>
</template>
<script>
    import logo from '@/components/atoms/logo/logo.vue';
    import search from '@/components/molecules/search/search.vue';
    import buttonAtom from '@/components/atoms/button/button.vue';
    export default {
        name: "search-info-template",
        components: {
            logo,
            search,
            buttonAtom,
        },
        data() {
            return {
                options: [{
                        id: 1,
                        title: "Алматы"
                    },
                    {
                        id: 2,
                        title: "Астана"
                    },
                    {
                        id: 3,
                        title: "Актау"
                    },
                    {
                        id: 4,
                        title: "Шымкент"
                    },
                    {
                        id: 5,
                        title: "Атырау"
                    },
                    {
                        id: 6,
                        title: "Тараз"
                    }
                ],
                selectedOption: {
                    title: ""
                },
            }
        },
        methods: {
            changeOption(option) {
                this.selectedOption = option;
            },
            sortOptions() {
                this.options.sort((a, b) => this.strCompare(a.title, b.title, true));
            },
            strCompare(s1, s2, sortType) {
                const first = s1.toLowerCase();
                const second = s2.toLowerCase();
                let ans;
                if (first > second) {
                    ans = 1;
                } else {
                    ans = -1;
                }
                if (!sortType) {
                    ans *= -1;
                }
                return ans;
            },
        },
        async mounted() {
            this.sortOptions();
        }
    }
</script>
<style lang="scss" scoped src="./search-info.scss">
</style>