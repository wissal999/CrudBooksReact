import React, { useState } from 'react'
import { addbook } from '../Service/BookService';

function AddBook(props) {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const [name,setName]=useState('');
    const [actor,setActor]=useState('');
    const [category,setCategory]=useState('');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>

Name:<input onChange={(e)=>setName(e.target.value)}/>
actor:<input onChange={(e)=>setActor(e.target.value)}/>
category:<input onChange={(e)=>setCategory(e.target.value)}/>
<p style={{border:'1px solid black',width:'95px',marginTop:'50px',marginLeft:'190px',padding:'10px',borderRadius:'5px'}} className='hover' onClick={()=>{addbook({id:makeid(5),name:name,actor:actor,category:category},props.books,props.setbooks);props.setshow(false)}}>Add Book</p>
    </div>
  )
}

export default AddBook