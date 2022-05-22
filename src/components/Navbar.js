import { AppBar,Toolbar,Typography, Button, ButtonGroup } from "@mui/material";
import { AddCircleOutlineOutlined, Fingerprint, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';





const Navbar=()=>{
  const navItem=[
    {
      text:<Typography color='secondary'>Tasks</Typography>,
      icon:<SubjectOutlined color='secondary' />,
      path:'/'
    },
    {
      text:<Typography color='secondary'>Add Task</Typography>,
      icon:<AddCircleOutlineOutlined color='secondary' />,
      path:'/createList'
    },
    {
      text:<Typography color='secondary'>Add Task</Typography>,
      icon:<Fingerprint color='secondary' />
    }
  ]
  const navigate=useNavigate();
  const location=useLocation();
 
  
  
    return(
    <div>
     <AppBar
     color="primary"
     >
        <Toolbar>
        <Typography style={{flexGrow:'1'}}>
            {Date().toString()}
          </Typography>
          
          <Typography>
                {navItem.map(item=>(
                  <ButtonGroup
                  color='secondary'
                   key={item.text}
                    onClick={()=>navigate(item.path)}
                    className={location.pathname === item.path ? 'active' : null}>
                    <Button>{item.icon}</Button>
                  </ButtonGroup>
                ))}
              </Typography>
        </Toolbar>
     </AppBar>
    </div>
    )
}
export default Navbar;