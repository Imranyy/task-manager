import { Container } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {collection, addDoc } from 'firebase/firestore';
import {db} from './../assest/fireConfig';
import { TextField } from '@mui/material';
import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel  } from '@mui/material';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';


const Form=()=>{
  
  const todoCollection=collection(db,"posts")
  const navigate= useNavigate();
  //states
   const [date,setDate] =useState('')
   const [task1,setTask1] =useState('')
   const [task2,setTask2] =useState('')
   const [task3,setTask3] =useState('')
   
   
    

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
  

    const [title,setTitle]=useState('');
    const[details,setDetails]=useState('');
    const [titleError,setTitleError]=useState(false);
    const[detailsError,setDetailsError]=useState(false);
    const [category,setCategory]=useState('todos')
    const handleSubmit=(e)=>{
      e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
      if(title===''){
        setTitleError(true)
      }
      if(details===''){
        setDetailsError(true)
      }
      if(title && details){
        console.log(title,details,category)
        
      }
    }
  
     return(
       <Container style={{marginTop:'90px'}}>
      
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <TextField
        onChange={(e)=>setTitle(e.target.value)}
        label='Note title'
        color='secondary'
        fullWidth
        style={{marginBottom:'20px'}}
        error={titleError}
        />
        <TextField
        onChange={(e)=>setDetails(e.target.value)}
        label='Details'
        color='secondary'
        multiline
        rows={5}
        fullWidth
        error={detailsError}
        />
        <FormControl>
          <FormLabel>Categories</FormLabel>
        <RadioGroup style={{marginLeft:'-70%'}} value={category} onChange={(e)=>setCategory(e.target.value)}>
          <FormControlLabel value='todos' control={<Radio color='secondary'/>} label='Todo'/>
          <FormControlLabel value='work' control={<Radio color='secondary'/>} label='Work'/>
          <FormControlLabel value='reminders' control={<Radio color='secondary'/>} label='Reminder'/>
        </RadioGroup>
        </FormControl>
        <Button type='submit' variant='contained' color='secondary'endIcon={<KeyboardArrowRightOutlined/>} style={{marginTop:'10px'}}>Submit</Button>
        </form>
        <form onSubmit={addTodo} noValidate autoComplete='off'>
        <input type='text'  placeholder='Enter Date' value={date} onChange={(e)=>setDate(e.target.value)} required/>
        <input type="text" placeholder='Task 1' value={task1} onChange={(e)=>setTask1(e.target.value)} required/>
        <input type='text' placeholder='Task 2' value={task2} onChange={(e)=>setTask2(e.target.value)} required/>
        <input type='text' placeholder='Task 3' value={task3} onChange={(e)=>setTask3(e.target.value)} required/>
        <button style={{ border:'none', cursor:'pointer'}}>Commit</button>
        </form>
  
       </Container>
     )}
export default Form;
