import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [id,setId] = useState();
const [move,setMoves] = useState();
const [name,setName] = useState();


useEffect( () =>{
  async function getData(){
    const a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setName(a.data.name)
    setMoves(a.data.moves.length);
  }
  getData();
}  
);


  return (
    <>
    <h1>You have choosen number {id}</h1>
    <h1 >Name:{name}</h1>
    <h1>Moves:{move}</h1>
      <select name="" id="" onChange={
        (event) =>{
          setId(event.target.value);
          }}>
        <option value="1" >1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="25">25</option>
      </select>
    </>
  );
}

export default App;
