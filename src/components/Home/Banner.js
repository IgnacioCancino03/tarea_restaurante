import React from 'react'
import Play from '../../assets/img/icon/play.svg'
import Left1 from '../../assets/img/icon/left_1.svg'

export const Banner = () => {
    return (

        <section className="banner_part">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner_text">
                            <div className="banner_text_iner">
                                <h5>Expensive but the best</h5>
                                <h1>Deliciousness jumping into the mouth</h1>
                                <p>Together creeping heaven upon third dominion be upon won't darkness rule land
                                behold it created good saw after she'd Our set living. Signs midst dominion
                                creepeth morning</p>

                                <div className="banner_btn">
                                    <div className="banner_btn_iner">
                                        <a href="/reservation" className="btn_2">Reservation <img src={Left1} alt="" /></a>
                                    </div>
                                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" className="popup-youtube video_popup">
                                        <span><img src={Play} alt="" /></span> Watch our story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
