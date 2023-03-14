import React from 'react'
import { NavLink } from "react-router-dom";

//IMAGES//
import img from '../../assets/Images/career.jpg'

//COMPONENTS//
import Button from '../Reusable/Button';

const AcademyCareer = () => {
    return (
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
                    <img className="object-contain w-full h-full mx-auto rounded-md lg:max-w-2xl p-2" src={img} alt="Freemann Firms" />
                </div>
            </div>
        </section >
    )
}

export default AcademyCareer
