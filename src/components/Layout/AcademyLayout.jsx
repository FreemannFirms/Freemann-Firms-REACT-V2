import React from 'react'

//COMPONENTS//
import AcademyNavbar from '../Navigation/AcademyNavbar'
import Footer from '../Reusable/Footer'

const AcademyLayout = (props) => {
    return (
        <div>
            <AcademyNavbar />
            {props.children}
            <Footer />
        </div>
    )
}


export default AcademyLayout