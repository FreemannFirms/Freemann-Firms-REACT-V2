import React from 'react'

//IMAGES//
import about from '../../assets/Images/about.jpg'

const HomepageAbout = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col p-2 md:p-6 mx-auto lg:py-16 lg:flex-row lg:items-center">
                <div className="flex items-center justify-center w-full h-96 lg:w-1/2" >
                    <img className="object-contain w-full h-full mx-auto lg:max-w-2xl p-2 " src={about} alt="Freemann Firms" />
                </div>
                <div className="w-full lg:w-1/2 px-1 md:px-4">
                    <div className="lg:max-w p-2 text-center">
                        <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl pb-3">
                            About Us
                        </h1>
                        <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                            Freemann Firms is a new age financial technology firm. Originally known as Freemann Firms Advertising(FFAds), Freemann Firms was founded in 2018 but it was not until 2020 that we became a registered company-RC 1847963. we are driven by the sole aim of empowering individuals to build generational wealth through trading the financial markets professionally, learning essential web design and development skillsets needed to thrive in this recent economy and beyond, thinking and investing exactly how the top players do that has continously built life time growth and success in wealth and mind. Connect with individuals, brands and businesses in our marketplace, and also trade your digital assets at almost zero cost per transaction. Now is the time to sail with us and build wealth in abundance, we are committed to helping you build your financial future today.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default HomepageAbout