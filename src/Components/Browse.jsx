import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Custom Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Custom Hooks/usePopularMovies';
import GptSearch from "./GptSearch";
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {showGptSearch ?  <GptSearch/> :
       <>
        <MainContainer/>
      <SecondaryContainer/> 
       </>  
    }
     
      
   {/* 
       MainContainer
           - VideoBackground
           - VideoTitle
       SecondaryContainer
           - All MovieList
               - Cards All   
   */}

    </div>
  )
}

export default Browse;