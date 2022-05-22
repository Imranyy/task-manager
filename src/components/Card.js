import { DeleteOutlined } from '@mui/icons-material';
import {Card, CardHeader, CardContent, Typography,IconButton,Container,Avatar} from '@mui/material';



const Cardnote=({post, handleDelete})=>{
    return(
        <Container>
        <Card elevation={1}> 
            <CardHeader 
            avatar={<Avatar style={{backgoungColor:'#fff3e0', color:'white'}}>
                {post.category[0].toUpperCase()}
            </Avatar>
            }
            action={<IconButton onClick={()=>handleDelete(post.id)}><DeleteOutlined color='secondary'/></IconButton>}
            title={post.date}
            subheader={post.task1}
            />
           <CardContent>
            <Typography variant='body2' color='textSecondary'>{post.task2}</Typography>
            <Typography variant='body2' color='textSecondary'>{post.task3}</Typography>
           </CardContent>
        </Card>
        </Container>
    )
}
export default Cardnote;