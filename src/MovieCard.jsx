import React from 'react'


const MovieCard = ({movie: {title, poster_path, release_date, original_language}}) => {
    return (
        <div className="m-12 max-w-auto text-center rounded-md overflow-auto bg-white text-red-500 p-2 m-3">
            <div className='flex justify-center items-center m-auto'>
            <img src={poster_path ? `https://tmdb.org/t/p/w500/${poster_path}`: '/no_movie.png' } className={`min-h-20  min-w-40 m-5 rounded-lg`} alt={title}/>
            </div>
            <h1 className='text-sm font-semibold tracking-wide uppercase'>{title}</h1>
            <h1> {"Release Date : " + release_date}</h1>
            <h1>{"Language : "+original_language} </h1>
        </div>
    )
}

export default MovieCard