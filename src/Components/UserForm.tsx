import {SubmitHandler, useForm } from 'react-hook-form'
import { UserTypes } from "../Types/userForm.interface"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import UserStore from "../Store/user-store";
import { observer } from "mobx-react-lite";
import { useEffect } from 'react';



const UserForm = observer(() => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
     } = useForm<UserTypes>({})

  const onSubmit: SubmitHandler<UserTypes> = (data) => {
    UserStore.editFormValue 
      ? UserStore.updateUser({ oldUsername: UserStore.editFormValue.username, ...data })
      : UserStore.addUser(data);
    reset();
  }

  useEffect(() => {
    if (UserStore.editFormValue) {
      reset(UserStore.editFormValue);
    }
  }, [UserStore.editFormValue, reset])


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          maxWidth='800px'
          minHeight='360px'
          margin='20px auto'
        >
          <TextField {...register('name', { required: '* Name is required' })} type="text" placeholder='Name' id="name" label=" Name" variant="outlined" />
          {errors?.name && (<div style={{ color: 'red' }}>{errors.name.message}</div>)}

          <TextField {...register('username', { required: '* Username is required' })} type="text" placeholder='UserName' id="username" label=" Username" variant="outlined" />
          {errors?.username && (<div style={{ color: 'red' }}>{errors.username.message}</div>)}

          <TextField {...register('phone')} type="text" placeholder='phone' id="phone" label="Phone" variant="outlined" />
          {errors?.phone && (<div style={{ color: 'red' }}>{errors.phone.message}</div>)}

          <TextField {...register('email', {
            pattern: {
              value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
              message: '*Enter valid email'
            }
          })} type="text" placeholder='Email' variant="outlined" label="Email" />
          {errors?.email && (<div style={{ color: 'red' }}>{errors.email.message}</div>)}

          <Button variant="contained" type="submit">
          { UserStore.editFormValue ? 'Update' : 'Send' }
          </Button>
        </Stack>
      </form>

    </>
  )
})

export default UserForm;




