import React from 'react'

//ICONS
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiSelectMultiple } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineWechat } from "react-icons/ai"

//IMAGES//
import avatar from '../../assets/Images/avatar.png'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import CryptoTabs from '../PageSections/CryptoTabs'


const Crypto = () => {
  return (
    <AcademyLayout>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid justify-between items-center gap-2">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white mb-4 lg:mb-0">The Complete Cryptocurrency Investment Course</h1>
              <p className='dark:text-white text-gray-800'>The Cryptocurrency market is filled with opportunities but it is only available to those with proper knowledge on how the market works. This course teaches you all you need to know about the crypto markets and how to Invest properly for short or long term gains.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                    <HiOutlineVideoCamera />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Online videos</h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                    <BiSelectMultiple />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Multiple resources</h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                    <IoIosPeople />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">Active Comunity</h1>
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-cool shadow-lg">
                <div className="md:flex md:items-start md:-mx-4">
                  <span className="inline-block p-2 text-white bg-primaryColor rounded-xl md:mx-4 dark:text-white dark:bg-primaryColor">
                    <AiOutlineWechat />
                  </span>

                  <div className="mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-xl font-black text-gray-700 capitalize dark:text-white">One-on-one mentorship</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full bg-white rounded-lg shadow-lg dark:bg-gray-900 mt-8">
              <div className="dark:bg-gray-900">
                <img src={avatar} alt="" className='w-28 pt-2' />
              </div>

              <div className="p-4 md:p-4">
                <h1 className="h-2 rounded-lg dark:bg-gray-900 dark:text-white text-lg font-bold">Frankie Freemann</h1>

                <p className="mt-4 dark:bg-gray-900 dark:text-white">
                  Web developer, Forex Trader and Crypto Enthusiast
                </p>
              </div>
            </div>

          </div>

          <CryptoTabs />
        </section>
      </div>
    </AcademyLayout>
  )
}

export default Crypto 
