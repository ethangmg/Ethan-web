'use client'

import React from 'react'

import { MdDarkMode } from "react-icons/md";
import ThemeContextProvider, { useTheme } from '../Components/Context/ThemeContextProvider';
import Link from 'next/link';




export default function Navigation() {

    const theme = useTheme()
    //bg-gradient-light-rose
    return (
        <ThemeContextProvider>
            <div className="relative">
                <div>
                    <nav className="sticky top-0 text-white dark:bg-gradient-blackCherry bg-gradient-light-rose" >
                        <div className="m-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-start">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/*  <!-- Mobile menu button-->*/}
                                    <div className='text-white text-2xl'>
                                        <button onClick={theme}>
                                            <MdDarkMode />
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-50 hover:bg-rose-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                        onClick={() => {
                                            document
                                                .getElementById("mobile-menu")
                                                ?.classList.toggle("hidden")
                                        }}
                                    >
                                        <span className="absolute -inset-0.5"></span>
                                        <span className="sr-only">Open main menu</span>
                                        {/*<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
    -->*/}
                                        <svg
                                            className="block h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                        {/*<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
    -->*/}
                                        <svg
                                            className="hidden h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                                            <div className='text-white text-2xl'>
                                                <button onClick={theme}>
                                                    <MdDarkMode />
                                                </button>
                                            </div>
                                            <Link

                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/home"}
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/about"}

                                            >
                                                About
                                            </Link>
                                            <Link
                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/skills"}
                                            >
                                                Skills
                                            </Link>
                                            <Link
                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/cv"}
                                            >
                                                CV
                                            </Link>
                                            <Link
                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/projects"}
                                            >
                                                Projects
                                            </Link>
                                            <Link
                                                className="text-gray-50 hover:bg-rose-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium focus:border-b-white focus:border-b-2"
                                                href={"/contact"}
                                            >
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/*<!-- Profile dropdown -->*/}
                                    <div className="relative ml-3">
                                        <div></div>

                                        {/*<!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
    -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Mobile menu, show/hide based on menu state*/}
                        <div className="sm:hidden" id="mobile-menu">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}

                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/home"}
                                >
                                    Home
                                </Link>
                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/about"}

                                >
                                    About
                                </Link>
                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/skills"}
                                >
                                    Skills
                                </Link>
                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/cv"}
                                >
                                    CV
                                </Link>
                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/projects"}
                                >
                                    Projects
                                </Link>
                                <Link
                                    className="text-gray-300 hover:bg-rose-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                    href={"/contact"}
                                >
                                    Contact
                                </Link>

                            </div>
                        </div>
                    </nav>
                    <hr />
                </div>
            </div >
        </ThemeContextProvider>
    );
};
