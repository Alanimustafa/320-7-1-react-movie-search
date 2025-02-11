//Importing AXIOS
import axios from 'axios';

//Importing Hooks from React
import { useState, useEffect } from 'react'

// Importing Components 
import Form from './Components/Form';
import MovieDisplay from './Components/MovieDisplay';
import './App.css'



function App() {
  // The API constant
  const apiKey = '34e0f3ce';

  
  // const [formData, setformData] = useState({searchTerm: ""});

  // Create the movie state
  const [movie, setMovie] = useState (null);


  async function getMovie (searchTerm) {
    const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
    try {
      // Create a variable to store the response
      let res = await axios.get(API_URL);

      setMovie(res)

      console.log(res);

    } catch (error) {
      console.error(error);
    }
  }


  useEffect(()=>{
    getMovie("Mortal Kombat")
  },[])
  return (
    <>
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </>
  )
}

export default App
