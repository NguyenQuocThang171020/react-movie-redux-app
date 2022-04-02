import { useEffect } from "react"
import "./home.scss"
import moviesApi from "../../common/api/moviesApi"
import { ApiKey } from "../../common/api/apiKey" 
import { useDispatch } from "react-redux"
import {addMovies} from "../../Redux/movieSlice" 
import MovieList from "../MovieList/MovieList"
const Home = (props) => {
  const {search} =props
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetchMovies = async()=>{
      const  res = await moviesApi.get(`/?apikey=${ApiKey}&s=${search}&type=movie`)
      return res
    }
    fetchMovies().then((result)=>dispatch(addMovies(result.data)))
    .catch((err)=>console.log(err));
  },[dispatch,search])

  return (
    (search.length===0)
    ?
      (<div className="enter-film">
        <p>Please Search Film</p>
      </div>)
    :
      (
        <div className="home-container">
          <div className="baner-img">
            <MovieList/>
          </div>
      </div>
      )
  )
}

export default Home