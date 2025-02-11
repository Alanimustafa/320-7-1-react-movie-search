import { useState, useEffect } from 'react'
import Form from './Components/Form';
import MovieDisplay from './Components/MovieDisplay';
import './App.css'

// The API constant
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=34e0f3ce";


function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <Form/>
    <MovieDisplay/>
    </>
  )
}

export default App
