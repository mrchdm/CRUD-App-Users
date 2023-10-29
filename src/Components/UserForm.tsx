import React, { FC } from "react"
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { UserTypes } from "../Types/userForm.interface"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Stack} from "@mui/material";
import UserStore from "../Store/user-store";
import UsersService from "../API/UsersService";
import { observer } from "mobx-react-lite";
import { useEffect } from 'react';

type UserProps = {
  users: object[]
}

const UserForm = observer(() => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control, } = useForm<UserTypes>({})


  const onSubmit: SubmitHandler<UserTypes> = (data) => {
   
    const user = {
      name: data.name,
      username: data.username,
      phone: data.phone,
      email: data.email
    }
    return UserStore.addUser(user)    
  }

  return (
    <>
    <h1>{}</h1>
      <Typography style={{ textAlign: 'center' }} variant="h4" component="h2">Введите данные пользователя</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <TextField {...register('name', { required: 'Имя обязательно' })} type="text" placeholder='Name' id="name" label="Your name" variant="outlined" />
          {errors?.name && (<div style={{ color: 'red' }}>{errors.name.message}</div>)}

          <TextField {...register('username', { required: 'Имя пользователя обязательно' })} type="text" placeholder='UserName' id="username" label=" Username" variant="outlined" />
          {errors?.username && (<div style={{ color: 'red' }}>{errors.username.message}</div>)}

          <TextField {...register('phone')} type="text" placeholder='phone' id="phone" label=" phone" variant="outlined" />
          {errors?.phone && (<div style={{ color: 'red' }}>{errors.phone.message}</div>)}

          <TextField {...register('email', {
            pattern: {
              value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
              message: 'Пожалуйста введите валидный эмайл'
            }
          })} type="text" placeholder='Email' variant="outlined" label="email" />
          {errors?.email && (<div style={{ color: 'red' }}>{errors.email.message}</div>)}

          <Button variant="contained" type="submit">Send</Button>
        </Grid>
      </form>
    </>
  )
})

export default UserForm;




