import React from 'react'
import Chef1 from '../../assets/img/team/chefs_1.png'
import Chef2 from '../../assets/img/team/chefs_2.png'
import Chef3 from '../../assets/img/team/chefs_3.png'


export const Chefs = () => {

//Constante empieza con Array que contiene multiples objetos.
    const data = [
        {
            id: 1,
            name: "Adam Billiard ",
            rol: "Chef Master",
            img: Chef1,
            redes: {
                facebook: "/",
                twitter: "/",
                instagram: "/",
                skype: "/"
            },

        },

        {
            id: 2,
            name: "Fred Macyard",
            rol: "Chef Master",
            img: Chef2,
            redes: {
                facebook: "/",
                twitter: "/",
                instagram: "/",
                skype: "/"
            },

        },

        {
            id: 3,
            name: "Justin Stuard",
            rol: "Chef Master",
            img: Chef3,
            redes: {
                facebook: "/",
                twitter: "/",
                instagram: "/",
                skype: "/"
            },
        }

    ];
    


    return (
        
        <section className="chefs_part blog_item_section section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Team Member</p>
                            <h2>Our Experience Chefs</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    
                    {

                        data.map(Chef => ( 
                        <div className="col-sm-6 col-lg-4" key={Chef.id}>
                            <div className="single_blog_item">
                                <div className="single_blog_img">
                                    <img src={Chef.img} alt="" />
                                </div>

                                <div className="single_blog_text text-center">
                                    <h3>{Chef.name}</h3>
                                    <p>{Chef.rol}</p>
                                    <div className="social_icon">
                                        <a href={Chef.redes.facebook}> <i className="ti-facebook"></i> </a>
                                        <a href={Chef.redes.twitter}> <i className="ti-twitter-alt"></i> </a>
                                        <a href={Chef.redes.instagram}> <i className="ti-instagram"></i> </a>
                                        <a href={Chef.redes.skype}> <i className="ti-skype"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }                        
            
                </div>
            </div>
        </section>

    )
}
