import { Link } from 'react-router-dom';
import { AppBar,Toolbar,Typography,Button } from "@mui/material";

const Navbar=()=>{
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
            <Link to='/'><Button  color='secondary' variant='contained'>Home</Button></Link>
          </Typography>
        </Toolbar>
     </AppBar>
    </div>
    )
}
export default Navbar;