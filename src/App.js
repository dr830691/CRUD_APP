
import './App.css';
import NavBar from './Components/NavBar.jsx';
import CodeForInterview  from './Components/CodeForInterview.jsx';
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
    <switch>
    <Route  exact path="/"component={CodeForInterview}/>
    
    <Route  exact path="/all"component={AllUsers}/>
    
    <Route  exact path="/add"component={AddUser}/>
     <Route  component={NotFound}/>
     
     </switch>
    </BrowserRouter>
</>
  );
}

export default App;
