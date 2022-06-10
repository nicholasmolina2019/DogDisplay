import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Doggie from './components/DogDisplay';

function App() {


const [dog, setDogs]= React.useState(null);

const getDogs = async() => {

const response = await fetchh(
  `https://dog.ceo/api/breeds/image/random `
);
  const data = await response.json();
  setDogs(data);

};
useEffect(() => {
  getDogs();
})



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
