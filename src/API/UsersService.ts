import axios from "axios";

export default class UsersService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response;
    }

}