import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import DogDisplay from './components/DogDisplay';

function App() {


const [dog, setDogs]= useState(null);

const getDog = async() => {

const response = await fetch(
  `https://dog.ceo/api/breeds/image/random`
);
  const data = await response.json();
  console.log(data)
  setDogs(data.message);

};
useEffect(() => {
  getDog();
},[])



  return (
    <div className="App">
      <h1>Random Dog Generator</h1>
      <input type="button" value="Get Random Dog" onClick={getDog}/>
      <DogDisplay dogs={dog}/>
    </div>
  );
}

export default App;
