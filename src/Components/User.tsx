import { Typography } from "@mui/material";
import { UserTypes } from "../Types/userForm.interface"
import React, { FC } from "react"



const UserItem: FC<UserTypes> = ({ name, username, phone, email }) => {
   
    return (
        <ul>
            <li>{name}</li>
            <li>{username}</li>
            <li>{phone}</li>
            <li>{email}</li>
        </ul>
    )
}
export default UserItem;
