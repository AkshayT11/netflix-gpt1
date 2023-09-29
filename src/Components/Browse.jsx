import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Custom Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Custom Hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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