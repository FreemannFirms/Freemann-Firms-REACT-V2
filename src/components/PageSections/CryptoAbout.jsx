import React from 'react'

//IMAGES//
import img from '../../assets/Images/courses.jpg'

//COMPONENTS//
import Button from '../Reusable/Button'

const CryptoAbout = () => {
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
                Enroll
            </Button>
        </div>
  )
}


export default CryptoAbout