import { makeAutoObservable } from 'mobx'
import { UserTypes } from "../Types/userForm.interface"


class UserStore {

    users: UserTypes[] = []
    fetchUsersValue: UserTypes[] = []
    editFormValue: UserTypes | null = null
    navValue = 0

    constructor() {
        makeAutoObservable(this)
    }

    addUser(user: UserTypes) {
        this.fetchUsersValue.unshift(user);
        this.users = this.fetchUsersValue;
    }

    removeUser(username: string) {
        this.fetchUsersValue = this.users.filter((user: UserTypes) => user.username !== username)
        this.users = this.fetchUsersValue;
    }

    searchUser(query: string) {
        if (!query) {
            this.users = this.fetchUsersValue
        }
        const filtered =
            this.fetchUsersValue.filter(user => user.username.toLowerCase().includes(query.toLowerCase()))
        this.users = filtered
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.users = [...json]
                this.fetchUsersValue = [...json]
            })
    }

    preUserUpdate(user: UserTypes) {
        this.navValue = 1;
        this.editFormValue = user;
    }

    updateUser({ oldUsername, ...user_data } : UserTypes & { oldUsername: string }) {
        this.fetchUsersValue = this.fetchUsersValue.map((user: UserTypes) => {
            return user.username === oldUsername ? user_data : user;
        });
        this.users = this.fetchUsersValue;
        this.editFormValue = null;
        this.navValue = 0;
    }

    NavhandleChange = (event: React.SyntheticEvent, newValue: number) => {
        this.navValue = newValue;
    };
}

export default new UserStore();
