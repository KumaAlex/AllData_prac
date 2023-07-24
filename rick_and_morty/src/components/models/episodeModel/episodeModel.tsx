import axios from "axios";
import store from "@/store/store";

type info = {
    count: number;
    pages: number;
    next ? : string;
    prev ? : string;
}
type results = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: Array < string > ;
    url: string;
    created: Date;
}

export default class episodeModel {
    private info ? : info;
    private results ? : results;

    constructor(data ? : {
        info: info,
        results: results
    }) {
        if (data) {
            this.info = data.info;
            this.results = data.results;
        }
    }

    getName() {
        if (this.results) return this.results.name;
    }

    getMaxPages() {
        if (this.info) return this.info.pages;
    }

    async getNameByUrl(url: string) {
        try {
            const response = await axios.get(url);
            const res: [number, string] = [response.data.id, response.data.name];
            return ([response.data.id, response.data.name]);
        } catch (error) {
            console.log(error);
        }
    }
    async getData(id: number) {
        try {
            const response = await axios.get(
                `${store.state.episode}${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}