import axios from 'axios'
import store from '@/store/store';
export default class locationModel {
    constructor (data = {}) {
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
            let url = store.state.location;
            const response = await axios.get(
                `${url}${id}`);
            console.log(response.data);
            if (response.data.residents) {
                return {locData: response.data, maxCnt: response.data.residents.length};
            } else {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
}