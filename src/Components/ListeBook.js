import React from 'react'
import { deletedbook } from '../Service/BookService'

function ListeBook(props) {
  return (
    <div>
        
<table style={{border:'1px solid black',marginTop:'200px'}}>
  <thead  style={{backgroundColor: "lightblue",color: "white"}}><tr><th>Name</th>
<th>Actor</th>
<th>Category</th>
<th>Edit</th>
<th>Delete</th></tr>
</thead>

{props.books.map((Book)=><tr>
<td>{Book.name}</td> 
<td>{Book.actor}</td> 
<td>{Book.category}</td> 
<td className='hover' onClick={()=>{props.setidtoupdate(Book.id);props.setshow(true)}}>edit</td> 
<td className='hover' onClick={()=>deletedbook(props.books,props.setbooks,Book.id)}>Delete</td> 
</tr>)}

</table>


    </div>
  )
}

export default ListeBook