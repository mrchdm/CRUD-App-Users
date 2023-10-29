import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserList from '../Screens/UserList';
import AddEditUser from '../Screens/AddEditUser';
import UserStore from "../Store/user-store";
import { observer } from 'mobx-react-lite';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = observer(()=> {


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={UserStore.navValue} onChange={UserStore.NavhandleChange} aria-label="basic tabs example">
          <Tab label="User List" {...a11yProps(0)} />
          <Tab label="Add user" {...a11yProps(1)} />
  
        </Tabs>
      </Box>
      <CustomTabPanel value={UserStore.navValue} index={0}>
      <UserList/>
      </CustomTabPanel>
      <CustomTabPanel value={UserStore.navValue} index={1}>
      <AddEditUser/>
      </CustomTabPanel>

    </Box>
  );
})
export default BasicTabs;