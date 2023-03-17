import React from 'react'

//ICONS//
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiSelectMultiple } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineWechat } from "react-icons/ai"

//IMAGES//
import avatar from '../../assets/Images/avatar.png'

const ForexHeader = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="grid justify-between items-center gap-2">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mb-4 lg:mb-0">Forex & Crypto Trading MasterClass</h1>
                        <p>Go from beginner to Master with the "Forex & crypto Trading masterclass". Learn how to properly analyze and Trade any financial markets which allows you to Earn passive or active Income.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
                        <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <HiOutlineVideoCamera />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Online videos</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <BiSelectMultiple />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Multiple resources</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <IoIosPeople />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Active Comunity</h1>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 bg-cool">
                            <div className="md:flex md:items-start md:-mx-4">
                                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <AiOutlineWechat />
                                </span>

                                <div className="mt-4 md:mx-4 md:mt-0">
                                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">One-on-one mentorship</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full bg-white rounded-lg shadow-lg dark:bg-gray-800 mt-8">
                        <div className="dark:bg-gray-600">
                            <img src={avatar} alt="" className='w-28 pt-2' />
                        </div>

                        <div className="p-4 md:p-4">
                            <h1 className="h-2 rounded-lg dark:bg-gray-700 text-lg font-bold">Frankie Freemann</h1>

                            <p className="mt-4 dark:bg-gray-700">
                                Web developer, Forex Trader and Crypto Enthusiast
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default ForexHeader