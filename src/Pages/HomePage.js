import React from 'react'

//Componentes de Página
import { Banner } from '../components/Home/Banner'
import { NavBar2 } from '../components/Home/NavBar2'
import { PopularDishes } from '../components/Home/PopularDishes'
import { RecentNews } from '../components/Home/RecentNews'
import { Reservation } from '../components/Home/Reservation'

//Componentes Reciclados
import { Chefs } from '../components/Reciclados/Chefs'
import { Footer } from '../components/Reciclados/Footer'
import { Menu } from '../components/Reciclados/Menu'
import { OurHistory } from '../components/Reciclados/OurHistory'
import { Testimonials } from '../components/Reciclados/Testimonials'
import { Video } from '../components/Reciclados/Video'


export const HomePage = () => {
    return (
        <>
          <NavBar2 />
          <Banner />
          <PopularDishes />
          <OurHistory />
          <Video />
          <Menu />
          <Chefs />
          <Reservation />
          <Testimonials />
          <RecentNews />
          <Footer />
            
        </>
    )
}
