import React from "react";

//IMAGE//
import img from "../../assets/Images/FF.png"

//ICONS//
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer footer-center  p-10 bg-primaryColor text-white text-primary-content">
            <div>
                <img className="w-10" src={img} alt="" />
                <p className="font-bold">
                    Freemann Firms Integrated Services Ltd.
                </p>
                <p>Copyright © 2023 - All rights reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="#" className="mx-2 text-white-900 transition-colors duration-300 transform dark:text-gray-300 hover:text-secondaryColor dark:hover:text-gray-300" aria-label="Reddit">
                        <BsWhatsapp className="w-8 h-8"/>
                    </a>
                    <a href="#" className="mx-2 text-white-900 transition-colors duration-300 transform dark:text-gray-300 hover:text-secondaryColor dark:hover:text-gray-300" aria-label="Reddit">
                        <FiInstagram className="w-8 h-8"/>
                    </a>
                    <a href="#" className="mx-2 text-white-900 transition-colors duration-300 transform dark:text-gray-300 hover:text-secondaryColor dark:hover:text-gray-300" aria-label="Reddit">
                        <BsTwitter className="w-8 h-8"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer