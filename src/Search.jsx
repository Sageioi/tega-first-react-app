import React from 'react'
import './Search.css'
import search from "./assets/search.png"
const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className=' bg-white rounded-[20px] m-2 p-3 flex relative'>
            <img src = {search}   alt='search' className='h-6.25'/>
            <input type='text' placeholder='Find a movie..' value= {searchTerm} onChange={(e) => setSearchTerm (e.target.value)}  className='ml-2 w-500 h-5 text-black p-2 border-none outline-none'/>
        </div>
    )
}

export default Search;