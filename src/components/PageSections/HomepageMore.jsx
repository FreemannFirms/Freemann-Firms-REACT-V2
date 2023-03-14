import React from 'react'
import { NavLink } from "react-router-dom";


//ICONS//
import { BsPlusLg } from "react-icons/bs"

const HomepageMore = () => {
    return (
        <section className="flex flex-col bg-white dark:bg-gray-900 md:text-center p-4 md:items-center">
            <div className="container p-2 text-center">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Our services</h1>
                <p>Freemann Firms offers the following services</p>
            </div>
            <div className="container ">
                <ul className="w-full menu menu-compact bg-base-100 md:px-10 md:py-4 rounded-box">
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Digital Asset Exchange</p>
                            <a href="https://wa.link/15bxuc" target="_blank"><BsPlusLg /></a>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Forex Trading Education</p>
                            <a href="https://wa.link/jhphun" target="_blank" ><BsPlusLg /></a>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Web design and development</p>
                            <a href="https://wa.link/ksvxuk" target="_blank" ><BsPlusLg /></a>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>UIUX design</p>
                            <a href="https://wa.link/qbe1np" target="_blank"><BsPlusLg /></a>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Graphics design</p>
                            <a href="https://wa.link/qbe1np" target="_blank" ><BsPlusLg /></a>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Investment Services</p>
                            <NavLink to="/comingsoon"><BsPlusLg /></NavLink>
                        </div>
                    </li>
                    <li className="md:p-2">
                        <div className="flex justify-between border p-4">
                            <p>Import and Export</p>
                            <a href="https://wa.link/kwz1of" target="_blank" ><BsPlusLg /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}


export default HomepageMore