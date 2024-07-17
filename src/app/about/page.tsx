import React from 'react'

export default function About() {
  return (
    <div className='h-screen bg-gray-950 bg-gradient-second border-2 border-green-500 flex flex-col content-center items-center justify-center '>
      <div className='bg-gradient-blackCherry h-96 w-64 mb-16 rounded-lg text-center items-center content-center hover:w-screen hover:h-screen  '>
        <h1 className='text-center text-white text-sm font-bold'>Welcome to the About Page</h1>
        <p className='text-center text-white text-lg'>This is the default About page.</p>
      </div>
    </div>
  )
}
