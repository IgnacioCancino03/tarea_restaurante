import React from 'react'
import Play from '../../assets/img/icon/play.svg'
import SingleFood1 from '../../assets/img/food_menu/single_food_1.png'
import SingleFood2 from '../../assets/img/food_menu/single_food_2.png'
import SingleFood3 from '../../assets/img/food_menu/single_food_3.png'
import SingleFood4 from '../../assets/img/food_menu/single_food_4.png'
import SingleFood5 from '../../assets/img/food_menu/single_food_5.png'
import SingleFood6 from '../../assets/img/food_menu/single_food_6.png'

export const Menu = () => {
    return (
        <section className="food_menu gray_bg">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="section_tittle">
                            <p>Popular Menu</p>
                            <h2>Delicious Food Menu</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
                            <a className="active" id="Special-tab" data-toggle="tab" href="#Special" role="tab"
                                aria-controls="Special" aria-selected="false">Special <img src={Play}
                                    alt="play" /></a>
                            <a id="Breakfast-tab" data-toggle="tab" href="#Breakfast" role="tab" aria-controls="Breakfast"
                                aria-selected="false">Breakfast <img src={Play} alt="play" /></a>
                            <a id="Launch-tab" data-toggle="tab" href="#Launch" role="tab" aria-controls="Launch"
                                aria-selected="false">Launch <img src={Play} alt="play" /></a>
                            <a id="Dinner-tab" data-toggle="tab" href="#Dinner" role="tab" aria-controls="Dinner"
                                aria-selected="false">Dinner <img src={Play} alt="play" /> </a>
                            <a id="Sneaks-tab" data-toggle="tab" href="#Sneaks" role="tab" aria-controls="Sneaks"
                                aria-selected="false">Sneaks <img src={Play} alt="play" /></a>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active single-member" id="Special" role="tabpanel"
                                aria-labelledby="Special-tab">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood1} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Pork Sandwich</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood2} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Roasted Marrow</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood3} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Summer Cooking</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood4} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Easter Delight</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood5} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Tiener Schnitze</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood6} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Chicken Roast</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade single-member" id="Breakfast" role="tabpanel"
                                aria-labelledby="Breakfast-tab">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood4} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Easter Delight</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood5} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Tiener Schnitze</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood6} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Chicken Roast</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood1} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Pork Sandwich</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood2} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Roasted Marrow</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood3} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Summer Cooking</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade single-member" id="Launch" role="tabpanel"
                                aria-labelledby="Launch-tab">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood1} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Pork Sandwich</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood2} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Roasted Marrow</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood3} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Summer Cooking</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood4} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Easter Delight</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood5} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Tiener Schnitze</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood6} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Chicken Roast</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade single-member" id="Dinner" role="tabpanel"
                                aria-labelledby="Dinner-tab">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood4} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Easter Delight</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood5} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Tiener Schnitze</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood6} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Chicken Roast</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood1} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Pork Sandwich</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood2} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Roasted Marrow</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood3} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Summer Cooking</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade single-member" id="Sneaks" role="tabpanel"
                                aria-labelledby="Sneaks-tab">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood1} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Pork Sandwich</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood2} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Roasted Marrow</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood3} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Summer Cooking</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="single_food_item media">
                                            <img src={SingleFood4} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Easter Delight</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood5} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Tiener Schnitze</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                        <div className="single_food_item media">
                                            <img src={SingleFood6} className="mr-3" alt="..." />
                                            <div className="media-body align-self-center">
                                                <h3>Chicken Roast</h3>
                                                <p>They're wherein heaven seed hath nothing</p>
                                                <h5>$40.00</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
