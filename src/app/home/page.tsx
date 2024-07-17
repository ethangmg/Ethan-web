"use client"

import Image from 'next/image'
import React from 'react'
import Image1 from '../assets/Nissan.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


export default function Home() {

  return (
    <div className=' h-screen w-full bg-gray-950 bg-gradient-teal flex flex-row justify-center content-center items-center '>
      <div id='0' className='hover:z-10 bg-gradient-reverse-blackCherry h-screen w-48 rounded-lg flex flex-col text-center items-center justify-evenly content-center transition ease-in-out delay-150  hover:-translate-x-0 hover:absolute hover:w-96 hover:h-5/6 hover:scale-75 '>
        <div className=''>
          <Image
            className='rounded-full my-5 '
            src={Image1}
            width={100}
            height={90}
            alt='Sample Image'
          />
        </div>
        <div>
          <h1 className='text-3xl font-bold text-white'>Nissan</h1>
        </div>
        <div>
          <h4>Japan Car</h4>
        </div>
        <div className='flex justify-center w-full'>
          <FaLinkedin />
          <div className='mx-2'>
            <FaGithub />
          </div>
          <FaFacebook />
        </div>
      </div>

      <div id='1' className=' hover:z-0 bg-transparent backdrop-blur-lg h-screen w-48 rounded-lg flex flex-col text-center items-center justify-evenly content-center transition ease-in-out delay-150 hover:-translate-x-0 hover:absolute hover:w-11/12 hover:h-screen hover:scale-75 hover:shadow-2xl hover:shadow-rose-400'>
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
          <div className='flex flex-row items-center content-center justify-stretch text-2xl my-5 px-5  w-full'>
            <GiSkills />
            <h2>Skills</h2>
          </div>
          <div className='text-xl text-start '>
            <ul>
              <li>-HTML</li>
              <li>-CSS</li>
              <li>-Java Script</li>
              <li>-React JS</li>
              <li>-TailwindCSS</li>
              <li>-Redux toolkit</li>
              <li>-Typescript</li>
              <li>-React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
