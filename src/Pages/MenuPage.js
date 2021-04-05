import React from 'react'
import { Breadcrumb } from '../components/Menu/Breadcrumb'
import { Footer } from '../components/Reciclados/Footer'
import { Menu } from '../components/Reciclados/Menu'
import { NavBar } from '../components/Reciclados/NavBar'
import { Video } from '../components/Reciclados/Video'

export const MenuPage = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb />
            <Menu />
            <Video />
            <Footer />
        </>
    )
}
