"use client"

import Image from 'next/image'
import React from 'react'
import Image1 from '../assets/Nissan.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


export default function Home() {

  return (
    <div className=' h-full w-full bg-gray-950 bg-gradient-teal flex flex-col items-center text-white '>
      <div id='0' className='bg-gradient-reverse-blackCherry h-screen w-screen rounded-lg flex flex-col text-center items-center justify-center content-center my-5 border-2 border-white sm:w-full'>
        <div className=''>
          <Image
            className='rounded-full my-5 w-52 h-52 '
            src={Image1}
            alt='Sample Image'
          />
        </div>
        <div className='my-10'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-3'>Ethan Martinez</h1>
          </div>
          <div className='text-xl'>
            <h4>Frontend Developer</h4>
          </div>
        </div>
        <div className='flex justify-evenly w-40 text-3xl'>
          <div>
            <a href='https://www.linkedin.com/in/ethan-mart%C3%ADnez-553a9b289/'>
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href='https://github.com/ethangmg'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div id='1' className=' bg-transparent backdrop-blur-lg h-screen w-screen rounded-lg flex flex-col text-center items-center justify-evenly content-center mb-5 p-5 sm:w-1/2 border-2 border-white  sm:w-full'>
        <div className='border-b-2 border-white border-double h-max '>
          <div className='text-start mb-2 text-slate-200'>
            <h1 className={`text-2xl`}>Resume</h1>
          </div>
          <div className='text-base text-start mb-5 text-white'>
            <h4>-from 0ctober 2023 to December 2023</h4>
            <h4>-4 years of preparation in web Development</h4>
            <h4>-too much projects realized</h4>
          </div>
          <div className='text-lg my-10  w-auto'>
            <p>since 2020 when i started in this world, i has been studing and put in practice all my knokledge as in personal projects as proffesinal projects </p>
          </div>
        </div>
        <div className='w-full mb-10 flex flex-col items-center'>
          <div className='flex flex-row items-center content-center justify-stretch text-2xl my-5 px-5  w-full '>
            <GiSkills />
            <h2>Skills</h2>
          </div>
          <div className='text-xl text-start '>
            <ul className='sm:flex sm:flex-row sm:justify-center sm:w-screen sm:flex-wrap sm:px-2'>
              <li className='sm:m-2'>-HTML</li>
              <li className='sm:m-2'>-CSS</li>
              <li className='sm:m-2'>-Java Script</li>
              <li className='sm:m-2'>-React JS</li>
              <li className='sm:m-2'>-TailwindCSS</li>
              <li className='sm:m-2'>-Redux toolkit</li>
              <li className='sm:m-2'>-Typescript</li>
              <li className='sm:m-2'>-React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
