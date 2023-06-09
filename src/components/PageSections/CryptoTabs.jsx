import * as React from 'react'
import { useState } from 'react';
import { Tabs, Tab, Box, ThemeProvider, createTheme } from '@mui/material';

//IMAGES
import img from '../../assets/Images/courses.jpg'

//COMPONENTS
import Button from '../Reusable/Button'


const sxStyle = {
    backgroundColor: '#fafafa',
}

const THEME = createTheme({
    typography: {
        "fontFamily": `"Poppins"`,
        "fontSize": 18,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

// const review = [
//     {
//         userRating: (<div className="flex items-center">
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//         </div>),
//         userReview: 'I am a participant in the COMPLETE CRYPTOCURRENCY INVESTMENT COURSE. The class was an eye opener towards everything cryptocurrency and beyond because you will be taught the basics in cryptocurrency and what digital currency is and what it is not. The course also is all encompassing owing to the fact that it diversified to other topics like Forex, Online Trading etc other than Digital Currency and also the sessions were very interactive. Without mincing words, I will comfortably aver that my experience after the session is worth the time & money spent. Im happy i got the opportunity to enroll for the the course.',
//         userName: 'Phillip Nwakwo',
//         userOccupation: 'Entreprenuer & Crypto Enthusiast'
//     },
//     {
//         userRating: (<div className="flex items-center">
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//         </div>),
//         userReview: 'In a world where everyone seems out to scam you, its nice to have a reliable, honest and wonderful tutor like Frankie Freemann. Learning about crypto currencies from him is by far one of the best things that happened to me, from starting out knowing almost nothing as far as crypto is concerned, I have developed the skills and knowledge that has potentially changed my path to financial freedom. Taking you step by step with great online courses, live video meets, Q & A sessions and online students community. Now with the knowledge gained, I can invest smartly at the right time and with the right assets. I would not hesitate to recommend it to everyone. Thank you Freemann Firms Academy for this wonderful experience.',
//         userName: 'Maryann Ezeama',
//         userOccupation: 'Crypto Enthusiast'
//     }
// ]


const CryptoTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <ThemeProvider theme={THEME}>
            <div className="container px-6 py-10 mx-auto">
                <Box sx={sxStyle}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        theme={THEME}
                    >
                        <Tab label="ABOUT THE COURSE" />
                        <Tab label="COURSE CONTENT" />
                        {/* <Tab label="REVIEWS" /> */}
                    </Tabs>
                </Box>
                <Box sx={sxStyle}>
                    <Box sx={{ }}>
                        {value === 0 && (
                            <Box>
                                <div className='container mx-auto dark:bg-gray-900 dark:text-white'>
                                    <div className='p-2'>
                                        <h1 className='font-bold'>ABOUT THE COURSE</h1>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='font-bold'>WHAT ARE YOU GOING TO LEARN? OUR CURRICULUM COVERS THE FOLLOWING</h1>
                                        <div className='p-2'>
                                            <ul>
                                                <li>1. What majority do not know about the financial markets, the truth untold.</li>
                                                <li>2. Everything Blockchain.</li>
                                                <li>3. Decentralized finance.</li>
                                                <li>4. Portfolio Management.</li>
                                                <li>4. Risk mitigation strategies.</li>
                                                <li>4. Market Analysis.</li>
                                            </ul>
                                        </div>
                                        <p>Whether you are a beginner or an experienced investor, this courses will suit your needs and enhance your skill levels. Our hands-on approach to learning allows students to practice what they learn in real-world scenarios and develop their own investment strategies.</p>
                                        <br />
                                        <p>In addition to the course, we provide ongoing support to our students through webinars, one-on-one coaching, and an active online community. Our aim is to ensure that our students have the tools and resources they need to succeed in the exciting world of cryptocurrency investing.</p>
                                        <br />
                                        <p>Join us today and take control of your financial future. With our expert guidance and commitment to your success, the opportunities for growth in the cryptocurrency market are limitless.</p>
                                        <div className='pt-4'>
                                            <h1 className='font-bold'>Duration: 3 Months</h1>
                                        </div>
                                    </div>
                                    <Button>
                                        <a href="https://selar.co/rtrq" target='_blank' >
                                            Enroll
                                        </a>
                                    </Button>
                                </div>
                            </Box>
                        )}
                        {value === 1 && (
                            <Box>
                                <div>
                                    <div  className='dark:bg-gray-900 dark:text-white'>
                                        <h1 className='font-bold'>COURSE CONTENT</h1>
                                        <ul className='mb-4'>
                                            <li className='font-bold py-3' >INTRODUCTION</li>
                                            <li>1. What you do not know about the financial markets, the truth untold.</li>
                                            <li>2. Proper villains, who they are and how they affect the world of finance.</li>
                                            <li className='font-bold py-2' >DIGITAL ACTIVITIES WITH RESPECT TO FINANCE</li>
                                            <li>1. Everything blockchain.</li>
                                            <li>2. What exactly is Cryptocurrency?</li>
                                            <li className='font-bold py-2' >DECENTRALIZED FINANCE</li>
                                            <li>1. Defi vs Cenfi, why knowing the difference is a game changer.</li>
                                            <li>3. Exchanges and wallets.</li>
                                            <li>4. Investing in Cryptocurrencies and all you need to know..</li>
                                            <li className='font-bold py-2' >MARKET ANALYSIS</li>
                                            <li>1. Introduction to Trading the Financial markets.</li>
                                            <li>2. Basic Technical Education.</li>
                                            <li>3. Spot Trading.</li>
                                            <li>4. Futures Trading.</li>
                                            <li className='font-bold py-2' >PORTFOLIO MANAGEMENT</li>
                                            <li>1. Stocks, forex, Crypto and Fiat, knowing the difference and how to maximize profits.</li>
                                            <li>2. Risk mitigation strategies.</li>
                                            <li>3. The issues arising with Cryptocurrencies and how to avoid them.</li>
                                        </ul>
                                        <Button>
                                            <a href="https://selar.co/rtrq" target='_blank'>
                                                Enroll
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Box>
                        )}
                        {/* {value === 2 && (
                            <Box>
                                <div>
                                    <section className="bg-white dark:bg-gray-900">
                                        <div className="container px-6 py-10 mx-auto">
                                            <h1 className='font-bold'>REVIEWS</h1>
                                            <div className="lg:-mx-6 lg:flex lg:items-center">
                                                <div className="mt-8 lg:px-6 lg:mt-0">
                                                    {
                                                        review.map(item => (
                                                            <div key={item.userName} className='mt-8'>
                                                                <div>
                                                                    {item.userRating}
                                                                </div>
                                                                <p className="text-gray-500 dark:text-gray-400 ">
                                                                    {item.userReview}
                                                                </p>

                                                                <h3 className="mt-2 text-lg font-medium text-blue-500">
                                                                    {item.userName}
                                                                </h3>
                                                                <p className="text-gray-600 dark:text-gray-300">
                                                                    {item.userOccupation}
                                                                </p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </Box>
                        )} */}
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    )
}


export default CryptoTabs