import { createSlice } from "@reduxjs/toolkit";
 

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies:null
     },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
          addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },

      
    }

});
export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions

export default movieSlice.reducer;