import { useState, useEffect} from 'react';
import Cardnote from './Card'
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import {db} from '../assest/fireConfig';
import { Container} from '@mui/system';
import { Grid} from '@mui/material';
const Todolist=()=>{
    const [posts,setPosts]= useState([]);
useEffect(()=>{
     /*fetch('http://localhost:5000/posts')
     .then(res=>{
        return res.json();
     })
     .then(data=>{
        setPosts(data)
     });*/
 const getTodo=async()=>{
const todoCollection=collection(db,"posts")
const data =await getDocs(todoCollection);
//console.log(data)
setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
 }
getTodo();
},[])

const handleDelete=async(id)=>{
    const deleteTodo=doc(db,'posts',id);
    await deleteDoc(deleteTodo);
    
    const newPosts=posts.filter(post=>post.id !== id)
    setPosts(newPosts);
}

    return(
        <Container style={{marginTop:'90px'}}>
          <Grid container spacing={3}>
         {posts.map((post)=>(
            <Grid item xs={12} md={6} lg={4}  key={post.id}>
               <Cardnote post={post} handleDelete={handleDelete}/>
            </Grid>
            )
         )} 
         </Grid>
        </Container>
    )
}
export default Todolist;