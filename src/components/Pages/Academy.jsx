import React, { useRef } from "react"

//COMPONENTS//
import AcademyLayout from "../Layout/AcademyLayout"
import AcademyAbout from "../PageSections/AcademyAbout"
import AcademyCareer from "../PageSections/AcademyCareer"
import AcademyCourses from "../PageSections/AcademyCourses"
import Academyhero from "../PageSections/Academyhero"
import AcademyLearn from "../PageSections/AcademyLearn"



const Academy = () => {
    const courseRef = useRef()
    return (
        <AcademyLayout>
            <Academyhero onClickCourse={() => courseRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <AcademyAbout />
            <div ref={courseRef}>
                <AcademyCourses />
            </div>
            <AcademyLearn />
            <AcademyCareer />
        </AcademyLayout>
    )
}

export default Academy