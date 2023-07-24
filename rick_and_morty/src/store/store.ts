import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            location: 'https://rickandmortyapi.com/api/location',
            character: "https://rickandmortyapi.com/api/character",
            episode: "https://rickandmortyapi.com/api/episode"
        }
    },
    // getters: {
    //     getLocation() {
    //         return this.location;
    //     },
    //     getCharacter() {
    //         return this.character;
    //     },
    //     getEpisode() {
    //         return this.episode;
    //     }
    // }
})