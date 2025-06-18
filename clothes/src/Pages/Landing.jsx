import React from 'react'
import Navbar from '../navbar/Navbar'
import Section1 from '../Section1/Section1'
import Brand from '../Rectangle 3/Brand'
import Arrival from '../NewArrival/Arrival'
import Top from '../Topselling/Top'
import Style from '../style/Style'
import Customer from '../Customer/Customer'
import Footer from '../Footer/Footer'

const Landing = () => {
    return (
        <>
            <Navbar />
            <Section1 />
            <Brand />
            <Arrival />
            <Top />
            <Style />
            <Customer/>
            <Footer/>
        </>
    )
}

export default Landing