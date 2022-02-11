import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import UserCard from './Usercard';





const Sidenav = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
   

    setState({ ...state, "left": open });
  };

  const {loggedf} = props
  const {logdata}= props
  

  
  const SidebarContent = () => (
    <div
      className="left"
      style={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
  ><UserCard logdata={logdata}/>
      <Login loggedf={loggedf}/>
    </div>
  );


  return (
    <div>

        <React.Fragment key={"left"}>
          <IconButton id="navbutton" aria-label="menu" onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
          <Drawer
            
            open={state["left"]}
            onClose={toggleDrawer(false)}
          >
            {SidebarContent()}
          </Drawer>
        </React.Fragment>

    </div>
  );
}

export default Sidenav