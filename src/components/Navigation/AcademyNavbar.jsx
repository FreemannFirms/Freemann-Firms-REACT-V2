import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

//IMAGE//
import img from "../../assets/Images/FF.png";

//ICONS//
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";


const AcademyNavbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <nav className="bg-white shadow dark:bg-gray-900">
            <div className="container px-2 py-4 mx-auto">
                <div className="lg:flex lg:items-center bg-white text-base dark:bg-gray-900">
                    <div className="flex items-center justify-between lg:ml-9 dark:bg-gray-900">
                        <div className="flex items-center justify-between p-1">
                            <NavLink to="/" className="">
                                <img className="w-auto h-10 sm:h-7" src={img} alt="" />
                            </NavLink>
                            <h1 className="hidden md:block p-1 text-primaryColor uppercase font-extrabold " >
                                Freemann Firms
                            </h1>
                        </div>


                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={() => setOpen(!open)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full '}` + "absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 lg:mt-0 lg:p-1 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-around"}>
                        <div className="flex flex-col text-gray-600 capitalize dark:text-white lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            <NavLink to="/" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >Home</NavLink>
                            <NavLink to="/academy" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200" >Academy</NavLink>
                            <NavLink to="/courses" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200">Courses</NavLink>
                            <NavLink to="/about" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-gray-200">About</NavLink>
                        </div>

                        <div className="flex flex-col justify-center mt-6 md:flex-row lg:mt-0 lg:-mx-2 items-center">
                            <div className="flex items-center mt-2 lg:mt-0">
                                <a href="https://wa.link/yz70e7" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <BsWhatsapp />
                                </a>
                                <a href="https://www.instagram.com/freemann_firms" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <FiInstagram />
                                </a>
                                <a href="https://twitter.com/FreemannFirms" target='_blank' className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <BsTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    );
}

export default AcademyNavbar