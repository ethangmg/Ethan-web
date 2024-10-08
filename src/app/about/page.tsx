import React from 'react'
import Link from 'next/link'

export default function About() {

  return (
    <div className='bg-gradient-light-teal  dark:bg-gradient-teal h-screen w-screen  rounded-lg text-center items-center flex flex-col text-gray-200 dark:text-white sm:w-full sm:h-full '>
      <div className='sm:w-3/4 border-2 border-white rounded-lg my-2 py-10'>
        <div className='text-2xl text-rose-800 bg-white border-2 rounded-r-lg border-white w-56 '>
          <h1>Personal Resume</h1>
        </div>
        <div className='text-sm'>
          <p >
            Organized, self-taught Frontend web developer, with excellent interpersonal skills, I always like to be feeding
            back my knowledge. I excel in teamwork, I look for a job in Wich I can further develop my skills and also help my
            colleagues, the company and the client
          </p>
        </div>
      </div>
      <div className=' bg-gradient-light-teal-reverse h-screen rounded-lg  sm:h-auto'>
        <div>
          <div className='text-2xl text-rose-800 pb-2 bg-white border-2 rounded-r-lg border-white w-56 mt-5'>
            <h2 >Proffessional Work Experience</h2>
          </div>
          <div className='flex flex-col justify-evenly h-auto border-b-2 border-white m-5'>
            <p className='text-lg'>JUNIOR WEB DEVELOPER</p>
            <p className='text-sm mb-5'>ENGLISH LEARN INSTITUTE</p>
            <ul className='text-start px-2'>
              <li>
                •Developed and maintained web pages using HTML,
                JAVASCRIPT, NEXT, TAILWINDCSS
              </li>
              <li> •Implemented styles and responsive Design using
                TailwindCSS and improve the interactivity of the page
              </li>
              <li>
                •I collaborated with other developers to improve the
                functionality of the site
              </li>
            </ul>
          </div>
        </div>
        <div className='dark:bg-gradient-reverse-blackCherry bg-gradient-light-rose-reverse  my-2'>
          <div className='text-2xl text-rose-800 mb-2 bg-white border-2 rounded-r-lg border-white w-56 mt-5'>
            <h2>Personal Experience</h2>
          </div>
          <div className='flex flex-col justify-evenly h-auto border-b-2 border-white m-5'>
            <div className='mb-5'>
              <p className='text-lg'>JUNIOR WEB DEVELOPER</p>
              <p className='text-sm '>Develop personal projects</p>
            </div>
            <div>
              <p className='my-5 text-start'>During these 4 years of learning I have developed projects in order to improve my skills among them:</p>
            </div>
            <ul className='text-start px-2'>
              <li>
                •Apply and create routing systems with react router dom
              </li>
              <li> •Implemented styles and responsive Design using
                TailwindCSS and improve the interactivity of the page
              </li>
              <li>
                •Resolve errors and improve project performance
              </li>
              <li>
                •Handling state with react hooks
              </li>
              <li>
                •Use tools like Redux toolkit
              </li>
              <li>
                •Use typescript
              </li>
              <li>
                •Use Libraries for Form Management and Validation such as react-form-hook or Formik
              </li>
            </ul>
            <div>
              <Link href={'/skills'}>More Skills</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


