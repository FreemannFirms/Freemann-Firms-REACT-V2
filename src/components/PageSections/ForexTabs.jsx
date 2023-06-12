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
//             <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//         </div>),
//         userReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a',
//         userName: 'Mia Brown',
//         userOccupation: 'Marketing Manager at Stech'
//     },
//     {
//         userRating: (<div className="flex items-center">
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//             <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
//         </div>),
//         userReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a',
//         userName: 'Mia khalifa',
//         userOccupation: 'Marketing Manager at xvid'
//     }
// ]




const ForexTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <ThemeProvider theme={THEME}>
            <div className="container px-6 py-10 mx-auto dark:bg-gray-900">
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
                                        <h1 className='font-bold dark:text-white'>ABOUT THE COURSE</h1>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='font-bold dark:text-white'>WHAT ARE YOU GOING TO LEARN? OUR CURRICULUM COVERS THE FOLLOWING</h1>
                                        <div className='p-2 dark:text-white'>
                                            <ul>
                                                <li>1. The fundamentals of Forex & Crypto Trading.</li>
                                                <li>2. Market Analysis(Funadmental & Technical).</li>
                                                <li>3. Risk Management.</li>
                                                <li>4. Trading Psychology.</li>
                                            </ul>
                                        </div>
                                        <p className='dark:text-white'>We believe that education is key to success in Trading the financial markets, which is why this course is tailored to take students from beginners to advanced. The course is designed to be interactive and hands-on, providing students with real-world experience in a simulated trading environment.</p>
                                        <br />
                                        <p className='dark:text-white'>In addition to our courses, we also provide ongoing support to our students through webinars, one-on-one coaching, and a supportive online community. Our goal is to ensure that our students have all the resources they need to reach their trading goals. Join us today and start your journey to becoming a successful Forex trader. With our expert guidance and dedication to your success, the possibilities are endless.</p>
                                        <div className='pt-4 dark:text-white'>
                                            <h1 className='font-bold'>Duration: 4 Months</h1>
                                            <h1 className='font-bold'>Mentorship: 1 year</h1>
                                        </div>
                                    </div>
                                    <Button>
                                        <a href="https://selar.co/kbsf" target='_blank' >
                                            Enroll
                                        </a>
                                    </Button>
                                </div>
                            </Box>
                        )}
                        {value === 1 && (
                            <Box>
                                <div>
                                    <div className='dark:bg-gray-900 dark:text-white'>
                                        <h1 className='font-bold'>COURSE CONTENT</h1>
                                        <ul className='mb-4'>
                                            <li className='font-bold py-3' >INTRODUCTION</li>
                                            <li>1. Trading: A gateway to financial freedom.</li>
                                            <li>2. Understanding the Fundamentals of Trading.</li>
                                            <li>3. Basic Forex/Crypto Education</li>
                                            <li className='font-bold py-2' >TRADING VIEW BASICS</li>
                                            <li>1. Trendline tools.</li>
                                            <li>2. Geometric shapes.</li>
                                            <li>3. Annonation tools.</li>
                                            <li>4. Prediction & measurement tools.</li>
                                            <li className='font-bold py-2' >TECHNICAL ANALYSIS</li>
                                            <li>1. Understanding candlesticks.</li>
                                            <li>2. Market structure.</li>
                                            <li>3. Support & resistance.</li>
                                            <li>4. candlestick patterns.</li>
                                            <li>5. Chart patterns.</li>
                                            <li>6. Volume Price Analysis.</li>
                                            <li>7. Order blocks(OB).</li>
                                            <li>8. Liquidity Zones.</li>
                                            <li>9. Wychoff schematics.</li>
                                            <li>10. Indicators.</li>
                                            <li className='font-bold py-2' >WHERE THE MONEY IS</li>
                                            <li>1. Risk management.</li>
                                            <li>2. Compounding Interest.</li>
                                            <li>3. Entry, exit, Take Profit & Stop loss.</li>
                                            <li>4. Hedge Mode & Trailing stop.</li>
                                            <li>5. Trading Psychology.</li>
                                        </ul>
                                        <Button>
                                            <a href="https://selar.co/kbsf" target='_blank' >
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
                                    <section className="bg-white dark:bg-gray-900 dark:text-white">
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

export default ForexTabs
