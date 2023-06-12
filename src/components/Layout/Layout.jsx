import React from 'react'
import Navbar from '../Navigation/Navbar'
import Footer from '../Reusable/Footer'

const Layout = (props) => {
    return (
        <div className='dark'>
            <Navbar />
                {props.children}
            <Footer/>
        </div>
    )
}


export default Layout