import React from 'react'
import { Breadcrumb } from '../components/Contact/Breadcrumb'
import { Formulario } from '../components/Contact/Formulario'
import { Footer } from '../components/Reciclados/Footer'
import { NavBar } from '../components/Reciclados/NavBar'

export const ContactPage = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb />
            <Formulario />
            <Footer />
        </>
    )
}
