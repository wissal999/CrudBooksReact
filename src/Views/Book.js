import React, { useState } from 'react'
import AddBook from '../Components/AddBook'
import EditBook from '../Components/EditBook'
import ListeBook from '../Components/ListeBook'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function Book() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

 
  
const [books,setBooks]=useState([{id:1,name:"book 1",actor:"actor 1",category:"cat 1"},{id:2,name:"book 2",actor:"actor 2",category:"cat1"},{id:3,name:"book 3",actor:"actor 3",category:"cat 3"},{id:4,name:"book 4",actor:"actor 4",category:"cat 4"}])
const [idtoupdate,setidtoupdate]=useState(null);
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:20}}>
    <div style={{margin:'0px auto'}}>

        <ListeBook setshow={setShow1} setidtoupdate={setidtoupdate} books={books} setbooks={setBooks}/></div>
        <p className='hover' style={{padding:'5px',border:'1px solid black',borderRadius:'8px',width:'200px',marginLeft:'760px'}}  onClick={()=>{setShow(true);console.log(show)}}>Ajout Livre</p>
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add book</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddBook setshow={setShow} books={books} setbooks={setBooks}/></Modal.Body>
     
      </Modal>
      <Modal show={show1} onHide={()=>setShow1(false)}>



        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditBook setshow={setShow1} books={books} setbooks={setBooks} idtoupdate={idtoupdate}/>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default Book