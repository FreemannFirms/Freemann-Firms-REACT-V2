import React from 'react'

//COMPONENTS//
import Button from '../Reusable/Button'

const HomepageHero = (props) => {
    return (
        <div className="hero">
            <div className="hero-image w-full bg-center bg-cover h-[38rem]">
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white lg:text-4xl p-3">FREEMANN FIRMS</h1>
                        <p className="text-2xl text-white p-2 mb-4">We are a New-Age Financial Technology Firm</p>
                        <Button onClick={props.onClick} disabled={false}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomepageHero