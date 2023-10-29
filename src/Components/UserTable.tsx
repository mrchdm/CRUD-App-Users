import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { observer } from 'mobx-react-lite';
import UserStore from "../Store/user-store";
import { Button } from '@mui/material';



const UserTable = observer(()=> {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
              
           
        </TableRow>
        </TableHead>
        <TableBody>
          {UserStore.users.map((user) => (
  
            <TableRow
              key={user.username}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.name}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{  <Button onClick={()=>UserStore.preUserUpdate(user)}>Edit</Button>}</TableCell>
              <TableCell align="right">{<Button onClick={()=> UserStore.removeUser(user.username)}>X</Button>}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
  );
})

export default UserTable;

