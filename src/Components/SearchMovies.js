import React from 'react'

const SearchMovies = () => {
    return (
        <div  className="w-50 mx-auto my-5" >
            <h1 className="display-4">Search movie</h1>
            <form className="form">
                <div className="form-group">
                    <input placeholder="movie app" className="form-control" type="text"/>
                </div>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovies
