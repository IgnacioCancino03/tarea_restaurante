import React from 'react'
import { Reservation } from '../components/Home/Reservation'
import { Footer } from '../components/Reciclados/Footer'
import { NavBar } from '../components/Reciclados/NavBar'
import { Video } from '../components/Reciclados/Video'
import { Breadcrumbs } from '../components/Reservation/Breadcrumbs'

export const reservation = () => {
    return (

        <>
            <NavBar />
            <Breadcrumbs />
            <Reservation />
            <Video />
            <Footer />   
        </>
    )
}
