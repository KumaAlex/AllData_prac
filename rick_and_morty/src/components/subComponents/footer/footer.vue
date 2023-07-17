<template lang="">
    <div class="footer">
        <div class="footer__counter">
            <div class="footer__counter-item">
                CHARACTERS: {{ characters }}
            </div>
            <div class="footer__counter-item">
                LOCATIONS: {{ locations }}
            </div>
            <div class="footer__counter-item">
                EPISODES: {{ episodes }}
            </div>
        </div>

        <div class="footer__status">
            STATUS
        </div>

        <div class="footer__rights">
            <span class="footer__rights-logo">❮❯</span> by <span class="footer__rights-name">Alexandr</span> 2023
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'footer-comp',
        data() {
            return {
                characters: 0,
                locations: 0,
                episodes: 0,
            }
        },
        methods: {
            async getCharCnt() {
                try {
                    const response = await axios.get('https://rickandmortyapi.com/api/character');
                    this.characters = response.data.info.count;
                } catch (error) {
                    console.log(error);
                }
            },
            async getlocCnt() {
                try {
                    const response = await axios.get('https://rickandmortyapi.com/api/location');
                    this.locations = response.data.info.count;
                } catch (error) {
                    console.log(error);
                }
            },
            async getEpisCnt() {
                try {
                    const response = await axios.get('https://rickandmortyapi.com/api/episode');
                    this.episodes = response.data.info.count;
                } catch (error) {
                    console.log(error);
                }
            },
        },
        mounted() {
            this.getCharCnt();
            this.getEpisCnt();
            this.getlocCnt();
        }
    }
</script>
<style lang="scss" scoped src="./footer.scss">
</style>