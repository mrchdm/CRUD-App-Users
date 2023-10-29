import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import UserForm from './Components/UserForm';
import UserList from './Components/UsersList';
import UsersStore from './Store/user-store';
function App() {

  return (
    <div className="App">
<UserForm/>
<UserList/>
    </div>
  );
}

export default App;
