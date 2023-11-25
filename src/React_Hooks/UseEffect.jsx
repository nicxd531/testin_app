import React, {useState, useEffect} from 'react'


function UseEffect() {
 const  [resourceType, setResourseType]=useState("")
 const  [items, setItems]=useState("")
 const  [windowWidth, setWindowWidth]=useState(window.innerWidth)
 const handleResize = () =>{
  setWindowWidth(window.innerWidth)
 }
 useEffect(( )=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      console.log(items)
 },[resourceType])
 useEffect(()=>{
  window.addEventListener("resize",handleResize)
 },[])
  return (
    <section className='d-flex align-items-center my-3 vh-100 flex-column'>
      <div>
        <h3>{windowWidth}</h3>
        <button className='btn btn-sm btn-success' onClick={()=>setResourseType("posts")}>Post</button>
        <button className='btn btn-sm btn-danger mx-3' onClick={()=>setResourseType("users")}>Users</button>
        <button className='btn btn-sm btn-info' onClick={()=>setResourseType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items && items.map(item => {
        return <h5>{JSON.stringify(item)}</h5>
      })}
    </section>
  )
}

export default UseEffect