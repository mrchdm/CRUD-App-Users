import { FC } from "react"
import { Typography } from "@mui/material";
import UserStore from "../Store/user-store";
import UserItem from "./User";
import { UserTypes } from "../Types/userForm.interface"
import Button from '@mui/material/Button';

const UserList: FC = () => {


    return (
        <>
            <Typography style={{ textAlign: 'center' }} variant="h4" component="h2">Список пользователей</Typography>

            {UserStore.users.map((user) =>
                <ul>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.phone}</li>
                    <li>{user.email}</li>
                </ul>

            )}
            <Button variant="contained" onClick={() => { console.log(UserStore.users) }}>пользователь</Button>

        </>
    )
}
export default UserList;
