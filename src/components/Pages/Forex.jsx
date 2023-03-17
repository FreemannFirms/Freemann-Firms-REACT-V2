import React from 'react'

//COMPONENTS//
import AcademyLayout from '../Layout/AcademyLayout'
import ForexHeader from '../PageSections/ForexHeader'
import ForexTabs from '../PageSections/ForexTabs'


const Forex = () => {
  return (
    <AcademyLayout>
      <ForexHeader />
      <ForexTabs />
    </AcademyLayout>
  )
}

export default Forex