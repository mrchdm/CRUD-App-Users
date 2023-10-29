import UsersStore from './Store/user-store';
import BasicTabs from './Components/BasicTabs';

function App() {

  UsersStore.fetchUsers()
  return ( <BasicTabs /> );

}

export default App;
