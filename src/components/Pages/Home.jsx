import React, { useRef } from "react"


//COMPONENTS//
import Layout from "../layout/Layout"
import HomepageAbout from "../PageSections/HomepageAbout"
import HomepageHero from "../PageSections/HomepageHero"
import HomepageMore from "../PageSections/HomepageMore"
import HomepagePro from "../PageSections/HomepagePro"
import HomepageService from "../PageSections/HomepageService"

const HomePage = () => {
    const serviceRef = useRef()
    const moreRef = useRef()


    return (
        <Layout>
            <HomepageHero onClick={() => serviceRef.current.scrollIntoView({ behavior: 'smooth' })} />
            <div ref={serviceRef}>
                <HomepageService onClick={() => moreRef.current.scrollIntoView({ behavior: 'smooth' })} />
            </div>
            <HomepageAbout />
            <HomepagePro />
            <div ref={moreRef}>
                <HomepageMore />
            </div>
        </Layout>
    )
}

export default HomePage