import React from 'react'

//IMAGES//
import img from '../../assets/Images/courses.jpg'

//COMPONENTS//
import Button from '../Reusable/Button'

const ForexAbout = () => {
    return (
        <div className='container mx-auto'>
            <div className='p-2'>
                <h1 className='font-bold'>ABOUT THE COURSE</h1>
                <img src={img} alt="" />
            </div>
            <div className='p-2'>
                <h1 className='font-bold'>WHAT ARE YOU GOING TO LEARN? OUR CURRICULUM COVERS THE FOLLOWING</h1>
                <div className='p-2'>
                    <ul>
                        <li>1. The fundamentals of Forex & Crypto Trading.</li>
                        <li>2. Market Analysis(Funadmental & Technical).</li>
                        <li>3. Risk Management.</li>
                        <li>4. Trading Psychology.</li>
                    </ul>
                </div>
                <p>We believe that education is key to success in Trading the financial markets, which is why this course is tailored to take students from beginners to advanced. The course is designed to be interactive and hands-on, providing students with real-world experience in a simulated trading environment.</p>
                <br />
                <p>In addition to our courses, we also provide ongoing support to our students through webinars, one-on-one coaching, and a supportive online community. Our goal is to ensure that our students have all the resources they need to reach their trading goals. Join us today and start your journey to becoming a successful Forex trader. With our expert guidance and dedication to your success, the possibilities are endless.</p>
                <div className='pt-4'>
                    <h1 className='font-bold'>Duration: 4 Months</h1>
                    <h1 className='font-bold'>Mentorship: 1 year</h1>
                </div>
            </div>
            <Button>
                Enroll
            </Button>
        </div>
    )
}


export default ForexAbout