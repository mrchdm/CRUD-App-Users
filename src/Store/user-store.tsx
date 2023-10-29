import { action, computed, makeAutoObservable, makeObservable, observable, observe } from 'mobx'
import { SubmitHandler } from 'react-hook-form'
import User from '../Components/User'
import { UserTypes } from "../Types/userForm.interface"



class UsersStore {
    users: any[] = []


    constructor() {
        makeAutoObservable(this)
    }
    // fetchUsers = () => {
    //     return this.users
    // }


    addUser(user: object) {
        this.users.push(user)
    }

    removeUser(username: string) {
        this.users = this.users.filter(user => user !== user)
    }

    // addUser({name, username,phone,email}:UserTypes) {
    //     const newUser = User.create({
    //       name,
    //       username,
    //       phone,
    //       email
    //     });
    //     this.users.push(newUser);
    //   }
}

export default new UsersStore();