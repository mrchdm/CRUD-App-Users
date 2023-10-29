import { Typography } from "@mui/material";
import UserForm from "../Components/UserForm";




const AddEditUser = () => {

    return (
        <>
            <Typography style={{ textAlign: 'center' }} variant="h4" component="h2">
               Enter User Data
            </Typography>
            <UserForm />
        </>

    )
}
export default AddEditUser;