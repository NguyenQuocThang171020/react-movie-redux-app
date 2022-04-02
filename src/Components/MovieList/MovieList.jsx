import { useSelector } from "react-redux"
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.scss"

const MovieList = () => {
  const movies = useSelector((state)=>state.movies.movies)
  let renderMovies = ""
  renderMovies =movies.Response ==="True" ? (
      <div className="movie">
          {movies.Search.map((movie,index)=>{
              return(
                 <MovieCard key={index} data={movie}/>
              )
          })}
      </div>
  ):(
      <div className="movies-error">
          {movies.Error}
      </div>
  )
  return (
    <div className="movie-wrapper">
            <div className="movie-list">
                <h2>MOVIES</h2>
                <div className="movie-container">
                   {renderMovies}
                </div>
            </div>
        </div>
  )
}

export default MovieList