import React from 'react'
import lang from './utils/languageContants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 p-1 bg-black grid grid-cols-12'>
            <input type="text"
             placeholder= {lang[langKey].gptSearchPlaceholder}
             className='p-2 m-2 col-span-9 '  />
            <button className='col-span-3 text-lg font-semibold text-white 
            bg-green-600 py-1 px-4 cursor-pointer rounded-lg mx-2'>{lang[langKey].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar