"use client"
import React from 'react'
import CVImage from '../assets/Screenshot 2024-07-24 184714.png'
import Image from 'next/image'


export default function CV() {


  return (
    <div className='min-h-screen bg-gray-950 bg-gradient-reverse-blackCherry flex flex-col content-center items-center '>
      <h1 className='w-screen sm:w-full border-b-2 border-white text-center m-5 text-white'>My Resume</h1>
      <div className='p-5'>
        <a href='https://www.linkedin.com/in/ethan-mart%C3%ADnez-553a9b289/overlay/1721868286870/single-media-viewer/?profileId=ACoAAEYbLk8BIXuoGbmL3DPMjvSAa7RoFSz3ZsQ'>
          <Image
            src={CVImage}
            alt='CV'
            height={500}
            width={500}
          />
        </a>
      </div>
    </div>
  )
}
