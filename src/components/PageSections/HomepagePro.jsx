import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//IMAGES//
import pro from '../../assets/Images/pro.jpg'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const HomepagePro = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    return (
        <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control}>
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
        </motion.div>
    )
}


export default HomepagePro