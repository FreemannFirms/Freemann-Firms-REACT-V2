import React, { useRef } from 'react'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import AcademyCareer from '../PageSections/AcademyCareer'
import AllCourses from '../PageSections/AllCourses'
import AcademyLearn from '../PageSections/AcademyLearn'
import CourseHero from '../PageSections/CourseHero'
import StudentsReview from '../PageSections/StudentsReview'

const Courses = () => {
    const courseRef = useRef()
    return (
        <AcademyLayout>
            <CourseHero onClickCourse={() => courseRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <div ref={courseRef}>
                <AllCourses />
            </div>
            <AcademyCareer />
            <AcademyLearn />
            <StudentsReview />
        </AcademyLayout>
    )
}

export default Courses