import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {collection, addDoc } from 'firebase/firestore';
import {db} from './../assest/fireConfig';
const Form=()=>{
  const todoCollection=collection(db,"posts")
  const navigate= useNavigate();
  //states
   const [date,setDate] =useState('')
   const [task1,setTask1] =useState('')
   const [task2,setTask2] =useState('')
   const [task3,setTask3] =useState('')
   //pending
    

   //post data to json server
   const addTodo= async(e)=>{
    e.preventDefault();
      /*fetch('http://localhost:5000/posts',{
       method:'POST',
       headers:{
         'Content-type':'application/json'
       },
       body:JSON.stringify(todo)
     }).then(()=>{
        navigate('/todolist')
     })*/
     await addDoc(todoCollection,{date,task1,task2,task3})
     .then(()=>{
      navigate('/todolist')
   })
    }
  
//submit form
   //const handleSubmit=(e)=>{
    //e.preventDefault();
    //const todo={date,task1,task2,task3}
     //console.log(todo);
    //}
     return(
       <div className='container'>
        <form onSubmit={addTodo}>
        <input type='text'  placeholder='Enter Date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <input type="text" placeholder='Task 1' value={task1} onChange={(e)=>setTask1(e.target.value)} required/>
        <input type='text' placeholder='Task 2' value={task2} onChange={(e)=>setTask2(e.target.value)} required/>
        <input type='text' placeholder='Task 3' value={task3} onChange={(e)=>setTask3(e.target.value)} required/>
        <button style={{ border:'none', cursor:'pointer'}}>Commit</button>
        </form>
      </div>
     )}
export default Form;
