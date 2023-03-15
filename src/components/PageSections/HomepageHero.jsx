import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

//COMPONENTS//
import Button from '../Reusable/Button'

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const HomepageHero = (props) => {

    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <motion.div className="hero" ref={ref} variants={boxVariant} initial='hidden' animate={control}>
            <div className="hero-image w-full bg-center bg-cover h-[38rem]">
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white lg:text-4xl p-3">FREEMANN FIRMS</h1>
                        <p className="text-2xl text-white p-2 mb-4">We are a New-Age Financial Technology Firm</p>
                        <Button onClick={props.onClick} disabled={false}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default HomepageHero