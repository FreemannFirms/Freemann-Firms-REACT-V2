import React from 'react'
import { NavLink } from 'react-router-dom';

//ICONS//
import { HiAcademicCap } from 'react-icons/hi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { BsShopWindow } from 'react-icons/bs';

//COMPONENTS//
import Button from '../Reusable/Button';

const HomepageService = (props) => {
  return (
    <section className="bg-cool dark:bg-gray-900 mt-5">
            <div className="container px-6 py-10 mx-auto text-center">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 p-2 mb-4">
                    <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <HiAcademicCap className="w-6 h-6" />
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Academy</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Learn to Earn with 21st century skillsets that revolve in and around the web, and harness the limitless potential of the internet to create lifetime financial sustainability.
                        </p>

                        <NavLink to="/academy" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                    </div>

                    <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <AiOutlineLineChart />
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Invest</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            You Invest, we Trade the financials markets for you maximizing profits and minimizing lossess at all cost and give you returns on your Investment based on the performance of your preferred fund manager<span className="text-primaryColor">(COMING SOON)</span>.
                        </p>

                        <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                    </div>

                    <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <BsCurrencyBitcoin />
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Trade</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Send, receive and trade your digital assets with ease! With our secure platform, your digital assets are safe<span className="text-primaryColor">(COMING SOON)</span>.
                        </p>

                        <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                    </div>

                    <div className="services flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            <BsShopWindow />
                        </span>

                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Marketplace</h1>

                        <p className="text-gray-500 dark:text-gray-300">
                            Connect with businesses and brands in real time. Pay for products, goods or services. Everything you need in one place<span className="text-primaryColor">(COMING SOON)</span>.
                        </p>

                        <NavLink to="/comingsoon" className="flex items-center mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </NavLink>
                    </div>
                </div>
                <Button onClick={props.onClick} disabled={false}>
                        See More
                </Button>
            </div>
        </section>
  )
}

export default HomepageService
