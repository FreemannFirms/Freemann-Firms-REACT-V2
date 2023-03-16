import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

//ICONS//
import { RxTarget } from 'react-icons/rx';
import { FaEye } from 'react-icons/fa';

const ComponentVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}

export const Mission = () => {

    const { ref, inView } = useInView()
    const fade = useAnimation()

    useEffect(() => {
        if (inView) {
            fade.start('visible')
        } else {
            fade.start('hidden')
        }
    }, [fade, inView]);


    return (
        <motion.div ref={ref} variants={ComponentVariant} initial='hidden' animate={fade} >
            <section className='bg-white dark:bg-gray-900 mb-6'>
                <div className='flex flex-col gap-2 container p-4 md:p-6 mx-auto'>
                    <span className='text-3xl'>
                        <RxTarget />
                    </span>
                    <h1 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl pb-3'>
                        Mission
                    </h1>
                    <p>
                        At Freemann Firms Academy, our mission is to equip individuals with the skills they need to succeed in the 21st century. We believe that education is a key driver of personal and professional growth, and our goal is to provide students with a well-rounded education that prepares them for the challenges of the modern world. We are dedicated to delivering high-quality education that is accessible to everyone.
                        <br />
                        <br />
                        Our curriculum is designed to provide students with the knowledge and skills they need to succeed in today's rapidly changing environment. Our goal is to help our students achieve their full potential and reach their personal and professional goals. We are committed to providing ongoing support and resources to ensure their continued growth and success.
                    </p>
                </div>
                <div className='flex flex-col gap-2 container p-4 md:p-6 mx-auto'>
                    <span className='text-3xl'>
                        <FaEye />
                    </span>
                    <h1 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl pb-3' >
                        Vision
                    </h1>
                    <p>
                        To transform more than 5 million individuals all over the world, building 21st century skills.
                    </p>
                </div>
            </section>
        </motion.div>
    )
}


export default Mission