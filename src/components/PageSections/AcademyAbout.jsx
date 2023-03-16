import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//IMAGES//
import img from '../../assets/Images/abtacademy.jpg'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const AcademyAbout = () => {
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
            <section className="bg-white dark:bg-gray-900 ">
                <div className="container flex flex-col-reverse p-2 md:p-6 mx-auto lg:py-2 lg:flex-row lg:items-center ">
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2 ">
                        <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={img} alt="Freemann Firms" />
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
        </motion.div>
    )
}

export default AcademyAbout
