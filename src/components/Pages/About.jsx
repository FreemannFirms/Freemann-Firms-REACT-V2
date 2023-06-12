import React from 'react'
import { Link } from 'react-router-dom'

//IMAGES//
import courses from '../../assets/Images/courses.jpg'

//ICONS
import { RxTarget } from 'react-icons/rx';
import { FaEye } from 'react-icons/fa';
import { MdOutlineMarkChatUnread } from 'react-icons/md';

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import Button from '../Reusable/Button'

const About = () => {
    return (
        <AcademyLayout>

            <div >
                <section className="bg-white dark:bg-gray-900">
                    <div className="container flex flex-col p-2 md:p-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2 px-1 md:px-4 ">
                            <div className="lg:max-w p-2 text-center">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                                    About Us
                                </h1>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    Freemann Firms Academy is your one stop shop for 21st century skillsets.
                                </p>
                                <div className="flex flex-row justify-center mt-4">
                                    <Button>
                                        <Link to='/courses'>
                                            Courses
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={courses} alt="Freemann Firms" />
                        </div>
                    </div>
                </section >
            </div>

            <div >
                <section className='bg-white dark:bg-gray-900'>
                    <div className='flex flex-col gap-2 container p-4 md:p-6 mx-auto'>
                        <span className='text-3xl dark:text-white'>
                            <RxTarget />
                        </span>
                        <h1 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl pb-3'>
                            Mission
                        </h1>
                        <p className='dark:text-white'>
                            At Freemann Firms Academy, our mission is to equip individuals with the skills they need to succeed in the 21st century. We believe that education is a key driver of personal and professional growth, and our goal is to provide students with a well-rounded education that prepares them for the challenges of the modern world. We are dedicated to delivering high-quality education that is accessible to everyone.
                            <br />
                            <br />
                            Our curriculum is designed to provide students with the knowledge and skills they need to succeed in today's rapidly changing environment. Our goal is to help our students achieve their full potential and reach their personal and professional goals. We are committed to providing ongoing support and resources to ensure their continued growth and success.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 container p-4 md:p-6 mx-auto'>
                        <span className='text-3xl dark:text-white'>
                            <FaEye />
                        </span>
                        <h1 className='text-2xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-3xl pb-3' >
                            Vision
                        </h1>
                        <p className='dark:text-white'>
                            To transform more than 5 million individuals all over the world, building 21st century skills.
                        </p>
                    </div>
                </section>
            </div>

            <div >
                <section className="bg-white dark:bg-gray-900">
                    <div className="container grid gap-8 px-6 py-12 mx-auto lg:grid-cols-3">
                        <div>
                            <p className="font-medium text-primaryColor dark:text-primaryColor">Contact us</p>

                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>

                            <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2 ">
                            <div className="p-4 rounded-lg bg-cool md:p-6 dark:bg-gray-800 shadow-lg">
                                <span className="inline-block p-3 text-primaryColor rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                                <p className="mt-2 text-sm text-primaryColor dark:text-primaryColor">freemannfirmsinfo@gmail.com</p>
                            </div>

                            <div className="p-4 rounded-lg bg-cool md:p-6 dark:bg-gray-800 shadow-lg">
                                <span className="inline-block p-3 text-primaryColor rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                    <MdOutlineMarkChatUnread />
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to support</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’re here to help.</p>
                                <p className="mt-2 text-sm text-primaryColor dark:text-primaryColor"><a href="https://wa.link/2n1wwa" target='_blank' >Start new chat</a></p>
                            </div>

                            <div className="p-4 rounded-lg bg-cool md:p-6 dark:bg-gray-800 shadow-lg">
                                <span className="inline-block p-3 text-primaryColor rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                                <p className="mt-2 text-sm text-primaryColor dark:text-primaryColor">Warri, Nigeria</p>
                            </div>

                            <div className="p-4 rounded-lg bg-cool md:p-6 dark:bg-gray-800 shadow-lg">
                                <span className="inline-block p-3 text-primaryColor rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Sat from 6am to 11pm.</p>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Sun from 10am to 11pm.</p>
                                <p className="mt-2 text-sm text-primaryColor dark:text-primaryColor">+(234) 81-0534-7598</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </AcademyLayout>
    )
}

export default About
