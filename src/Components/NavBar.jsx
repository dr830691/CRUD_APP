import {AppBar,Toolbar,makeStyles} from '@material-ui/core'; 
import {NavLink } from 'react-router-dom';
const useStyle = makeStyles({
  header:{
    background:" #000080"
    
  },
  tabs: {
    color:"#ffffff",
    textDecoration:'none',
    marginRight:20 ,
    fontSize:30,
  }
});
const NavBar = ()=> {
    const classes =useStyle();
  return (
  
    <AppBar className={classes.header} position="static" >
      <Toolbar>
        <NavLink to="./" exact className={classes.tabs}> Crud App </NavLink>
        <NavLink to="all" exact className={classes.tabs}> ALL Users </NavLink>
        <NavLink to="add" exact className={classes.tabs}> Add User </NavLink>
     </Toolbar>
    </AppBar>

     
  );
}

export default NavBar;
