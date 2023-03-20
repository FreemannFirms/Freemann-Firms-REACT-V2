import React from 'react'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import CryptoHeader from '../PageSections/CryptoHeader'
import CryptoTabs from '../PageSections/CryptoTabs'


const Crypto = () => {
  return (
    <AcademyLayout>
        <CryptoHeader />
        <CryptoTabs />
    </AcademyLayout>
  )
}

export default Crypto 
