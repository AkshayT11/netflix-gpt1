import React from "react";

import { useSelector} from "react-redux";
import useMovieTrailer from "../Custom Hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
  
    
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    
    useMovieTrailer(movieId);

  
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        // Put ? befor trailerVideo bcz trailerVideo initaily null so it will thrown error 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key  + "?&autoplay=1&mute=1" }
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   
      ></iframe>
    </div>
  );
};

export default VideoBackground;
