import React, { useEffect, useRef } from "react";
import lang from "./utils/languageContants";
import { useDispatch, useSelector } from "react-redux";
import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";
import { addGptMovieResult } from "./utils/gptSLice";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  // Search movie in TMDB 
  const searchMovieTMDB = async (movie)=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS )
    const json = await data.json();
    
    return json.results;
  }

  

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make API call to GPT API and get Movie Results***

    const gptQuery = "Act as a Movie Recommendation suggest some movies for the query : " + searchText.current.value + ".only give me names of 5 movies, comma seperated  like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, Swades " ; 

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // For Error Handling
    if(!gptResults.choices){
      console.log("Movie is Not Presents");
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // To convert into Array list Results 
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For earch Movie search TMDB API 

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
    // this will return list of Promises 
    
    const tmdbResults = await Promise.all(promiseArray)

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}))

  };

  return ( 
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 p-1 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
        ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-2 col-span-9 "
        />
        <button
          className="col-span-3 text-lg font-semibold text-white 
            bg-green-600 py-1 px-4 cursor-pointer rounded-lg mx-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
