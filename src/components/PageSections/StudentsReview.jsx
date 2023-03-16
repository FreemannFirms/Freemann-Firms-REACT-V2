import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//IMAGES//
import tine from '../../assets/images/tine.png';
import phillip from '../../assets/images/phillip.png';
import maryann from '../../assets/images/maryann.png';

const ComponentVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}


const StudentsReview = () => {

    const fade = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            fade.start('visible')
        } else {
            fade.start('hidden')
        }
    });


    return (
        <motion.div variants={ComponentVariant} initial='hidden' animate={fade} ref={ref}>
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
        </motion.div>
    )
}


export default StudentsReview