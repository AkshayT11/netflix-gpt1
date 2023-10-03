
import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../Components/utils/constants';
import { addPopularMovies } from '../Components/utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies); 

    const getPopularMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results)) 
    } ;

    useEffect(()=> {
        // if my PopularMovies store is null then only fetch API Otherwise Not
       !popularMovies && getPopularMovies();
    },[])

  
}
 
export default usePopularMovies