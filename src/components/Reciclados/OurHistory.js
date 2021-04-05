import React from 'react'
import Left2 from '../../assets/img/icon/left_2.svg'
import About from '../../assets/img/about.png'

export const OurHistory = () => {
    return (

        <section className="about_part">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-4 col-lg-5 offset-lg-1">
                        <div className="about_img">
                            <img src={About} alt="" />
                        </div>
                    </div>
                        
                        <div className="col-sm-8 col-lg-4">
                            <div className="about_text">
                                <h5>Our History</h5>
                                <h2>Where The Food’s As Good
                                As The Root Beer.</h2>
                                <h4>Satisfying people hunger for simple pleasures</h4>
                                <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep
                                abundantly bearing, him, gathering you
                                blessed bearing he our position best ticket in month hole deep </p>
                                <a href="/" className="btn_3">Read More <img src={Left2} alt="" /></a>
                            
                            </div>
                        </div>
                
                </div>
            </div>
        </section>
    )
}
