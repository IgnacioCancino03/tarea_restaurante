import React from 'react'
import { Footer } from '../components/Reciclados/Footer'
import { NavBar } from '../components/Reciclados/NavBar'

export const NoPage = () => {
    return (
        <>
            <NavBar />
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>404</h2>
                                    <h2>Esta página no existe</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
