import React from 'react'

//COMPONENTS//
import AcademyNavbar from '../Navigation/AcademyNavbar'
import Footer from '../Reusable/Footer'

const AcademyLayout = (props) => {
    return (
        <div className='dark' >
            <AcademyNavbar />
                {props.children}
            <Footer />
        </div>
    )
}


export default AcademyLayout