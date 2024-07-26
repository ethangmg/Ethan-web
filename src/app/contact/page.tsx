'use client'

import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";

export default function Contact() {
  const [isShow, setIsShow] = React.useState(true)
  return (
    <div className='h-screen w-screen sm:w-full bg-gradient-light-rose-reverse dark:bg-gradient-reverse-blackCherry flex flex-col items-center text-white'>
      <div className='text-2xl m-5 w-screen sm:w-full text-center'>
        <h1 className='border-b-2 border-r-2 border-white w-1/2 rounded-sm'>Contact Me</h1>
      </div>
      <div className='p-5 text-lg'>
        <p>
          If you need to contact me, do not hesitate to do so.
        </p>
      </div>
      <div className='flex flex-col items-center justify-start w-40 text-3xl sm:flex sm:flex-row sm:justify-around sm:border-2 sm:border-white sm:rounded-lg  sm:w-1/2'>
        <div className='my-2'>
          <a href='https://www.linkedin.com/in/ethan-mart%C3%ADnez-553a9b289/'>
            <FaLinkedin />
          </a>
        </div>
        <div className='my-2'>
          <a href='https://github.com/ethangmg'>
            <FaGithub />
          </a>
        </div>
        <div className='my-2'>
          <a href='mailto:martinezexe7777@gmail.com'>
            <SiGmail />
          </a>
        </div>
        <div className=' flex flex-row text-3xl my-2'>
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? <FaPhoneAlt />
              : <p>+506 8682 9200</p>}
          </button>
        </div>
      </div>
      <div className='my-10'>
        <p>
          Thank you so much for your attention
        </p>
      </div>
      <div className='text-9xl'>
        <FaAngellist />
      </div>
    </div>
  )
}
