import React, { useRef } from 'react'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import AcademyCareer from '../PageSections/AcademyCareer'
import AcademyCourses from '../PageSections/AcademyCourses'
import AcademyLearn from '../PageSections/AcademyLearn'
import CourseHero from '../PageSections/CourseHero'
import StudentsReview from '../PageSections/StudentsReview'

const Courses = () => {
    const courseRef = useRef()
    return (
        <AcademyLayout>
            <CourseHero onClickCourse={() => courseRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <div ref={courseRef}>
                <AcademyCourses />
            </div>
            <AcademyCareer />
            <AcademyLearn />
            <StudentsReview />
        </AcademyLayout>
    )
}

export default Courses