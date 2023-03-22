import React, { useRef } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//IMAGES
import courses from '../../assets/Images/courses.jpg'
import career from '../../assets/Images/career.jpg'
import tine from '../../assets/images/tine.png';
import phillip from '../../assets/images/phillip.png';
import maryann from '../../assets/images/maryann.png';

//ICONS
import { FcCandleSticks } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { BsPersonCheck } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { BiWorld } from "react-icons/bi"

//COMPONENTS
import AcademyLayout from '../Layout/AcademyLayout'
import Button from '../Reusable/Button'


const Courses = () => {
    const courseRef = useRef()
    const navigate = useNavigate()

    return (
        <AcademyLayout>

            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex flex-col p-2 md:p-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2 px-1 md:px-4 ">
                            <div className="lg:max-w p-2 text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    <span className="">Courses</span>
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    Welcome to Freemann Firms Academy!
                                </p>
                                <div className="flex flex-row justify-center mt-4">
                                    <Button onClick={() => courseRef.current.scrollIntoView({ behavior: 'smooth' })} >View Courses</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={courses} alt="Freemann Firms" />
                        </div>
                    </div>
                </section >
            </div>

            <div ref={courseRef}>
                <section className="bg-cool dark:bg-gray-900 mt-5">
                    <div className="container px-6 py-10 mx-auto text-center">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"><span className="text-primaryColor">All available Courses</span></h1>
                        <p>Below are some of our available courses</p>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 mb-8 p-2 ">
                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
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
                                    <p className="">Advanced</p>
                                    <p>$250</p>
                                </div>

                                <Button onClick={() => navigate('forex')} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                            </div>

                            <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
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
                                    <p>Intermediate</p>
                                    <p>$100</p>
                                </div>

                                <Button onClick={() => navigate('Crypto')} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div >
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
                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
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

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
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

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
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

                            <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool shadow-lg">
                                <div className="md:flex md:items-start md:-mx-4">
                                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
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
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Why students love <span className='text-primaryColor' >Academy</span>
                        </h1>

                        <div className="flex justify-center mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-primaryColor rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-primaryColor rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-primaryColor rounded-full"></span>
                        </div>

                        <div className=''>
                            <Carousel className='text-center'>

                                <div className='px-6 py-10 h-full'>
                                    <div className="max-w-6xl mx-auto flex h-full w-full items-center mb-8">
                                        <div>
                                            <p className="flex items-center text-center text-gray-500 lg:mx-8 ">
                                                I am a participant in the COMPLETE CRYPTOCURRENCY INVESTMENT COURSE. The class was an eye opener towards everything cryptocurrency and beyond because you will be taught the basics in cryptocurrency and what digital currency is and what it is not. The course also is all encompassing owing to the fact that it diversified to other topics like Forex, Online Trading etc other than Digital Currency and also the sessions were very interactive. Without mincing words, I will comfortably aver that my experience after the session is worth the time & money spent. I'm happy i got the opportunity to enroll for the the course.
                                            </p>

                                            <div className="flex flex-col items-center justify-center mt-8">
                                                <img className="object-contain rounded-full w-14 h-14" src={phillip} alt="" />

                                                <div className="mt-4 mb-4 text-center">
                                                    <h1 className="font-semibold text-gray-800 dark:text-white">Phillip Nwakwo</h1>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Crypto Enthusiast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="legend"></p>
                                </div>

                                <div className='px-6 py-10 h-full'>
                                    <div className="max-w-6xl mx-auto flex h-full w-full items-center mb-8">
                                        <div>
                                            <p className="flex items-center text-center text-gray-500 lg:mx-8 ">
                                                Great Company/Great Service. I started my cryptocurrency journey some years back but after I attended "The complete cryptocurrency trading guide" by Freemann Firms Academy, my life has never remained the same. I transited from being a novice trader into being more of a professional trader and a better version of myself in decision making and also in my researching mentality and alot more. To Freemann Firms, being a part of your great learning institute has been a whole package of wonderful transformational experience and great learning period. I highly recommend Freemann Firms academy to everyone seeking to have such great knowledge in cryptocurrency trading from such a brilliant and humble mentor!
                                            </p>

                                            <div className="flex flex-col items-center justify-center mt-8">
                                                <img className="object-contain rounded-full w-14 h-14" src={tine} alt="" />

                                                <div className="mt-4 mb-4 text-center">
                                                    <h1 className="font-semibold text-gray-800 dark:text-white">Augustine Onyekwelu</h1>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Crypto Trader & Enthusiast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="legend"></p>
                                </div>

                                <div className='px-6 py-10 h-full'>
                                    <div className="max-w-6xl mx-auto flex h-full w-full items-center mb-8">
                                        <div>
                                            <p className="flex items-center text-center text-gray-500 lg:mx-8 ">
                                                In a world where everyone seems out to scam you, it's nice to have a reliable, honest and wonderful tutor like Frankie Freemann. Learning about crypto currencies from him is by far one of the best things that happened to me, from starting out knowing almost nothing as far as crypto is concerned, I have developed the skills and knowledge that has potentially changed my path to financial freedom. Taking you step by step with great online courses, live video meets, Q & A sessions and online students community. Now with the knowledge gained, I can invest smartly at the right time and with the right assets. I wouldn't hesitate to recommend it to everyone. Thank you Freemann Firms Academy for this wonderful experience.
                                            </p>

                                            <div className="flex flex-col items-center justify-center mt-8">
                                                <img className="object-contain rounded-full w-14 h-14" src={maryann} alt="" />

                                                <div className="mt-4 mb-4 text-center">
                                                    <h1 className="font-semibold text-gray-800 dark:text-white">Maryann Ezeama</h1>
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Crypto Enthusiast</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="legend"></p>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </section>
            </div>

        </AcademyLayout>
    )
}

export default Courses