import React,{useState} from 'react'

export default function Component() {
  const [name,setName]=useState("");
  const [Array,setArray]=useState([]);
  // const Increment=() => {
  //     setCount(count+1);
  // }
  // const HandleChange=(event)=>{
  //     console.log(event);
  // }
  const HandleClick=()=>{
    setArray([...Array,name])
    setName("")
  }
  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={Increment}>Click</button> */}
      <h1>{name}</h1>
      <ul>
        {Array.length && Array.map((value,index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={HandleClick}>Add Name</button>
    </>
  )}