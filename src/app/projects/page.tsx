"use client"
import React from 'react'
import Image from 'next/image';
import { projectsData } from '../data/data';

export default function Projects() {

  return (
    <div className='bg-gradient-light-teal  dark:bg-gradient-teal h-full w-screen rounded-lg  text-center items-center flex flex-col sm:w-full text-white'>
      <div className='sm:flex sm:flex-col sm:justify-center sm:text-center sm:items-center sm:w-full'>
        <div className=' w-screen sm:w-full'>
          <h1 className=' text-2xl w-1/2 border-2 my-2 border-white border-l-0 rounded-r-lg'>Projects</h1>
        </div>
        <div className='text-base sm:w-full my-2'>
          <p>
            During these 4 years I have carried out projects of all kinds, from a simple login without java script to complex projects about which I have been learning a lot, about responsive design, components, state management, use of redux toolkit, application programming for phones, deployment. to clouds like Firebse, etc.
          </p>
        </div>
        <div className=' sm:w-full sm:px-2'>
          {
            projectsData.map((project) => (
              <div key={project.id} className='my-5  sm:w-full'>
                <div className='flex flex-col items-center'>
                  <Image
                    height={project.height}
                    width={project.width}
                    src={project.img}
                    alt={project.name}
                    className='rounded-lg'
                  />
                </div>
                <div className=' border-b-2 border-rose-400 flex flex-col items-start sm:w-full'>
                  <a className='hover:text-gray-300 ' href={project.url} target='_blank' rel='noopener noreferrer'>
                    <h2 className='text-xl border-b-2 border-white'>{project.name}</h2>
                  </a>
                  <p className='text-start text-sm my-3'>{project.description}</p>
                  <p>Language: {project.language}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className=' sm:w-full'>
        <div>
          <p className='w-screen sm:w-full text-start text-xl px-2 '> Also you can see some of my hosts projects</p>
        </div>
        <div className="p-2 ">
          <a
            href="https://react-hooks-resumen.web.app/"
            className="text-blue-400 sm:text-rose-400"

          >
            {" "}
            ReactHooks
          </a>
          <p>
            This is a summary that I did in my beginnings in react, summarizing the
            main react hooks
          </p>
        </div>
        <div className='my-5'>
          <a
            href="https://clock-app-7941c.web.app/"
            className="text-blue-400 sm:text-rose-400"
          >
            Clock Web Page
          </a>
          <p>
            This already mentioned is a website that provides the time on a digital clock and
            analog, stopwatch and a timer to
          </p>
        </div>
        <div className='pb-2'>
          <a
            href="https://calculator-app-644e1.web.app/"
            className="text-blue-400 sm:text-rose-400"
          >
            Calculator Web Page
          </a>
          <p>
            This is a web calculator with the basic functions of a
            calculator
          </p>
        </div>
      </div>
    </div >
  )
}
