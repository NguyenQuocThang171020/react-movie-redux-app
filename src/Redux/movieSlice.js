import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name : "movies",
    initialState:{
        movies:{},
        selectMovieOrShow:{}
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies = action.payload
        },
        addSelectMovie:(state,action)=>{
            state.selectMovieOrShow = action.payload
        },
        removeSelectMovie:(state)=>{
            state.selectMovieOrShow ={}
        }
    }
})
export const {addMovies,addSelectMovie,removeSelectMovie} = movieSlice.actions
export default movieSlice.reducer