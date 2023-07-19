import axios from 'axios'

export default class characterModel {
    constructor(data = {}) {
        this.info = data.info;
        this.results = data.results;
    }
    async getNameByUrl(url) {
        try {
            const response = await axios.get(url);
            return([response.data.id, response.data.name]);
        } catch (error) {
            console.log(error);
        }
    }
    async getData(id) {
        try {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/location/${id}`);
            return {locData: response.data, maxCnt: response.data.residents.length};
        } catch (error) {
            console.log(error);
        }
    }
}