import React from 'react'
import Left1 from '../../assets/img/icon/left_1.svg'
import Blog1 from '../../assets/img/blog/blog_1.png'
import Blog2 from '../../assets/img/blog/blog_2.png'
import Blog3 from '../../assets/img/blog/blog_3.png'

export const RecentNews = () => {
    return (
        <section className="blog_item_section blog_section section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Recent News</p>
                            <h2>Latest From Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_blog_item">
                            <div className="single_blog_img">
                                <img src={Blog1} alt="" />
                            </div>
                            <div className="single_blog_text">
                                <div className="date">
                                    <a href="/" className="date_item">Apr 06, 2019 </a>
                                    <a href="/" className="date_item"> <span>#</span> Food News </a>
                                </div>
                                <h3><a href="/">Adama kind deep gatherin first over fter his great</a></h3>
                                <a href="/" className="btn_3">Read More <img src={Left1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_blog_item">
                            <div className="single_blog_img">
                                <img src={Blog2} alt="" />
                            </div>
                            <div className="single_blog_text">
                                <div className="date">
                                    <a href="/" className="date_item">Apr 06, 2019 </a>
                                    <a href="/" className="date_item"> <span>#</span> Food News </a>
                                </div>
                                <h3><a href="/">Adama kind deep gatherin first over fter his great</a></h3>
                                <a href="/" className="btn_3">Read More <img src={Left1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="single_blog_item">
                            <div className="single_blog_img">
                                <img src={Blog3} alt="" />
                            </div>
                            <div className="single_blog_text">
                                <div className="date">
                                    <a href="/" className="date_item">Apr 06, 2019 </a>
                                    <a href="/" className="date_item"> <span>#</span> Food News </a>
                                </div>
                                <h3><a href="/">Adama kind deep gatherin first over fter his great</a></h3>
                                <a href="/" className="btn_3">Read More <img src={Left1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none">
                        <div className="single_blog_item">
                            <div className="single_blog_img">
                                <img src={Blog1} alt="" />
                            </div>
                            <div className="single_blog_text">
                                <div className="date">
                                    <a href="/" className="date_item">Apr 06, 2019 </a>
                                    <a href="/" className="date_item"> <span>#</span> Food News </a>
                                </div>
                                <h3><a href="/">Adama kind deep gatherin first over fter his great</a></h3>
                                <a href="/" className="btn_3">Read More <img src={Left1} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
