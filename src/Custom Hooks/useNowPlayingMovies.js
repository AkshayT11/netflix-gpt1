
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../Components/utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Components/utils/constants';

const useNowPlayingMovies = ()=>{
    // Fetching data from TMDB API and Update the Store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
};

export default useNowPlayingMovies;