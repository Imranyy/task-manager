import { Link } from 'react-router-dom';
import Form from './form';
const Home=()=>{
    return(
   <>
   <Link to='/todolist'><button className='btn' style={{backgroundColor:'#282c34',color:'white',fontFamily:'cursive',margin:'0 5% 0 85%'}}>View List</button></Link>
   <Form/>
   </>
    )
}
export default Home;