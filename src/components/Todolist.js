import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from './../assest/fireConfig';
const Todolist=()=>{
    const [posts,setPosts]= useState([]);
   const todoCollection=collection(db,"posts")
useEffect(()=>{
     /*fetch('http://localhost:5000/posts')
     .then(res=>{
        return res.json();
     })
     .then(data=>{
        setPosts(data)
     });*/
 const getTodo=async()=>{
const data =await getDocs(todoCollection);
//console.log(data)
setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
 }
getTodo();
},[])


    return(
        <div>
           <Link to='/'><button className='btn1' style={{backgroundColor:'#282c34',color:'white',fontFamily:'cursive',margin:'0 5% 0 85%'}}>Back</button></Link>
     {posts.map((post)=>{
        return(
         <div className='list'key={post.id}> {""}
         <p>{post.date}</p>
         <p>{post.task1}</p>
         <p>{post.task2}</p>
         <p>{post.task3}</p>
         </div>
        )
     })} 
        </div>
    )
}
export default Todolist;