
import './App.css';
import NavBar from './Components/NavBar.jsx';
import HomePage  from './Components/HomePage.jsx';
import AllUsers from './Components/AllUsers.jsx';
import AllUser from './Components/AddUser.jsx';
import AddUser from './Components/AddUser.jsx';
import NotFound from './Components/NotFound.jsx';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



function App() {
  return (
<>
  <BrowserRouter>
    <NavBar />
    <Switch>
    <Route  exact path="/"    component={HomePage}/>
    <Route  exact path="/all" component={AllUsers}/>
    <Route  exact path="/add" component={AddUser}/>
    <Route   component={NotFound} />
    </Switch>
    </BrowserRouter>
</>
  );
}

export default App;
