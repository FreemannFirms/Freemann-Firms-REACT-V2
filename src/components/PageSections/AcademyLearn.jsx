import React from 'react'
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

//ICONS//
import { BsPersonCheck } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { IoMdChatboxes } from "react-icons/io";
import { BiWorld } from "react-icons/bi"

//COMPONENTS//
import Button from '../Reusable/Button';

const ComponentVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}


const AcademyLearn = () => {
    const fade = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fade.start('visible')
        } else {
            fade.start('hidden')
        }
    }, [fade, inView]);


    return (
        <motion.div ref={ref} variants={ ComponentVariant } animate={fade} initial='hidden' >
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
        </motion.div>
    )
}


export default AcademyLearn