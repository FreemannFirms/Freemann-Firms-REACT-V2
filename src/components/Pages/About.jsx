import React from 'react'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import AboutHero from '../PageSections/AboutHero'
import Mission from '../PageSections/Mission'
import Contact from '../PageSections/Contact'

const About = () => {
    return (
        <AcademyLayout>
            <AboutHero />
            <Mission />
            <Contact />
        </AcademyLayout>
    )
}

export default About
