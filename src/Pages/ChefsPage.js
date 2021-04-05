import React from 'react'
import { Breadcrumb } from '../components/Chefs/Breadcrumb'
import { Chefs } from '../components/Reciclados/Chefs'
import { Footer } from '../components/Reciclados/Footer'
import { NavBar } from '../components/Reciclados/NavBar'
import { Video } from '../components/Reciclados/Video'

export const ChefsPage = () => {
    return (

        <>
            <NavBar />
            <Breadcrumb />
            <Chefs />
            <Video />
            <Footer />   
        </>
    )
}
