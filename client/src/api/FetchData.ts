import axios from 'axios';

export class FetchData {
    static async get() {
        return await axios.get('http://localhost:8080/api/v1/movies');
    }
}