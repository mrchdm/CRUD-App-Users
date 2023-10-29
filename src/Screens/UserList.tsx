import { TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import UserStore from "../Store/user-store";
import UserTable from "../Components/UserTable";



const UserList = observer(() => {

    return (
        <>
            <Typography style={{ textAlign: 'center' }} variant="h4" component="h2">User List</Typography>
            <TextField
                fullWidth
                type='text'
                id="userSearch"
                placeholder={''}
                label="Search"
                variant="outlined"
                onChange={(e) => UserStore.searchUser(e.target.value)}
                style={{ marginTop: 40, marginBottom: 40 }}
            />
            <UserTable />

        </>
    )
})
export default UserList;
