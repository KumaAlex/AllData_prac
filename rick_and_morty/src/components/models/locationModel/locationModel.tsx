import axios from 'axios'
import store from '@/store/store';

type info = {
    count: number;
    pages: number;
    next ? : string;
    prev ? : string;
}
type results = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Array < string > ;
    url: string;
    created: Date;
}
export default class locationModel {
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

    setResults(results: results) {
        this.results = results;
    }

    getResults() {
        if (this.results) {
            return this.results;
        }
    }

    getInfo() {
        if (this.info) return this.info;
    }

    async getNameByUrl(url: string) {
        try {
            const response = await axios.get(url);
            const res: [number, string] = [response.data.id, response.data.name];
            return (res);
        } catch (error) {
            console.log(error);
        }
    }
    async getData(id: string) {
        try {
            const response = await axios.get(
                `${store.state.location}${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}