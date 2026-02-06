import React, { useEffect, useState } from "react"
import {useDebounce} from 'react-use'
import Spinner from "./Spinner.jsx";
import './App.css'
import react from "./assets/react.svg"
import Search from "./Search.jsx";
import MovieCard from './MovieCard.jsx'


const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_OPTIONS = {
  method: 'GET',
  headers : {
    accept : 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [debounce, setDebounce] = useState('')

  useDebounce(() => setDebounce(searchTerm),500,[searchTerm])
  
  const fetchMovies = async (query = '') => {
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(URL)}`:`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint,API_OPTIONS)
      if (!response.ok){
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      if (data.Response === 'False'){
        setErrorMessage(data.Error || "Failed to fetch movies")
        setMovieList([])
        return
        
      }
     setMovieList(data.results || [])

    } catch (error) {
      console.error(error);
      setErrorMessage("Error Fetching Movies. Please try again");
    }
    finally{
      setIsLoading(false)
    }
  }
  useEffect(() => {fetchMovies(debounce);},[debounce])

  return (
    <>
    <div>
      <div className="wrapper">
       <div className="box-border text-white bg-cover ">
        <header className="text-center text-[50px] m-3">
          <h1 >Find <span className="text-red-500 ">Movies</span> You'll Enjoy Without The Hassle</h1> 
        </header>
        <Search searchTerm = {searchTerm} setSearchTerm={setSearchTerm}/>
        <p className="text-center">{ searchTerm == '' ? null : "Looking for \""+searchTerm+"\""}</p> 
        <center className = {`font-google m-7 text-3xl font-medium text-red-600`}>All MOVIES</center>
        <div className="flex justify-center items-center ">
        {isLoading ? (<Spinner/>): errorMessage ? (<p className="text-red-500">{errorMessage}</p>): (<ul className="grid grid-cols-1" >
          {movieList.map((movie) => (<MovieCard key={movie.id} movie = {movie}/>))}
        
        </ul>
        )
       }
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default App;