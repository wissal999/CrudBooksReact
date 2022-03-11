import React, { useState } from 'react'
import { editbook } from '../Service/BookService';

function EditBook(props) {
    const [name,setName]=useState('');
    const [actor,setActor]=useState('');
    const [category,setCategory]=useState('');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
       <input onChange={(e)=>setName(e.target.value)}/>
<input onChange={(e)=>setActor(e.target.value)}/>
<input onChange={(e)=>setCategory(e.target.value)}/>
<p style={{border:'1px solid black',width:'95px',marginTop:'50px',marginLeft:'190px',padding:'10px',borderRadius:'5px'}} className="hover" onClick={()=>{editbook({id:props.idtoupdate,name,actor:actor,category:category},props.books,props.setbooks,props.idtoupdate);props.setshow(false)}}>Edit Book</p>
    
    
    </div>
  )
}

export default EditBook