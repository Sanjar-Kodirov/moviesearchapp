import React, { useState } from 'react'

const SearchMovies = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async (e)=>{        
        e.preventDefault();
        console.log('Hello world');
        /* const query = 'Jurassic Park' */
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c30834563134344f78a38adfef5677ee&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res = await fetch(url)
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
            console.log(movies);
        }catch(err){
            console.error(err);
        }
    }
    // e.target.value = query
    return (
        <div>
            <div  className="w-50 mx-auto my-5" >
            <h1 className="display-4">Search movie</h1>
            <form onSubmit={searchMovies} className="form">
                <div className="form-group">
                    <input value={query} onChange={(e) => {  setQuery(e.target.value)  }} /* name="query" */ placeholder="movie app" className="form-control" type="text"/>
                </div>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className="card ">
                {movies.filter(movie => movie.poster_path).map(movies => 
                   <div className="card my-2">
                   <img className="card--image"
                       src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movies.poster_path}`}
                       alt={movies.title + ' poster'}
                       />
                       <div className="card--content">
                        <h3 className="card--title">{movies.title}</h3>
                        <p><small>RELEASE DATE: {movies.release_date}</small></p>
                        <p><small>RATING: {movies.vote_average}</small></p>
                        <p className="card--desc">{movies.overview}</p>
                        </div>
                    </div>
                )
                })}
            </div>
            </div>
        </div>
        
    )
}

export default SearchMovies
