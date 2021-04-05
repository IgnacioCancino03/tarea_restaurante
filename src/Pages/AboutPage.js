import React from 'react'
import { Breadcrumb } from '../components/About/Breadcrumb'
import { Chefs } from '../components/Reciclados/Chefs'
import { Footer } from '../components/Reciclados/Footer'
import { NavBar } from '../components/Reciclados/NavBar'
import { OurHistory } from '../components/Reciclados/OurHistory'
import { Testimonials } from '../components/Reciclados/Testimonials'

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb />
            <OurHistory />
            <Testimonials />
            <Chefs />
            <Footer />
        </>
    )
}
