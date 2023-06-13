import React, { useRef } from "react"
import { NavLink, Link } from 'react-router-dom'

//IMAGES
import academy from '../../assets/Images/academy.jpg'
import abtacademy from '../../assets/Images/abtacademy.jpg'
import career from '../../assets/Images/career.jpg'

//ICONS
import { FcCandleSticks } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { BsPersonCheck } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { BiWorld } from "react-icons/bi"

//COMPONENTS
import AcademyLayout from "../Layout/AcademyLayout"
import Button from '../Reusable/Button'



const Academy = () => {
    const courseRef = useRef()
    return (
        <AcademyLayout>
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex flex-col p-2 md:p-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2 px-1 md:px-4 ">
                            <div className="lg:max-w p-2 text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    Grow your skills,
                                    <span className="text-primaryColor">define your future.</span>
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    At Freemann Firms Academy, we provide students with access to 21st century skillsets at very little cost.
                                </p>
                                <div className="flex flex-row justify-center mt-4">
                                    <Button onClick={() => courseRef.current.scrollIntoView({ behavior: 'smooth' })} >Our Courses</Button>
                                    <Button active={true}>
                                        <Link to='/about'>About Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={academy} alt="Freemann Firms" />
                        </div>
                    </div>
                </section >
            </div>

            <div>
                <section className="bg-white dark:bg-gray-900 ">
                    <div className="container flex flex-col-reverse p-2 md:p-6 mx-auto lg:py-2 lg:flex-row lg:items-center ">
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 ">
                            <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={abtacademy} alt="Freemann Firms" />
                        </div>
                        <div className="w-full lg:w-1/2 px-1 md:px-4">
                            <div className="lg:max-w-lg p-2 text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    About Academy
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                                    At Fremann Firms Academy, we prepare students to be relevant to the modern day society. Our courses are Top-notch with very professional tutors, all whom are actively practicing the skillset they teach. Our Courses are structured to make you work smart rather than rely on just hard work alone & tailored to help students reach their potential and increase their financial status.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
            </div>

            <div ref={courseRef}>
                <section className="bg-cool dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto text-center">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"><span className="text-primaryColor">Featured Courses</span></h1>
                        <p className='dark:text-white' >Below are some of our featured courses</p>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 mb-8 p-2 ">
                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white border rounded-xl border-r-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg">
                                <span className="inline-block p-3 text-blue-500 bg-primaryColor rounded-full dark:text-white dark:bg-primaryColor">
                                    <FcCandleSticks className="w-6 h-6" />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Forex & Cryptocurrency trading</h1>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    Go from newbie to mastery, trading the financial market with ease.
                                </p>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    Learning and Understanding the financial markets like the palm of your hand.
                                </p>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    Go from active to passive income trading the financial markets using just your mobile phone or laptop from anywhere in the world.
                                </p>

                                <div className="flex flex-row justify-between w-full border-2 rounded p-2">
                                    <p className=" dark:text-white">Advanced</p>
                                    <p className=" dark:text-white">$250</p>
                                </div>

                                <Link to='/courses/forex' className="flex items-center -mx-1 text-lg text-primaryColor capitalize transition-colors duration-300 transform dark:text-primaryColor hover:text-secondaryColor dark:hover:text-secondaryColor">
                                    <Button>
                                        ENROLL
                                    </Button>
                                </Link>

                            </div>

                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white border rounded-xl border-r-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg">
                                <span className="inline-block p-3 text-white bg-primaryColor rounded-full dark:text-white dark:bg-primaryColor">
                                    <FcBullish />
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Cryptocurrency Investment</h1>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    Are you looking to Invest for short or long term profits??
                                </p>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    This complete cryptocurrency Investment course will teach you all the exact step by step approach to Investing in cryptocurrency, discovering the secrets top Experts like Elon musk don't want you to know.
                                </p>

                                <p className="text-gray-500 dark:text-gray-300 text-base">
                                    Every loophole to Investing was revealed in this Course, in the simplest form that even a 10year old child can understand and create wealth with it.
                                </p>

                                <div className="flex flex-row justify-between w-full border-2 rounded p-2">
                                    <p className=" dark:text-white">Intermediate</p>
                                    <p className=" dark:text-white">$100</p>
                                </div>

                                <Link to='/courses/crypto' className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500">
                                    <Button>
                                        ENROLL
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <Button >
                            <NavLink to="/courses" >
                                See All Courses
                            </NavLink>
                        </Button>
                    </div>
                </section>
            </div>

            <div >
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center ">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mb-4 lg:mb-0">Why learn with us?</h1>
                            <Button>
                                <NavLink to="/courses" >
                                    Our Courses
                                </NavLink>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                                        <BsPersonCheck />
                                    </span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">World Class Teachers</h1>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300 text-base">
                                            Our tutors are Top-notch and are highly rated in their various fields of expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                                        <GiOpenBook />
                                    </span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Top Notch Courses</h1>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300 text-base">
                                            Every course in Freemann Firms Academy is tailored to give out as much value as possible as they revolve around much needed 21st century skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                                        <IoMdChatboxes />
                                    </span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">One-on-One Mentorship</h1>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300 text-base">
                                            Enhance your learning experience with our One-on-One mentorship.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                                        <BiWorld />
                                    </span>

                                    <div className="mt-4 md:mx-4 md:mt-0">
                                        <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Global Students Community</h1>

                                        <p className="mt-3 text-gray-500 dark:text-gray-300 text-base">
                                            Connect with other students in our community and learn, share experiences as you harness the skill you are learning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2 px-1 md:px-4 text-center">
                            <div className="lg:max-w-lg pt-2 px-4">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    Grow your skills & Career! Start Learning With Academy
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    Personal development is very much needed for personal growth. At Freemann Firms Academy, we take personal development very seriously and that is why our courses are made available with lots of value at very little cost!
                                </p>
                                <div className="flex flex-row justify-center mt-4">
                                    <Button>
                                        <NavLink to="/courses" >
                                            Our Courses
                                        </NavLink>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={career} alt="Freemann Firms" />
                        </div>
                    </div>
                </section >
            </div>
        </AcademyLayout>
    )
}

export default Academy