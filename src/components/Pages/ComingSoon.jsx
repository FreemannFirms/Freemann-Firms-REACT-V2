import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

//ICONS//
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

//IMAGES//
import img from '../../assets/Images/FF.png'

//COMPONENTS
import Button from '../Reusable/Button';

const ComingSoon = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <nav className="bg-stone-900">
                <div className="container px-6 py-4 mx-auto bg-amber-900">
                    <div className="lg:flex lg:items-center p-2  bg-amber-900">
                        <div className="flex items-center justify-between lg:ml-9  bg-amber-900">
                            <div className="flex items-center justify-between p-1">
                                <a href="#" className="">
                                    <img className="w-auto h-10 sm:h-7" src={img} alt="" />
                                </a>
                                <h1 className="hidden md:block p-1 text-white uppercase font-extrabold " >
                                    Freemann Firms
                                </h1>
                            </div>


                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button onClick={() => setOpen(!open)} type="button" className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={`${open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full '}` + "absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-yellow-700 dark:bg-gray-800 lg:mt-0 lg:p-1 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-around"}>
                            <div className="flex flex-col text-white capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <NavLink to="/" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-primaryColor dark:hover:text-grao-200" >Home</NavLink>
                            </div>

                            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                                <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <BsWhatsapp />
                                </a>
                                <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <FiInstagram />
                                </a>
                                <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                                    <BsTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div >
            </nav >

            <div className="Cmshero-image">
                <div className="w-full bg-center bg-cover h-[38rem]">
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-white lg:text-4xl p-3">We're coming soon</h1>
                            <p className="text-2xl text-white p-2 mb-4">We are a New-Age Financial Technology Firm</p>
                            <Button>
                                <Link>
                                    Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-900/40">
                    <h1 className="text-white font-bold text-xl lg:text-3xl">STAY CONNECTED</h1>
                    <div className="flex justify-center mt-6 lg:flex mb-8 lg:-mx-2">
                        <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                            <BsWhatsapp />
                        </a>
                        <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                            <FiInstagram />
                        </a>
                        <a href="#" className="mx-2 text-white transition-colors duration-300 transform dark:text-gray-300 hover:text-primaryColor dark:hover:text-gray-300" aria-label="Reddit">
                            <BsTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ComingSoon
