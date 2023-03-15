import React from 'react'
import { Link } from 'react-router-dom';

//ICONS//
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

//COMPONENTS//
import Button from '../Reusable/Button';

const ComingsoonHero = () => {
    return (
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
    )
}

export default ComingsoonHero
