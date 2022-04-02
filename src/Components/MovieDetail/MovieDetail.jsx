import { useParams } from "react-router-dom";
import "./movieDetail.scss"
import { useEffect } from "react";
import moviesApi from "../../common/api/moviesApi"
import { ApiKey } from "../../common/api/apiKey" 
import { useDispatch, useSelector } from "react-redux";
import {addSelectMovie , removeSelectMovie} from "../../Redux/movieSlice"
import {AiFillStar} from "react-icons/ai"
import {FaThumbsUp} from "react-icons/fa"
import {FaFilm} from "react-icons/fa"
import {AiFillCalendar} from "react-icons/ai"
const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data =useSelector((state)=>state.movies.selectMovieOrShow)
  useEffect(()=>{
    const fetchMovies = async()=>{
      const  res = await moviesApi.get(`/?apikey=${ApiKey}&i=${imdbID}&Plot=full`)
      return res
    }
    fetchMovies().then((result)=>dispatch(addSelectMovie(result.data)))
    .catch((err)=>console.log(err));
    return ()=>{
      dispatch(removeSelectMovie())
  }
  },[dispatch,imdbID])
  console.log(data);
  return (
    <div className="movie-section">
    {Object.keys(data).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating <p><AiFillStar className="star"/></p> : {data.imdbRating}
            </span>
            <span>
              IMDB Votes <p><FaThumbsUp className="thumbs"/></p> :{" "}
              {data.imdbVotes}
            </span>
            <span>
              Runtime <p><FaFilm className="film"/></p> : {data.Runtime}
            </span>
            <span>
              Year <p><AiFillCalendar className="calendar"/></p> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </>
    )}
  </div>
  )
}

export default MovieDetail