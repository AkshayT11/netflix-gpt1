import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-44 px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title} </h1>
        <p className='py-6 text-lg w-1/3'>{overview} </p>
        <div>
            <button className=' bg-white text-black font-semibold py-2 px-6 rounded-md cursor-pointer hover:bg-opacity-70 text-lg'>Play</button>
            <button className='bg-gray-500 text-white py-2 px-6 font-semibold rounded-md text-lg cursor-pointer mx-3'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle