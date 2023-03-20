import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

//ICONS//
import { FcCandleSticks } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

//COMPONENTS//
import Button from '../Reusable/Button';

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}

const AllCourses = () => {
    const navigate = useNavigate()
    const control = useAnimation();
    const { ref, inView } = useInView();


    useEffect(() => {
        if (inView) {
            control.start('visible')
        } else {
            control.start('hidden')
        }
    }, [control, inView]);



    return (
        <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control}>
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
                    {/* <Button >
                        <NavLink to="/courses" >
                            See More
                        </NavLink>
                    </Button> */}
                </div>
            </section>
        </motion.div>
    )
}

export default AllCourses
