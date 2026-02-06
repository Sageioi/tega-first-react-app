import React from 'react'


const MovieCard = ({movie: {title, poster_path, release_date, original_language}}) => {
    return (
        <div className="mx-auto max-w-md text-center rounded-md overflow-auto bg-white text-red-500 p-2 m-3">
            <img src={poster_path ? `https://tmdb.org/t/p/w500/${poster_path}`: '/no_movie.png'} alt={title}/>
            <h1 className='text-sm font-semibold tracking-wide uppercase'>{title}</h1>
            <h1> {"Release Date : " + release_date}</h1>
            <h1>{"Language : "+original_language} </h1>
        </div>
    )
}

export default MovieCard