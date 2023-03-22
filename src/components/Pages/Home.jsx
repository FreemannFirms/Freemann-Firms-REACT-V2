import React, { useRef } from "react";
import { NavLink } from 'react-router-dom';
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";


//COMPONENTS
import Layout from "../layout/Layout"
import Button from "../Reusable/Button";

//ICONS
import { HiAcademicCap } from 'react-icons/hi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { BsShopWindow } from 'react-icons/bs';
import { BsPlusLg } from "react-icons/bs"

//IMAGES
import about from '../../assets/Images/about.jpg'
import pro from '../../assets/Images/pro.jpg'

// const boxVariant = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
//     hidden: { opacity: 0, scale: 0 }
// };



const HomePage = (props) => {

    const serviceRef = useRef()
    const moreRef = useRef()

    // const control = useAnimation();
    // const [target, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     } else {
    //         control.start("hidden");
    //     }
    // }, [control, inView]);

    // ref={target} variants={boxVariant} initial='hidden' animate={control}

    return (
        <Layout>
            <div className="hero">
                <div className="hero-image w-full bg-center bg-cover h-[38rem]">
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div className="text-center">
                            <h1 className="text-4xl font-semibold text-white lg:text-4xl p-3">FREEMANN FIRMS</h1>
                            <p className="text-2xl text-white p-2 mb-4">We are a New-Age Financial Technology Firm</p>
                            <Button onClick={() => serviceRef.current.scrollIntoView({ behavior: 'smooth' })} disabled={false}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <section ref={serviceRef} className="bg-cool dark:bg-gray-900 mt-5">
                    <div className="container px-6 py-10 mx-auto text-center">
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 p-2 mb-4">
                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <HiAcademicCap className="w-6 h-6" />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Academy</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Learn to Earn with 21st century skillsets that revolve in and around the web, and harness the limitless potential of the internet to create lifetime financial sustainability.
                                </p>

                                <NavLink to="/academy" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>

                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <AiOutlineLineChart />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Invest</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    You Invest, we Trade the financials markets for you maximizing profits and minimizing lossess at all cost and give you returns on your Investment based on the performance of your preferred fund manager<span className="text-primaryColor">(COMING SOON)</span>.
                                </p>

                                <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>

                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <BsCurrencyBitcoin />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Trade</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Send, receive and trade your digital assets with ease! With our secure platform, your digital assets are safe<span className="text-primaryColor">(COMING SOON)</span>.
                                </p>

                                <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>

                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                                    <BsShopWindow />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Marketplace</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Connect with businesses and brands in real time. Pay for products, goods or services. Everything you need in one place<span className="text-primaryColor">(COMING SOON)</span>.
                                </p>

                                <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </NavLink>
                            </div>
                        </div>
                        <Button onClick={() => moreRef.current.scrollIntoView({ behavior: 'smooth' })} disabled={false}>
                            See More
                        </Button>
                    </div>
                </section>
            </div>

            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex flex-col p-2 md:p-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2" >
                            <img className="object-contain w-full h-full mx-auto lg:max-w-2xl p-2 " src={about} alt="Freemann Firms" />
                        </div>
                        <div className="w-full lg:w-1/2 px-1 md:px-4">
                            <div className="lg:max-w p-2 text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    About Us
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                                    Freemann Firms is a new age financial technology firm. Originally known as Freemann Firms Advertising(FFAds), Freemann Firms was founded in 2018 but it was not until 2020 that we became a registered company-RC 1847963. we are driven by the sole aim of empowering individuals to build generational wealth through trading the financial markets professionally, learning essential web design and development skillsets needed to thrive in this recent economy and beyond, thinking and investing exactly how the top players do that has continously built life time growth and success in wealth and mind. Connect with individuals, brands and businesses in our marketplace, and also trade your digital assets at almost zero cost per transaction. Now is the time to sail with us and build wealth in abundance, we are committed to helping you build your financial future today.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
            </div>

            <div>
                <section className="bg-cool dark:bg-gray-900">
                    <div className="container flex flex-col px-4 py-6 md:px-6 md:py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2 md:px-4 ">
                            <div className="lg:max-w-lg text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                                    We are professionals
                                </h1>
                                <p className="text-base text-justify pt-4">We have professionals in all areas of the tech space, from web developers & designers to UIUX designers, forex & crypto traders and Educators. All with years of experience bringing you the very best of services.</p>
                                <div className="mt-8 space-y-5">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Ideas and Plans</span>
                                    </p>

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Prompt strategies</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 border">
                            <img className="sm:object-cover object-contain w-full h-full mx-auto lg:max-w-2xl" src={pro} alt="freemann firms" />
                        </div>
                    </div>
                </section >
            </div>

            <div ref={moreRef}>
                <section className="flex flex-col bg-white dark:bg-gray-900 md:text-center p-4 md:items-center">
                    <div className="container p-2 text-center">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Our services</h1>
                        <p>Freemann Firms offers the following services</p>
                    </div>
                    <div className="container ">
                        <ul className="w-full menu menu-compact bg-base-100 md:px-10 md:py-4 rounded-box">
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Digital Asset Exchange</p>
                                    <a href="https://wa.link/15bxuc" target="_blank"><BsPlusLg /></a>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Forex Trading Education</p>
                                    <a href="https://wa.link/jhphun" target="_blank" ><BsPlusLg /></a>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Web design and development</p>
                                    <a href="https://wa.link/ksvxuk" target="_blank" ><BsPlusLg /></a>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>UIUX design</p>
                                    <a href="https://wa.link/qbe1np" target="_blank"><BsPlusLg /></a>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Graphics design</p>
                                    <a href="https://wa.link/qbe1np" target="_blank" ><BsPlusLg /></a>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Investment Services</p>
                                    <NavLink to="/comingsoon"><BsPlusLg /></NavLink>
                                </div>
                            </li>
                            <li className="md:p-2">
                                <div className="flex justify-between border p-4">
                                    <p>Import and Export</p>
                                    <a href="https://wa.link/kwz1of" target="_blank" ><BsPlusLg /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default HomePage