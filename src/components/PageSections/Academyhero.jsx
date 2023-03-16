import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//IMAGES//
import img from '../../assets/Images/academy.jpg'

//COMPONENTS//
import Button from '../Reusable/Button'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};


const Academyhero = (props) => {
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
                                <Button onClick={props.onClickCourse} >Our Courses</Button>
                                <Button active={true}>
                                    <Link to='/about'>About Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={img} alt="Freemann Firms" />
                    </div>
                </div>
            </section >
        </motion.div>
    )
}

export default Academyhero
