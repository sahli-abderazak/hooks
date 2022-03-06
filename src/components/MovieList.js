import React from 'react'
import MovieCard from './MovieCard'

function MovieList({Film, search,rating}) {
    return (
        <div className="movie-list">
            
            {Film.filter (el => el.name.toUpperCase().includes(search.toUpperCase().trim())&& el.rate>=rating).map ((el , key) => 
            <MovieCard key = {el.id } Aflem = {el} />  
            
            
            
            )  } 
        </div>
    )
}

export default MovieList
