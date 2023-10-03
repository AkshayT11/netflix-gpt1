import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Components/utils/movieSlice";
import { API_OPTIONS } from "../Components/utils/constants";


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    // fetch movie Trailer
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
    
        // filter the results
     
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        
        dispatch(addTrailerVideo(trailer))
      };
    
      useEffect(() => {
        // if my trailerVideos store is null then only fetch API Otherwise Not
       !trailerVideo && getMovieVideos();
      }, []);
    
};

export default useMovieTrailer;